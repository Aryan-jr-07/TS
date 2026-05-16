import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Leaf } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            TwinStack
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Two CS students helping Rishikesh businesses build a strong digital presence — one website at a time.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/samples" className="hover:text-primary">Sample Work</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                <MessageCircle className="h-4 w-4" /> {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${CONTACT.instagram}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                <Instagram className="h-4 w-4" /> @{CONTACT.instagram}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          Made in Rishikesh · © {new Date().getFullYear()} TwinStack
        </div>
      </div>
    </footer>
  );
}
