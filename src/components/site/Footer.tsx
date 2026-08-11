import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, services } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-night">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2 md:pr-10">
          <div className="flex">
            <Logo tone="night" />
          </div>
          <p className="mt-4 font-display text-base text-night-foreground">{site.slogan}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-night-foreground/75">
            Somos uma equipa angolana que constrói tecnologia integrada: web, branding, redes e
            segurança. Trabalhamos ao lado das organizações, do primeiro diagnóstico ao suporte
            diário.
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
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-accent" /> {site.location}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-[11px] font-black uppercase tracking-[0.18em] text-night-foreground">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-night-foreground/75">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link to="/servicos" className="transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-[11px] font-black uppercase tracking-[0.18em] text-night-foreground">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-night-foreground/75">
            <li>
              <Link to="/sobre" className="transition-colors hover:text-accent">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="transition-colors hover:text-accent">
                Portfólio
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="transition-colors hover:text-accent">
                Contacto
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
          <p>© {new Date().getFullYear()} Mukanda Tec. Todos os direitos reservados.</p>
          <p>Feito em Luanda, com ambição global.</p>
        </div>
      </div>
    </footer>
  );
}
