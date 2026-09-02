import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(140).optional().default(""),
  topic: z.string().trim().min(2).max(120),
  subject: z.string().trim().max(180).optional().default(""),
  message: z.string().trim().min(10).max(4000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient(
      process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"]!,
      process.env["SUPABASE_SERVICE_ROLE_KEY"]!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      topic: data.topic,
      subject: data.subject || null,
      message: data.message,
      source: "website",
    });

    if (error) {
      console.error("contact insert failed", error.message);
      throw new Error("Não foi possível enviar a mensagem. Tente novamente.");
    }

    return { ok: true as const };
  });
