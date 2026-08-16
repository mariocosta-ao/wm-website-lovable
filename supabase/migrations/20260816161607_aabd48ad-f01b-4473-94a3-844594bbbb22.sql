CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  topic TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public read of contact messages"
  ON public.contact_messages FOR SELECT TO authenticated
  USING (false);