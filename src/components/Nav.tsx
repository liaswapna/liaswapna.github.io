import { useState, useEffect, useCallback } from "react";
import { Theme } from "../config/Theme";

const links = ["Projects", "About", "Experience", "Skills", "Contact"] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const c = Theme.colors;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(248,250,252,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${c.grayLight}` : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        
          href="#hero"
          onClick={(e) => scrollTo(e, "hero")}
          className="font-mono text-sm font-bold tracking-wider transition-colors"
          style={{ color: scrolled ? c.accent : c.white }}
        >
          SLA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => scrollTo(e, l.toLowerCase())}
              className="text-sm transition-opacity duration-200 hover:opacity-70"
              style={{ color: scrolled ? c.muted : "rgba(255,255,255,0.8)" }}
            >
              {l}
            </a>
          ))}
          
            href="https://github.com/liaswapna"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-md transition-colors duration-200"
            style={{
              color: scrolled ? c.accent : c.white,
              border: `1px solid ${scrolled ? c.accent : "rgba(255,255,255,0.4)"}`,
            }}
          >
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
          style={{ color: scrolled ? c.accent : c.white }}
          aria-label="Toggle menu"
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: "rgba(248,250,252,0.98)" }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm py-1" style={{ color: c.muted }} onClick={(e) => scrollTo(e, l.toLowerCase())}>
              {l}
            </a>
          ))}
          <a href="https://github.com/liaswapna" target="_blank" rel="noreferrer" className="text-sm py-1" style={{ color: c.accent }}>
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
