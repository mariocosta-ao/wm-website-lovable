import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/site";

const title = "Serviços de TI e climatização — WIN MAC Luanda";
const description =
  "Help desk, manutenção preventiva e correctiva, redes com e sem fio, servidores Windows, licenciamento genuíno, websites e climatização para empresas em Luanda.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://win-mac.net/servicos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://win-mac.net/servicos" }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções de TI para manter o seu negócio a funcionar"
          description="Economize em infraestrutura, ganhe estabilidade e conte com uma equipa disponível quando precisa."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/60"
            >
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
