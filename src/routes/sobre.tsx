import { createFileRoute } from "@tanstack/react-router";
import aboutImage from "@/assets/about-team.jpg";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { stats, skills } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Mukanda Tec — Equipa técnica em Luanda" },
      {
        name: "description",
        content:
          "Conheça a Mukanda Tec: missão, valores e a equipa que constrói produtos digitais sólidos para empresas angolanas.",
      },
      { property: "og:title", content: "Sobre a Mukanda Tec" },
      {
        property: "og:description",
        content:
          "Uma equipa angolana focada em engenharia sólida, design cuidado e suporte que não desaparece.",
      },
    ],
  }),
  component: SobrePage,
});

const values = [
  {
    title: "Clareza acima de tudo",
    description:
      "Explicamos cada decisão técnica em linguagem simples. Não há caixas negras nos nossos projetos.",
  },
  {
    title: "Entrega que dura",
    description:
      "Construímos para funcionar daqui a três anos, não apenas no dia do lançamento.",
  },
  {
    title: "Compromisso local",
    description:
      "Conhecemos a realidade do mercado angolano — conectividade, pagamentos, logística e cultura.",
  },
];

function SobrePage() {
  return (
    <>
      <Section className="pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sobre nós"
              title="Construímos tecnologia com raiz angolana"
              description="A Mukanda Tec reúne programadores, designers e especialistas de infraestrutura que acreditam que qualquer empresa — grande ou pequena — merece software de qualidade internacional."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Começámos com projetos pequenos e crescemos pela recomendação dos clientes. Hoje
              acompanhamos negócios em comércio, saúde, logística e media, do primeiro protótipo até
              à manutenção do dia a dia.
            </p>
            <div className="mt-8 space-y-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.label}</span>
                    <span className="text-primary">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-ubuntu" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={aboutImage}
            alt="Equipa da Mukanda Tec a trabalhar num projeto"
            loading="lazy"
            width={1200}
            height={1408}
            className="w-full rounded-3xl border border-border object-cover shadow-panel"
          />
        </div>
      </Section>

      <Section className="bg-surface/40">
        <SectionHeading eyebrow="Valores" title="O que nos guia" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid gap-8 rounded-3xl border border-border bg-card px-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-ubuntu">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
