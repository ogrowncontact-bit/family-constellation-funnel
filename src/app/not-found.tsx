import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Link href="/" className="text-secondary underline underline-offset-4">
        Return home
      </Link>
    </div>
  );
}
