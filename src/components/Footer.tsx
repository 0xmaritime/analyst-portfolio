import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-architectural-ink bg-architectural-paper mt-xlarge">
      <div className="max-w-7xl mx-auto px-small py-large">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-small">
          <div className="flex flex-col gap-2">
            <Link 
              href="/" 
              className="text-architectural-ink hover:text-architectural-accent text-sm font-medium uppercase tracking-[0.1em] transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className="text-architectural-ink hover:text-architectural-accent text-sm font-medium uppercase tracking-[0.1em] transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-architectural-ink hover:text-architectural-accent text-sm font-medium uppercase tracking-[0.1em] transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="text-right">
            <a 
              href="mailto:hello@example.com" 
              className="text-architectural-ink hover:text-architectural-accent text-sm font-medium transition-colors"
            >
              hello@example.com
            </a>
            <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mt-2">
              © {new Date().getFullYear()} — All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}