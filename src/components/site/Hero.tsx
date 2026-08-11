import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="surface-night relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-70" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow text-night-foreground/80">
            <span className="h-px w-8 bg-accent" />
            Tecnologia com propósito · Angola
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] md:text-6xl">
            Inovamos e crescemos <span className="text-ubuntu">juntos</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-night-foreground/80 md:text-lg">
            Construímos soluções digitais integradas — web, branding, redes e segurança — para
            organizações angolanas que querem crescer com bases sólidas.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-ubuntu px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-ubuntu transition-transform hover:-translate-y-0.5"
            >
              Falar com a nossa equipa <ArrowRight className="size-4" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-night-foreground/30 px-7 py-3.5 text-sm font-bold text-night-foreground transition-colors hover:border-night-foreground"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-night-foreground/20 pt-8">
            {[
              { v: "40+", l: "Projetos" },
              { v: "30+", l: "Organizações" },
              { v: "6+", l: "Anos" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-night-foreground">{s.v}</dt>
                <dd className="mt-1 text-sm text-night-foreground/70">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-night-foreground/15">
            <img
              src={heroImage}
              alt="Equipa da Mukanda Tec a desenvolver soluções digitais em Luanda"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-background px-5 py-4 shadow-panel md:-left-8">
            <p className="font-display text-2xl font-bold text-primary">Ubuntu</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Sou porque somos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
