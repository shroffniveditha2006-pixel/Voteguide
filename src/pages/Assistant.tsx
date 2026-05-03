import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send, Bot, User as UserIcon } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const SAMPLES: Record<string, string> = {
  register: "To register, visit your election commission website or your nearest registration office. You'll need a photo ID and address proof. It's free — never pay anyone.",
  id: "Your Voter ID (EPIC) usually arrives by post within 2–4 weeks. You can also download a digital copy from the official portal using your reference number.",
  booth: "Your polling booth is listed on the official voter list. Search by name + address on the election commission website, or use the booth finder on your dashboard.",
  default: "Great question! For most voting questions, the answer is: check your country's election commission website. They have step-by-step guides in many languages.",
};

function pickReply(q: string) {
  const lower = q.toLowerCase();
  if (lower.includes("regist")) return SAMPLES.register;
  if (lower.includes("id") || lower.includes("epic")) return SAMPLES.id;
  if (lower.includes("booth") || lower.includes("polling") || lower.includes("where")) return SAMPLES.booth;
  return SAMPLES.default;
}

export default function Assistant() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm your VoteGuide assistant. Ask me anything about voting — for example, 'How do I register?'" },
  ]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: pickReply(text) }]), 500);
  };

  const submit = (e: FormEvent) => { e.preventDefault(); send(input); };

  const speak = () => {
    setListening(true);
    setTimeout(() => { setListening(false); send("How do I register to vote?"); }, 1500);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">Ask the VoteGuide assistant</h1>
        <p className="mt-3 text-xl text-muted-foreground">Type your question, or tap the microphone to speak.</p>
      </div>

      <div className="mt-10 flex h-[28rem] flex-col rounded-2xl border border-border bg-card shadow-elevated">
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
              {m.role === "bot" && (
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent-gradient text-white">
                  <Bot className="h-5 w-5" />
                </span>
              )}
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-base leading-relaxed ${m.role === "user" ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm bg-surface"}`}>
                {m.text}
              </div>
              {m.role === "user" && (
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <UserIcon className="h-5 w-5" />
                </span>
              )}
            </div>
          ))}
          {listening && (
            <div className="flex items-center gap-2 text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />Listening…
            </div>
          )}
        </div>

        <form onSubmit={submit} className="flex items-center gap-2 border-t border-border p-4">
          <Button type="button" onClick={speak} variant="outline" size="lg" className="h-12 flex-shrink-0" aria-label="Speak">
            <Mic className="h-5 w-5" />
            <span className="ml-2 hidden sm:inline">Speak</span>
          </Button>
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything about voting…" className="h-12 text-base" />
          <Button type="submit" size="lg" className="h-12 flex-shrink-0"><Send className="h-5 w-5" /></Button>
        </form>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["How do I register?", "Where is my polling booth?", "When do I get my Voter ID?"].map((q) => (
          <button key={q} onClick={() => send(q)} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent">
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
