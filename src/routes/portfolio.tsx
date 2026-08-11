import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Projetos da Mukanda Tec" },
      {
        name: "description",
        content:
          "Sites, plataformas e aplicações desenvolvidas pela Mukanda Tec para empresas em Angola: e-commerce, saúde, logística e media.",
      },
      { property: "og:title", content: "Portfólio — Mukanda Tec" },
      {
        property: "og:description",
        content: "Conheça projetos digitais construídos pela Mukanda Tec e os resultados alcançados.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos que inspiram confiança"
          description="Cada projeto começa num problema concreto de negócio. Estes são alguns dos resultados."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="flex h-44 items-center justify-center bg-accent/10">
                <span className="font-display text-5xl font-bold text-primary/40">
                  {project.name.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </span>
                <h2 className="mt-2 text-lg font-semibold">{project.name}</h2>
                <p className="mt-2 text-sm text-primary">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
