import { Theme } from "../config/Theme";

export function Footer() {
  const c = Theme.colors;

  return (
    <footer className="py-6 px-6 text-center text-xs" style={{ background: c.dark, color: c.gray }}>
      © 2026 Swapna Lia Anil · Built with React + TypeScript + Tailwind CSS
    </footer>
  );
}
