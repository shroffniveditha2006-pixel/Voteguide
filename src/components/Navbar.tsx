import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Vote, LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/eligibility", label: "Eligibility" },
  { to: "/guide", label: "Guide" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/assistant", label: "Assistant" },
  { to: "/learn", label: "Learn" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold text-primary">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-hero text-primary-foreground shadow-soft">
            <Vote className="h-5 w-5" />
          </span>
          VoteGuide
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-base font-medium transition-colors hover:bg-secondary hover:text-primary ${
                  isActive ? "bg-secondary text-primary" : "text-muted-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <span className="text-sm font-medium text-muted-foreground">Hi, {user.name}</span>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="mr-1.5 h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>

        <button
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-lg font-medium hover:bg-secondary ${
                    isActive ? "bg-secondary text-primary" : "text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            {user ? (
              <Button variant="outline" onClick={() => { logout(); setOpen(false); }}>
                Logout ({user.name})
              </Button>
            ) : (
              <Button asChild onClick={() => setOpen(false)}>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
