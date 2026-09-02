import { useEffect, useRef, useState } from "react";
import { ArrowUp, Bot, MessageCircle, Send, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { site } from "@/lib/site";
import { askAssistant } from "@/lib/chat.functions";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Olá! Somos a WIN MAC. Em que podemos ajudar — suporte técnico, redes, servidores, licenças ou climatização?",
};

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const ask = useServerFn(askAssistant);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const result = await ask({
        data: { messages: next.filter((m) => m.content !== WELCOME.content).slice(-12) },
      });
      setMessages([...next, { role: "assistant", content: result.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Não consegui responder agora. Fale connosco pelo WhatsApp +244 942 663 026 ou por geral@win-mac.net.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Voltar ao topo — lado esquerdo */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={`fixed bottom-6 left-5 z-40 inline-flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-panel transition-all duration-300 hover:border-primary hover:text-primary ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>

      {/* Janela do chatbot */}
      {chatOpen ? (
        <div className="fixed bottom-6 right-5 z-50 flex h-[30rem] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-panel">
          <div className="surface-night flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary">
                <Bot className="size-4 text-primary-foreground" />
              </span>
              <span>
                <span className="block text-sm font-bold text-night-foreground">
                  Assistente WIN MAC
                </span>
                <span className="block text-[11px] text-night-foreground/70">
                  Normalmente responde em segundos
                </span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Fechar chat"
              className="text-night-foreground/70 transition-colors hover:text-night-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading ? (
              <div className="w-16 rounded-2xl border border-border bg-card px-3.5 py-3">
                <span className="flex gap-1">
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:120ms]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:240ms]" />
                </span>
              </div>
            ) : null}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva a sua questão…"
              aria-label="Mensagem para o assistente"
              className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Enviar mensagem"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      ) : null}

      {/* Botões flutuantes — lado direito, empilhados */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
        {chatOpen ? null : (
          <button
            type="button"
            onClick={() => setChatOpen(true)}
            aria-label="Abrir assistente virtual"
            className="group inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-signal transition-transform hover:-translate-y-0.5"
          >
            <Bot className="size-6" />
          </button>
        )}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar connosco no WhatsApp"
          className="inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-panel transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>
    </>
  );
}
