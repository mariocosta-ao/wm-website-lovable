import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { site, services } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Nukanda Tec | Peça o seu orçamento" },
      {
        name: "description",
        content:
          "Fale com a Nukanda Tec em Luanda. Orçamento gratuito para sites, software à medida, apps e identidade visual. Resposta em 24 horas.",
      },
      { property: "og:title", content: "Contacto — Nukanda Tec" },
      {
        property: "og:description",
        content: "Peça um orçamento sem compromisso à Nukanda Tec. Resposta em menos de 24 horas.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Contacto"
        title="Conte-nos o seu projeto"
        description="Preencha o formulário ou fale connosco diretamente. Respondemos em menos de 24 horas úteis."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <Phone className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">Telefone</span>
              <span className="block text-sm text-muted-foreground">{site.phone}</span>
            </span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <MessageCircle className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">WhatsApp</span>
              <span className="block text-sm text-muted-foreground">Resposta rápida</span>
            </span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <Mail className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">E-mail</span>
              <span className="block text-sm text-muted-foreground">{site.email}</span>
            </span>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <MapPin className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">Localização</span>
              <span className="block text-sm text-muted-foreground">{site.location}</span>
            </span>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-7 md:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const body = [
              `Nome: ${data.get("nome")}`,
              `E-mail: ${data.get("email")}`,
              `Telefone: ${data.get("telefone")}`,
              `Serviço: ${data.get("servico")}`,
              "",
              String(data.get("mensagem") ?? ""),
            ].join("\n");
            window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
              `Pedido de orçamento — ${data.get("nome")}`,
            )}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium">Nome</span>
              <input
                name="nome"
                required
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="O seu nome"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">E-mail</span>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="nome@empresa.ao"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Telefone</span>
              <input
                name="telefone"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="+244 900 000 000"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Serviço</span>
              <select
                name="servico"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              >
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Outro</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block text-sm">
            <span className="font-medium">Mensagem</span>
            <textarea
              name="mensagem"
              rows={5}
              required
              className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              placeholder="Descreva o que precisa..."
            />
          </label>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5"
          >
            Enviar pedido
          </button>

          {sent ? (
            <p className="mt-4 text-center text-sm text-primary">
              Obrigado! Abrimos o seu cliente de e-mail para concluir o envio.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
