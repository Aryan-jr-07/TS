import { useState } from "react";
import { Calendar, Clock, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { waLink } from "@/lib/contact";

const TABS = ["Table", "Room", "Yoga"] as const;
type Tab = typeof TABS[number];

export function BookingWidget() {
  const [tab, setTab] = useState<Tab>("Table");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
      <div className="bg-primary px-5 py-4 text-primary-foreground">
        <p className="text-xs uppercase tracking-wider opacity-80">Ganga Leaf</p>
        <p className="text-lg font-semibold">Book your visit</p>
      </div>

      <div className="flex border-b border-border bg-secondary/40">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-sm font-medium transition ${
              tab === t ? "bg-card text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-4 p-5">
        <Field icon={<Calendar className="h-4 w-4" />} label="Date">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-sm outline-none" />
        </Field>
        <Field icon={<Clock className="h-4 w-4" />} label="Time">
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)}
            className="w-full bg-transparent text-sm outline-none" />
        </Field>
        <Field icon={<Users className="h-4 w-4" />} label={tab === "Room" ? "Guests" : tab === "Yoga" ? "Spots" : "People"}>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent text-sm outline-none">
            {[1,2,3,4,5,6,8].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </Field>

        <Button
          className="w-full"
          onClick={() => toast.success(`${tab} booking request received — we'll confirm shortly.`)}
        >
          Confirm Booking
        </Button>
        <a
          href={waLink(`Hi! I'd like to book a ${tab.toLowerCase()} on ${date || "..."}, ${guests} ${tab === "Room" ? "guests" : "people"}.`)}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[color:var(--whatsapp)] px-3 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> Book via WhatsApp instead
        </a>
      </div>
    </div>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block rounded-lg border border-input bg-background px-3 py-2">
      <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
