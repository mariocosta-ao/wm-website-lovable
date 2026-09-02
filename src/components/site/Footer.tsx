import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site, services } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-night">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2 md:pr-10">
          <Logo tone="night" />
          <p className="mt-5 font-display text-base text-night-foreground">{site.slogan}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-night-foreground/75">
            Empresa angolana de prestação de serviços em Tecnologias de Informação e Comunicação e
            em climatização, fundada em {site.founded}, com sede em Talatona, Luanda.
          </p>

          <div className="mt-6 space-y-2 text-sm text-night-foreground/80">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone className="size-4 text-accent" /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail className="size-4 text-accent" /> {site.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da WIN MAC"
              className="inline-flex size-9 items-center justify-center rounded-full border border-night-foreground/25 transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da WIN MAC"
              className="inline-flex size-9 items-center justify-center rounded-full border border-night-foreground/25 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-night-foreground">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-night-foreground/75">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/servicos" className="transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-night-foreground">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-night-foreground/75">
            <li>
              <Link to="/sobre" className="transition-colors hover:text-accent">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/solucoes" className="transition-colors hover:text-accent">
                Soluções em nuvem
              </Link>
            </li>
            <li>
              <Link to="/parceiros" className="transition-colors hover:text-accent">
                Parceiros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="transition-colors hover:text-accent">
                Contactos
              </Link>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-night-foreground/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-night-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} WIN MAC. Todos os direitos reservados.</p>
          <p>Tecnologia e Comércio Geral · Luanda, Angola</p>
        </div>
      </div>
    </footer>
  );
}
