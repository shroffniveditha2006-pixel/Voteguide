import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-muted-foreground">This page doesn't exist. Let's get you home.</p>
        <Link to="/" className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
          Go home
        </Link>
      </div>
    </div>
  );
}
