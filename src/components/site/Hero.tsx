import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-60" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" />
            Soluções tecnológicas em Angola
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
            Tecnologia que <span className="text-ember">move</span> o seu negócio
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A Nukanda Tec desenha, constrói e mantém sites, sistemas e aplicações à medida — com
            engenharia sólida, design cuidado e suporte que não desaparece depois da entrega.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5"
            >
              Solicitar orçamento <ArrowRight className="size-4" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="size-4" /> Falar connosco
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { v: "40+", l: "Projetos" },
              { v: "30+", l: "Clientes" },
              { v: "6+", l: "Anos" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-primary">{s.v}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-panel">
            <img
              src={heroImage}
              alt="Equipa da Nukanda Tec a desenvolver software num escritório em Luanda"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-surface/95 px-5 py-4 shadow-panel backdrop-blur md:-left-8">
            <p className="font-display text-2xl font-bold text-primary">100%</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Dedicação total
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
