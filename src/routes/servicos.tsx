import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { services, processSteps } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Nukanda Tec | Web, Software e Apps em Angola" },
      {
        name: "description",
        content:
          "Desenvolvimento web, software à medida, apps móveis, identidade visual, cloud e marketing digital para empresas em Angola.",
      },
      { property: "og:title", content: "Serviços — Nukanda Tec" },
      {
        property: "og:description",
        content:
          "Do desenvolvimento web ao software à medida: conheça as soluções da Nukanda Tec para o seu negócio.",
      },
    ],
  }),
  component: ServicosPage,
});

const deliverables = [
  "Levantamento de requisitos e proposta detalhada",
  "Design responsivo validado antes do desenvolvimento",
  "Código próprio, sem dependências desnecessárias",
  "Otimização de performance e SEO técnico",
  "Formação da equipa e documentação de utilização",
  "Suporte e manutenção após o lançamento",
];

function ServicosPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que o seu negócio precisa para operar no digital"
          description="Trabalhamos como equipa técnica externa: entendemos o problema, propomos a solução certa e ficamos responsáveis pelo resultado."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/40">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Incluído em cada projeto"
            title="O que entregamos sempre"
            description="Independentemente do tamanho do projeto, estes pontos fazem parte do nosso padrão de trabalho."
          />
          <ul className="space-y-4">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="size-3 text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Metodologia"
          title="Como um projeto avança connosco"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-4xl font-bold text-primary/30">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <ArrowUpRight className="mt-5 size-4 text-primary" />
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
