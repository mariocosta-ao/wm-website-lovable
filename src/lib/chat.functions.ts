import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const chatSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      }),
    )
    .min(1)
    .max(20),
});

const SYSTEM_PROMPT = `És o assistente virtual da WIN MAC — Tecnologia e Comércio Geral, empresa angolana fundada em 2018, com sede em Talatona, Estrada Lar do Patriota, Edifício Patriota Prime, 3.º Andar, Luanda.

O que fazemos:
- Help desk e suporte técnico a empresas e particulares
- Manutenção preventiva e correctiva de computadores
- Instalação e gestão de redes com e sem fio
- Instalação e gestão de servidores Windows (DNS, DHCP, GPO, Active Directory, RemoteApp) e virtualização
- Instalação de sistemas operativos Windows e macOS, software e antivírus
- Licenciamento genuíno de software (Microsoft, Kaspersky, Veeam)
- Websites corporativos, e-mail profissional e domínios
- Climatização: instalação e manutenção de ar condicionado
Parceiros: Microsoft, Kaspersky, Veeam, HP, Lenovo, First Distribution, Dart, Stylus, Dynamics Africa.
Contactos: +244 942 663 026 / +244 947 018 079 · geral@win-mac.net

Regras de resposta:
- Responde sempre em português de Angola, na primeira pessoa do plural ("nós", "podemos").
- Sê breve (máximo 4 frases), claro e profissional. Nada de linguagem exagerada.
- Não inventes preços, prazos exactos nem serviços que não constam acima. Se não souberes, encaminha para o formulário de contacto ou WhatsApp.
- Quando o utilizador demonstrar intenção de compra ou pedir orçamento, convida-o a deixar os contactos no formulário da página Contactos.`;

export const askAssistant = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => chatSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      return {
        reply:
          "O assistente está temporariamente indisponível. Fale connosco pelo WhatsApp +244 942 663 026 ou por geral@win-mac.net.",
      };
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return {
          reply:
            "Estamos com muitos pedidos neste momento. Tente novamente dentro de instantes ou fale connosco pelo WhatsApp.",
        };
      }
      console.error("AI gateway error", response.status, await response.text());
      return {
        reply:
          "Não consegui responder agora. Envie-nos a sua questão pelo formulário de contacto e respondemos em até 24 horas.",
      };
    }

    const json = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    return {
      reply:
        json.choices?.[0]?.message?.content?.trim() ??
        "Não consegui responder agora. Fale connosco pelo WhatsApp +244 942 663 026.",
    };
  });
