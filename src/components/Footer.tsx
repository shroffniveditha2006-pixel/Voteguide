import { Vote } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
            <Vote className="h-5 w-5" /> VoteGuide
          </div>
          <p className="text-sm text-muted-foreground">
            Your vote, made simple and accessible for everyone.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VoteGuide. Educational use only.
          </p>
        </div>
      </div>
    </footer>
  );
}
