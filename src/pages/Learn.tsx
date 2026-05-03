import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Lightbulb, ShieldCheck, Users } from "lucide-react";

const cards = [
  { icon: Users, title: "What is an election?", body: "An election is when citizens choose their leaders by voting. Each person gets one vote, and the candidate with the most votes wins." },
  { icon: ShieldCheck, title: "Is my vote secret?", body: "Yes. Voting happens in a private booth. No one — not even the polling officer — can see who you voted for." },
  { icon: Lightbulb, title: "Can I change my vote?", body: "Once you press the button on the voting machine, your vote is final. So take your time and decide before you press." },
  { icon: BookOpen, title: "What is a constituency?", body: "A constituency is the area you live in. Each constituency elects one representative. You can only vote in the constituency where you're registered." },
];

const faqs = [
  { q: "Can I vote if I forgot my Voter ID at home?", a: "You may still vote if you have one of the alternative photo IDs accepted by the election commission (passport, driving license, Aadhaar, etc.). Always check the latest list before election day." },
  { q: "What if my name is not on the voter list?", a: "Visit your election office immediately or use the online portal to add your name. Last-minute corrections may not be possible, so check early." },
  { q: "Is voting compulsory?", a: "In most countries voting is a right, not a duty — but it's strongly encouraged. A few countries do make voting mandatory." },
  { q: "What is NOTA?", a: "NOTA stands for 'None Of The Above'. If you don't want to vote for any candidate, you can press the NOTA button on the voting machine." },
  { q: "Can I take my phone inside the booth?", a: "No. Phones, cameras, and recording devices are not allowed inside the polling booth to protect the secrecy of your vote." },
  { q: "What happens after I vote?", a: "Your finger gets marked with indelible ink so you can't vote twice. Votes are counted on counting day, and results are announced the same day." },
];

export default function Learn() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">Learn about voting</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">Friendly explainers and answers to the most common questions.</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {cards.map((c) => (
          <article key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">{c.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{c.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
        <h2 className="font-display text-3xl font-bold text-primary">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
