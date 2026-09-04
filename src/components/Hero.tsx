import { Theme } from "../config/Theme";
import { Terminal } from "./Terminal";

export function Hero() {
  const c = Theme.colors;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
      style={{ background: Theme.heroGradient() }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: Theme.gridPattern(), backgroundSize: "60px 60px" }}
      />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-5 gap-12 items-center relative z-10">
        <div className="md:col-span-3">
          <p className="font-mono text-sm tracking-widest mb-5" style={{ color: c.mint }}>
            Software Developer
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6"
            style={{ color: c.white, letterSpacing: "-0.02em" }}
          >
            Swapna
            <br />
            Lia Anil
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-4 max-w-lg" style={{ color: c.mint }}>
            Five years building backend systems, microservices, and APIs.
          </p>
          <p className="text-base leading-relaxed max-w-lg mb-10" style={{ color: Theme.mintFaded(0.65) }}>
            Most recently at Warner Bros. Discovery, building authentication,
            subscription, and authorization services for Max. Returning from
            parental leave with two full-stack projects built from scratch.
          </p>
          <div className="flex flex-wrap gap-4">
              <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{ background: c.teal, color: c.dark }}
            >
              See what I've built
            </a>
              <a
              href="https://github.com/liaswapna"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-lg font-semibold text-sm tracking-wide border-2 transition-all duration-200 hover:scale-105"
              style={{ borderColor: Theme.mintFaded(0.5), color: c.mint }}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="md:col-span-2 hidden md:block">
          <Terminal />
        </div>
      </div >

    <div className="absolute bottom-8 left-1/2" style={{ animation: "float 2.5s ease-in-out infinite" }}>
      <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: Theme.mintFaded(0.3) }}>
        <div className="w-1 h-2.5 rounded-full" style={{ background: c.mint, animation: "scroll-dot 2s ease-in-out infinite" }} />
      </div>
    </div>
    </section >
  );
}