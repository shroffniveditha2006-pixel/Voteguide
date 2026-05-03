import { Link } from "react-router-dom";
import { ClipboardList, IdCard, CalendarCheck, Vote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: ClipboardList, title: "1. Register as a voter", body: "Visit your country's election commission website or a local registration centre. Fill the voter registration form with your name, age, and address. Submit your photo ID and address proof.", bullets: ["Online: search 'voter registration' + your country", "Offline: visit your nearest election office", "It's free — never pay anyone"] },
  { icon: IdCard, title: "2. Get your Voter ID", body: "After registration, your details are verified. You'll receive a Voter ID card (sometimes called EPIC) by post or download. Keep it safe — you'll need it on voting day.", bullets: ["Verification can take 2–4 weeks", "Track status online with your reference number", "Update your address if you move"] },
  { icon: CalendarCheck, title: "3. Before voting day", body: "Find your polling booth using the official voter list. Note the date and time. Plan your travel — booths are usually within 2 km of your home.", bullets: ["Check the voter list for your name", "Note your booth number and address", "Carry your Voter ID + one extra ID"] },
  { icon: Vote, title: "4. Cast your vote", body: "Go to your booth during voting hours. Show your Voter ID. An officer will mark your finger with ink. Enter the booth, press the button next to your chosen candidate's name, and you're done!", bullets: ["Voting is secret — no one sees your choice", "Take your time — there's no rush", "If unsure, ask the polling officer for help"] },
];

export default function Guide() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">Voting in 4 simple steps</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
          Follow these steps in order. Take your time — every step is straightforward.
        </p>
      </div>

      <div className="mt-14 space-y-8">
        {steps.map((s, i) => (
          <article key={s.title} className="relative grid gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-soft">
              <s.icon className="h-10 w-10" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">{s.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-base">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />{b}
                  </li>
                ))}
              </ul>
            </div>
            {i < steps.length - 1 && (
              <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
                <ArrowRight className="h-8 w-8 rotate-90 text-accent" />
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button asChild size="lg" className="h-14 px-8 text-lg">
          <Link to="/dashboard">Track my progress</Link>
        </Button>
      </div>
    </div>
  );
}
