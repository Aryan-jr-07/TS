import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-[var(--shadow-lift)] transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
