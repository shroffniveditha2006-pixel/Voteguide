import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Vote } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    login(email, mode === "signup" ? name : undefined);
    navigate("/dashboard");
  };

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md items-center px-4 py-16">
      <div className="w-full rounded-3xl border border-border bg-card p-8 shadow-elevated md:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-hero text-primary-foreground shadow-soft">
            <Vote className="h-7 w-7" />
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-primary">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {mode === "login" ? "Continue your voting journey." : "It only takes a minute."}
          </p>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-5">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">Full name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" className="h-12 text-base" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="h-12 text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-base">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required className="h-12 text-base" />
          </div>
          <Button type="submit" size="lg" className="h-12 w-full text-base font-semibold">
            {mode === "login" ? "Login" : "Create account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-base text-muted-foreground">
          {mode === "login" ? "New to VoteGuide?" : "Already have an account?"}{" "}
          <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="font-semibold text-accent hover:underline">
            {mode === "login" ? "Sign up" : "Login"}
          </button>
        </p>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Demo mode — your data stays on this device.{" "}
          <Link to="/" className="underline">Back home</Link>
        </p>
      </div>
    </div>
  );
}
