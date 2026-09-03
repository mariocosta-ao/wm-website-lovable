import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MapPin, Phone, MessageCircle, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { site, contactTopics } from "@/lib/site";
import { submitContact } from "@/lib/contact.functions";

const title = "Contactos — WIN MAC, Talatona, Luanda";
const description =
  "Fale connosco: +244 942 663 026, geral@win-mac.net ou Edifício Patriota Prime, 3.º Andar, Talatona, Luanda. Respondemos a pedidos de proposta em até 24 horas.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://win-mac.net/contacto" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://win-mac.net/contacto" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          url: "https://win-mac.net/contacto",
        }),
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setStatus("sending");
    setError("");
    try {
      await send({
        data: {
          name: values.name ?? "",
          email: values.email ?? "",
          phone: values.phone ?? "",
          company: values.company ?? "",
          topic: values.topic ?? "",
          subject: values.subject ?? "",
          message: values.message ?? "",
        },
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Não foi possível enviar a mensagem. Tente novamente ou fale connosco pelo WhatsApp.");
    }
  }

  const field =
    "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary";

  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Contactos"
        title="Vamos falar sobre a sua tecnologia"
        description="Envie-nos o seu pedido e respondemos em até 24 horas úteis com um plano e uma proposta."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.25fr]">
        <aside className="space-y-4">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <Phone className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">Telefone</span>
              <span className="block text-sm text-muted-foreground">{site.phone}</span>
              <span className="block text-sm text-muted-foreground">{site.phoneAlt}</span>
            </span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <Mail className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">E-mail</span>
              <span className="block text-sm text-muted-foreground">{site.email}</span>
            </span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <MessageCircle className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">WhatsApp</span>
              <span className="block text-sm text-muted-foreground">Resposta rápida em horário útil</span>
            </span>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <MapPin className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">Escritório</span>
              <span className="block text-sm text-muted-foreground">{site.address}</span>
              <span className="mt-2 block text-sm text-muted-foreground">{site.hours}</span>
            </span>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 md:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Nome*
              <input name="name" required minLength={2} className={field} />
            </label>
            <label className="text-sm font-medium">
              E-mail*
              <input name="email" type="email" required className={field} />
            </label>
            <label className="text-sm font-medium">
              Telefone
              <input name="phone" inputMode="tel" className={field} />
            </label>
            <label className="text-sm font-medium">
              Empresa
              <input name="company" className={field} />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Assunto do pedido*
              <select name="topic" required defaultValue="" className={field}>
                <option value="" disabled>
                  Seleccione um tópico
                </option>
                {contactTopics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Título
              <input name="subject" className={field} />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Descreva a sua necessidade*
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-background p-4 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground transition-opacity disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? "A enviar…" : "Enviar pedido"}
          </button>

          {status === "sent" ? (
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Check className="size-4" /> Mensagem recebida. Entramos em contacto em breve.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 text-sm font-medium text-destructive">{error}</p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
