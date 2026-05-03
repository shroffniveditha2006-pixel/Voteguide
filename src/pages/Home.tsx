import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, BookOpen, MessageCircle, Mic, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const quotes = [
  "Your vote is your voice.",
  "Democracy starts with you.",
  "Every vote shapes the future.",
];

const features = [
  { icon: ShieldCheck, title: "Check eligibility", desc: "See if you can vote in 30 seconds.", to: "/eligibility" },
  { icon: BookOpen, title: "Step-by-step guide", desc: "From registration to polling day.", to: "/guide" },
  { icon: MessageCircle, title: "Ask the assistant", desc: "Plain answers to your questions.", to: "/assistant" },
  { icon: Mic, title: "Voice help", desc: "Speak instead of typing.", to: "/assistant" },
  { icon: MapPin, title: "Find your booth", desc: "Locate your polling station.", to: "/dashboard" },
  { icon: Sparkles, title: "Learn more", desc: "FAQs and friendly explainers.", to: "/learn" },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4" /> Built for everyone — especially elders & first-time voters
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance md:text-7xl">
              Your vote, <span className="text-primary-glow">made simple</span> and accessible.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/85 md:text-2xl">
              VoteGuide walks you through eligibility, registration, and voting day —
              in plain language, with large text and friendly help.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 bg-white px-8 text-lg font-semibold text-primary hover:bg-white/90">
                <Link to="/guide">
                  Start Your Voting Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 border-white/40 bg-white/10 px-8 text-lg text-white hover:bg-white/20 hover:text-white">
                <Link to="/eligibility">Check eligibility</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote key={q} className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
              <p className="font-display text-2xl font-semibold text-primary text-balance">"{q}"</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8">
        <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">Why voting matters</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Voting is how everyday people choose who runs their city, state, and country.
          One vote may seem small, but together they decide schools, hospitals, roads,
          and the laws we all live by. <strong className="text-foreground">When you vote, you are heard.</strong>
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-soft">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-lg text-muted-foreground">{f.desc}</p>
              <span className="mt-4 inline-flex items-center text-base font-semibold text-accent group-hover:gap-2">
                Open <ArrowRight className="ml-1 h-4 w-4 transition-all group-hover:ml-2" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
