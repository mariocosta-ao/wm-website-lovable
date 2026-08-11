import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "./Section";

export function CtaBand() {
  return (
    <Section className="pb-24">
      <div className="surface-night relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-14">
        <div className="pointer-events-none absolute inset-0 grid-veil opacity-60" />
        <div className="relative">
          <span className="eyebrow text-night-foreground/80">
            <span className="h-px w-8 bg-accent" />
            Falemos
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
            Conte-nos o desafio. Respondemos com um caminho claro.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-night-foreground/80">
            Analisamos o seu contexto e devolvemos uma proposta com âmbito, prazo e valor. Sem
            compromisso.
          </p>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-night-foreground/80">
            {["Resposta em menos de 24 horas", "Proposta gratuita", "Acompanhamento pós-entrega"].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  {item}
                </li>
              ),
            )}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-ubuntu px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-ubuntu transition-transform hover:-translate-y-0.5"
            >
              Pedir proposta <ArrowRight className="size-4" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-night-foreground/30 px-7 py-3.5 text-sm font-bold text-night-foreground transition-colors hover:border-night-foreground"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-night-foreground/30 px-7 py-3.5 text-sm font-bold text-night-foreground transition-colors hover:border-night-foreground"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>

          <p className="mt-8 font-display text-sm text-night-foreground/70">
            Inovamos e crescemos juntos
          </p>
        </div>
      </div>
    </Section>
  );
}
