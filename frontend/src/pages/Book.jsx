import { useState } from "react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import api from "@/lib/api";
import { formatApiError } from "@/lib/auth";
import { Clock, ArrowUpRight, CalendarDays } from "lucide-react";

const slots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM",
];

const topics = [
  "Tax Preparation (Form 1040 / 1065 / 1120 / 1120-S / 990)",
  "Tax Planning & Projections",
  "Accounting & Bookkeeping",
  "CPA Firm Outsourcing",
  "Tax Notice Resolution",
  "General Discussion",
];

function toYMD(d) {
  if (!d) return "";
  const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, "0"); const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function Book() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const [date, setDate] = useState();
  const [slot, setSlot] = useState("");
  const [form, setForm] = useState({ name: "", email: "", firm: "", phone: "", topic: topics[0], notes: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!date) { toast.error("Pick a date"); return; }
    if (!slot) { toast.error("Pick a time slot"); return; }
    setBusy(true);
    try {
      await api.post("/bookings", { ...form, date: toYMD(date), time_slot: slot });
      toast.success("Consultation requested — I'll confirm by email.");
      setDone(true);
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Could not book.");
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-32 text-center" data-testid="page-book-done">
        <p className="kicker">Confirmed</p>
        <h1 className="font-serif-display text-5xl md:text-6xl text-[#1C3F39] mt-4 leading-tight">
          Thanks — your call is on the calendar.
        </h1>
        <p className="mt-6 text-lg text-[#1C3F39]/75">
          You'll receive a confirmation email from <strong>rahul@rahultaxadvisory.com</strong> shortly with the meeting link.
        </p>
        <p className="mt-2 text-[#1C3F39]/75">
          Date: <strong>{toYMD(date)}</strong> · Time: <strong>{slot}</strong>
        </p>
      </div>
    );
  }

  return (
    <div data-testid="page-book">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Book a consultation</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-3xl">
          30 minutes. No pitch. One useful idea — guaranteed.
        </h1>
      </section>

      <form onSubmit={submit} className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 pb-24" data-testid="booking-form">
        <div className="md:col-span-5">
          <p className="kicker flex items-center gap-2"><CalendarDays size={14} strokeWidth={1.5} /> Pick a date</p>
          <div className="mt-4 surface-card p-4 inline-block">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < today}
              className="rounded-sm"
              data-testid="booking-calendar"
            />
          </div>

          <p className="kicker mt-10 flex items-center gap-2"><Clock size={14} strokeWidth={1.5} /> Pick a time (your local time)</p>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {slots.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setSlot(s)}
                className={`py-3 text-sm font-sub border transition-colors ${
                  slot === s
                    ? "bg-[#1C3F39] text-[#F9F6F0] border-[#1C3F39]"
                    : "bg-transparent text-[#1C3F39] border-[#1C3F39]/20 hover:border-[#A85A46] hover:text-[#A85A46]"
                }`}
                data-testid={`slot-${s.replace(/\s/g, "-")}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 surface-card p-8 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="kicker block mb-2">Full name *</label>
              <input required value={form.name} onChange={update("name")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="book-name" />
            </div>
            <div>
              <label className="kicker block mb-2">Email *</label>
              <input required type="email" value={form.email} onChange={update("email")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="book-email" />
            </div>
            <div>
              <label className="kicker block mb-2">Firm</label>
              <input value={form.firm} onChange={update("firm")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="book-firm" />
            </div>
            <div>
              <label className="kicker block mb-2">Phone</label>
              <input value={form.phone} onChange={update("phone")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="book-phone" />
            </div>
          </div>
          <div>
            <label className="kicker block mb-2">Topic *</label>
            <select required value={form.topic} onChange={update("topic")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="book-topic">
              {topics.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="kicker block mb-2">Notes</label>
            <textarea rows={4} value={form.notes} onChange={update("notes")} placeholder="What would you like to cover?"
              className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46] resize-none" data-testid="book-notes" />
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <button type="submit" disabled={busy} className="btn-primary disabled:opacity-60" data-testid="book-submit">
              {busy ? "Submitting…" : "Confirm booking"} <ArrowUpRight size={16} strokeWidth={1.5} />
            </button>
            <p className="text-sm text-[#1C3F39]/65 font-sub">
              {date && slot ? `Selected: ${toYMD(date)} · ${slot}` : "Pick a date and time on the left."}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
