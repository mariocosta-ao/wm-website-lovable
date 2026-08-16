import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-winmac.jpg";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="surface-night relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-70" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow text-night-foreground/80">
            <span className="h-px w-8 bg-accent" />
            Soluções de TI · Luanda, Angola
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.06] md:text-6xl">
            Deixe-nos cuidar da <span className="text-signal">sua tecnologia</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-night-foreground/80 md:text-lg">
            Help desk, redes, servidores, licenciamento genuíno e climatização. Cuidamos da
            infraestrutura para que a sua equipa mantenha o foco em fazer crescer o negócio.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-signal transition-transform hover:-translate-y-0.5"
            >
              Pedir proposta <ArrowRight className="size-4" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-night-foreground/30 px-7 py-3.5 text-sm font-bold text-night-foreground transition-colors hover:border-night-foreground"
            >
              <MessageCircle className="size-4" /> Falar no WhatsApp
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-night-foreground/70">
            <ShieldCheck className="size-4 text-accent" />
            Parceiros Microsoft, Kaspersky, Veeam, HP e Lenovo
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-night-foreground/15">
            <img
              src={heroImage}
              alt="Técnico da WIN MAC a gerir servidores e infraestrutura de rede empresarial"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-background px-5 py-4 shadow-panel md:-left-8">
            <p className="font-display text-2xl font-bold text-primary">Desde 2018</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Capital 100% angolano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
