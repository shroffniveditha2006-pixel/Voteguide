import { Link } from "react-router-dom";
import { Check, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const criteria = [
  "You are 18 years or older on election day",
  "You are a citizen of the country",
  "You are a resident of the constituency where you vote",
  "You are not disqualified by law (e.g. unsound mind declared by court)",
];

const documents = [
  "Government-issued photo ID (Voter ID, Aadhaar, Passport, Driver's License)",
  "Proof of age (Birth certificate, school leaving certificate)",
  "Proof of address (Utility bill, ration card, bank passbook)",
  "Recent passport-size photograph",
];

export default function Eligibility() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-8">
      <div className="text-center">
        <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-primary">Step 1</span>
        <h1 className="mt-4 font-display text-4xl font-bold text-primary md:text-5xl">Are you eligible to vote?</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
          Tick off the items below. If all four are checked, you're ready to register.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-soft">
        <h2 className="font-display text-2xl font-semibold text-primary">Who can vote?</h2>
        <ul className="mt-6 space-y-4">
          {criteria.map((c) => (
            <li key={c} className="flex items-start gap-4 rounded-xl bg-surface p-4">
              <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
                <Check className="h-5 w-5" />
              </span>
              <span className="text-lg leading-relaxed">{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-soft">
        <div className="flex items-center gap-3">
          <FileText className="h-7 w-7 text-accent" />
          <h2 className="font-display text-2xl font-semibold text-primary">Documents you'll need</h2>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {documents.map((d) => (
            <li key={d} className="flex items-start gap-3 rounded-xl border border-border p-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-base leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="h-14 px-8 text-lg">
          <Link to="/guide">Continue to step-by-step guide <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </div>
  );
}
