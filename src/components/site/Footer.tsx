import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, services } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2 md:pr-10">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A Nukanda Tec constrói produtos digitais sólidos para empresas angolanas — da primeira
            linha de código ao suporte do dia a dia.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-primary" /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="size-4 text-primary" /> {site.email}
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> {site.location}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link to="/servicos" className="transition-colors hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/sobre" className="transition-colors hover:text-primary">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="transition-colors hover:text-primary">
                Portfólio
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="transition-colors hover:text-primary">
                Contacto
              </Link>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nukanda Tec. Todos os direitos reservados.</p>
          <p>Feito em Luanda, para o mundo.</p>
        </div>
      </div>
    </footer>
  );
}
