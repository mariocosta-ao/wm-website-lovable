import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { cloudSolutions } from "@/lib/site";

const title = "Soluções em nuvem e licenciamento — WIN MAC";
const description =
  "Microsoft 365, backup Veeam, segurança Kaspersky e e-mail profissional: licenças genuínas e configuração completa para empresas angolanas.";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://win-mac.net/solucoes" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://win-mac.net/solucoes" }],
  }),
  component: SolucoesPage,
});

function SolucoesPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading
          eyebrow="Soluções em nuvem"
          title="Trabalhe de qualquer lugar, com dados protegidos"
          description="Implementamos e gerimos as plataformas que a sua equipa usa todos os dias, com licenças genuínas e suporte local."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cloudSolutions.map((solution) => (
            <article key={solution.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="eyebrow text-primary">{solution.vendor}</span>
              <h2 className="mt-3 text-xl font-semibold">{solution.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <ul className="mt-5 space-y-2">
                {solution.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {b}
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
