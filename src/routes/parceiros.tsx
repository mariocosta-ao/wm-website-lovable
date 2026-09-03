import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { partners } from "@/lib/site";

const title = "Parceiros e fabricantes — WIN MAC";
const description =
  "Trabalhamos com Microsoft, Kaspersky, Veeam, HP, Lenovo, First Distribution e outros parceiros para entregar tecnologia genuína em Angola.";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://win-mac.net/parceiros" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://win-mac.net/parceiros" }],
  }),
  component: ParceirosPage,
});

function ParceirosPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading
          eyebrow="Parceiros"
          title="Tecnologia genuína, suportada por quem a produz"
          description="As nossas parcerias garantem licenças válidas, equipamento original e acesso a suporte de fabricante."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-28 items-center justify-center rounded-2xl border border-border bg-card px-6 text-center font-display text-lg font-semibold text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
            >
              {p}
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
