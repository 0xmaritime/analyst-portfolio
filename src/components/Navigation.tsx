import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-architectural-paper border-b border-architectural-ink">
      <div className="max-w-7xl mx-auto px-small">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-architectural-ink hover:text-architectural-accent text-sm font-medium uppercase tracking-[0.1em] transition-colors"
            >
              Work
            </Link>
            
            <div className="relative group">
              <button className="text-architectural-ink hover:text-architectural-accent text-sm font-medium uppercase tracking-[0.1em] transition-colors">
                Strategem
              </button>
              
              <div className="absolute top-full left-0 mt-0 bg-architectural-white border border-architectural-ink min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link 
                  href="/strategem/v1" 
                  className="block px-small py-2 text-architectural-ink hover:text-architectural-accent hover:bg-architectural-tertiary text-sm font-medium uppercase tracking-[0.05em] transition-colors"
                >
                  v1
                </Link>
                <Link 
                  href="/strategem/v2" 
                  className="block px-small py-2 text-architectural-ink hover:text-architectural-accent hover:bg-architectural-tertiary text-sm font-medium uppercase tracking-[0.05em] transition-colors"
                >
                  v2
                </Link>
                <Link 
                  href="/strategem/v3" 
                  className="block px-small py-2 text-architectural-ink hover:text-architectural-accent hover:bg-architectural-tertiary text-sm font-medium uppercase tracking-[0.05em] transition-colors"
                >
                  v3
                </Link>
              </div>
            </div>

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
        </div>
      </div>
    </nav>
  );
}
