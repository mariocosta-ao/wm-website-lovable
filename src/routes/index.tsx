import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { services, processSteps, stats, projects, testimonials, skills } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mukanda Tec — Inovamos e crescemos juntos" },
      {
        name: "description",
        content:
          "Web, sistemas, branding, redes e segurança para organizações angolanas. Construímos com excelência técnica e acompanhamos depois da entrega.",
      },
      { property: "og:title", content: "Mukanda Tec — Inovamos e crescemos juntos" },
      {
        property: "og:description",
        content:
          "Soluções tecnológicas integradas para organizações angolanas: web, branding, redes e segurança.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      <Section className="py-12 md:py-14 border-y border-border bg-surface/40">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Tecnologias que dominamos
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg font-semibold text-muted-foreground/70">
          {["React", "Node.js", "Laravel", "Flutter", "WordPress", "Docker", "PostgreSQL", "Figma"].map(
            (tech) => (
              <li key={tech} className="transition-colors hover:text-primary">
                {tech}
              </li>
            ),
          )}
        </ul>
      </Section>

      {/* Sobre */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Equipa da Mukanda Tec em reunião de projeto"
              loading="lazy"
              width={1200}
              height={1408}
              className="w-full rounded-3xl border border-border object-cover shadow-panel"
            />
            <div className="absolute -right-4 bottom-8 rounded-2xl border border-border bg-surface/95 px-5 py-4 shadow-panel backdrop-blur">
              <p className="font-display text-2xl font-bold text-primary">6+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Anos de experiência
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Quem somos"
              title="Ubuntu: sou porque somos"
              description="Somos uma equipa angolana que acredita no crescimento coletivo. Trabalhamos lado a lado com cada organização, explicamos cada decisão técnica e entregamos soluções que aguentam o dia a dia."
            />

            <div className="mt-8 space-y-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.label}</span>
                    <span className="text-primary">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/sobre"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Conheça a nossa história <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Serviços */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções completas, de ponta a ponta"
          description="Do primeiro esboço ao suporte contínuo — tudo o que precisa para operar e crescer no digital."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              {service.highlight ? (
                <span className="absolute right-5 top-5 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Mais procurado
                </span>
              ) : null}
              <h3 className="pr-24 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                to="/servicos"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Saber mais <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Processo */}
      <Section>
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um processo claro, sem surpresas"
          description="Quatro etapas transparentes que mantêm o projeto no prazo e alinhado consigo."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-4xl font-bold text-primary/30">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfólio */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos que geram resultados"
          description="Uma amostra do que já construímos para clientes em Angola e fora dela."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="flex h-40 items-center justify-center bg-accent/10">
                <span className="font-display text-4xl font-bold text-primary/40">
                  {project.name.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-primary">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Ver portfólio completo <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Números */}
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

      {/* Testemunhos */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Testemunhos"
          title="O que dizem os nossos clientes"
          description="A confiança de quem trabalha connosco é o nosso melhor indicador."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{t.author}</span>
                <span className="block text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
