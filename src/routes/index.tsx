import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import {
  services,
  processSteps,
  stats,
  partners,
  differentials,
  clientTypes,
  faqs,
  site,
} from "@/lib/site";

const title = "WIN MAC — Soluções de TI, licenciamento e climatização em Luanda";
const description =
  "Empresa angolana de TI em Talatona, Luanda: help desk, redes, servidores, licenciamento genuíno Microsoft e Kaspersky, websites e climatização. Proposta em 24 horas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://win-mac.net/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://win-mac.net/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "WIN MAC",
          description,
          url: "https://win-mac.net/",
          telephone: site.phoneRaw,
          email: site.email,
          foundingDate: site.founded,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address,
            addressLocality: "Luanda",
            addressCountry: "AO",
          },
          areaServed: "Angola",
          sameAs: [site.facebook, site.instagram],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      <Section className="border-y border-border bg-surface/50 py-12 md:py-14">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-muted-foreground">
          Parceiros e fabricantes
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg font-semibold text-muted-foreground/70">
          {partners.slice(0, 8).map((p) => (
            <li key={p} className="transition-colors hover:text-primary">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* Serviços */}
      <Section>
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que a sua infraestrutura precisa"
          description="Da assistência diária à instalação de servidores e climatização de salas técnicas — uma só equipa responsável."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article
              key={service.slug}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              {service.highlight ? (
                <span className="absolute right-5 top-5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  Mais pedido
                </span>
              ) : null}
              <h3 className="pr-24 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                to="/servicos"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary"
              >
                Saber mais{" "}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-primary hover:text-primary"
          >
            Ver todos os serviços <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Porquê nós */}
      <Section className="bg-surface/50">
        <SectionHeading
          eyebrow="Porquê nós"
          title="Trabalhamos como parte da sua equipa"
          description="Comprometimento, rapidez e sigilo profissional em cada intervenção que fazemos."
        />
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

      {/* Processo */}
      <Section>
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um processo simples, do diagnóstico ao suporte"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-4xl font-bold text-primary/25">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Números */}
      <Section className="py-16">
        <div className="grid gap-8 rounded-3xl border border-border bg-card px-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Clientes */}
      <Section className="bg-surface/50">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Clientes"
            title="Servimos quem precisa de tecnologia a funcionar"
            description="Prestamos serviço a pessoas singulares e colectivas, sempre que a necessidade se enquadra na nossa área de atuação."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {clientTypes.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium"
              >
                <Check className="size-4 shrink-0 text-primary" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Perguntas frequentes" title="Respostas rápidas" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.question} className="group p-6">
              <summary className="cursor-pointer list-none font-display text-base font-semibold marker:hidden">
                {f.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
