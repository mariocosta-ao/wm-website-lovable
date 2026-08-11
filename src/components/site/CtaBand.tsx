import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "./Section";

export function CtaBand() {
  return (
    <Section className="pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-panel md:px-14">
        <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <SectionHeading
            eyebrow="Fale connosco"
            title="Pronto para levar o seu negócio mais longe?"
            description="Conte-nos o desafio e devolvemos uma proposta clara, com prazo e valor. Sem compromisso."
          />

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["Resposta em menos de 24 horas", "Orçamento 100% gratuito", "Suporte pós-entrega"].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
