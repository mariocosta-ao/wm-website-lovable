import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { stats, differentials, site } from "@/lib/site";

const title = "Sobre nós — WIN MAC, empresa angolana de tecnologia";
const description =
  "Fundada em 2018, a WIN MAC é uma empresa de direito e capital 100% angolano, com sede em Talatona, dedicada a tecnologias de informação, comunicação e climatização.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://win-mac.net/sobre" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://win-mac.net/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <Section className="pt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Sobre nós"
            title="Uma empresa jovem, angolana e focada em resultados"
            description="A WIN MAC é uma sociedade de direito e capital 100% angolano, constituída no segundo semestre de 2018. Actuamos nas tecnologias de informação e comunicação e na climatização, servindo pessoas singulares e colectivas."
          />
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Nascemos para responder a um problema comum nas organizações angolanas: tecnologia
              instalada sem acompanhamento. Por isso trabalhamos de forma próxima, explicamos cada
              decisão técnica e mantemos o suporte depois da entrega.
            </p>
            <p>
              A nossa equipa reúne técnicos certificados em sistemas, redes e segurança. Cada
              intervenção é documentada e tratada com sigilo profissional.
            </p>
            <p>
              Sede em {site.address}. Atendemos em toda a província de Luanda e, mediante
              planeamento, no resto do país.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-3xl border border-border bg-card px-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/50">
        <SectionHeading eyebrow="Os nossos valores" title="Como nos comprometemos" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
