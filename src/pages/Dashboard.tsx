import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Calendar, Bell, MapPin, Check, Search } from "lucide-react";

const STEPS = ["Check eligibility", "Register as a voter", "Receive Voter ID", "Find polling booth", "Cast your vote"];
const DATES = [
  { date: "Aug 15", label: "Voter registration opens" },
  { date: "Sep 30", label: "Last day to register" },
  { date: "Oct 20", label: "Voter list published" },
  { date: "Nov 05", label: "Election day" },
];

export default function Dashboard() {
  const { user } = useAuth();
  const [done, setDone] = useState<boolean[]>([true, true, false, false, false]);
  const [location, setLocation] = useState("");
  const [booth, setBooth] = useState<string | null>(null);

  if (!user) return <Navigate to="/login" replace />;

  const completed = done.filter(Boolean).length;
  const pct = (completed / STEPS.length) * 100;

  const findBooth = () => {
    if (!location.trim()) return;
    setBooth(`Nearest polling booth: ${location} Public School, Room 3 (1.2 km away)`);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <div className="rounded-3xl bg-hero p-8 text-primary-foreground shadow-elevated md:p-10">
        <p className="text-lg opacity-80">Welcome back,</p>
        <h1 className="mt-1 font-display text-4xl font-bold md:text-5xl">{user.name}</h1>
        <p className="mt-3 max-w-xl text-lg opacity-90">
          You've completed {completed} of {STEPS.length} steps. Keep going — you're almost there!
        </p>
        <div className="mt-6">
          <Progress value={pct} className="h-3 bg-white/20" />
          <p className="mt-2 text-sm opacity-80">{Math.round(pct)}% complete</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft lg:col-span-2">
          <h2 className="font-display text-2xl font-semibold text-primary">Your voting checklist</h2>
          <ul className="mt-5 space-y-3">
            {STEPS.map((s, i) => (
              <li key={s}>
                <button
                  onClick={() => setDone((d) => d.map((v, idx) => (idx === i ? !v : v)))}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${done[i] ? "border-success/30 bg-success/5" : "border-border bg-surface hover:border-accent/50"}`}
                >
                  <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${done[i] ? "bg-success text-success-foreground" : "border-2 border-border bg-card"}`}>
                    {done[i] && <Check className="h-5 w-5" />}
                  </span>
                  <span className={`text-lg ${done[i] ? "line-through opacity-70" : "font-medium"}`}>{s}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-accent" />
            <h2 className="font-display text-2xl font-semibold text-primary">Important dates</h2>
          </div>
          <ul className="mt-5 space-y-3">
            {DATES.map((d) => (
              <li key={d.label} className="flex items-center gap-4 rounded-xl bg-surface p-3">
                <span className="flex h-12 w-14 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="text-xs font-semibold">{d.date.split(" ")[0]}</span>
                  <span className="text-base font-bold leading-none">{d.date.split(" ")[1]}</span>
                </span>
                <span className="text-base">{d.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-accent" />
            <h2 className="font-display text-2xl font-semibold text-primary">Polling booth finder</h2>
          </div>
          <p className="mt-2 text-muted-foreground">Enter your area or pin code.</p>
          <div className="mt-4 flex gap-2">
            <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Bandra West, 400050" className="h-12 text-base" />
            <Button onClick={findBooth} size="lg" className="h-12"><Search className="h-5 w-5" /></Button>
          </div>
          {booth && (
            <div className="mt-4 rounded-xl border border-success/30 bg-success/5 p-4 text-base font-medium">📍 {booth}</div>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <div className="flex items-center gap-2">
            <Bell className="h-6 w-6 text-accent" />
            <h2 className="font-display text-2xl font-semibold text-primary">Reminders</h2>
          </div>
          <ul className="mt-4 space-y-3 text-base">
            <li className="rounded-xl bg-surface p-4">📝 Submit your registration before <strong>Sep 30</strong>.</li>
            <li className="rounded-xl bg-surface p-4">🪪 Carry your Voter ID + one backup ID on election day.</li>
            <li className="rounded-xl bg-surface p-4">⏰ Polling hours: <strong>7:00 AM – 6:00 PM</strong>.</li>
          </ul>
          <Button asChild variant="outline" className="mt-4 w-full">
            <Link to="/learn">Read FAQs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
