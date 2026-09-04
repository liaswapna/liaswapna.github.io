import { useState, useEffect } from "react";
import { Theme } from "../config/Theme";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface TerminalLine {
  prompt: boolean;
  text: string;
  highlight?: boolean;
}

const lines: readonly TerminalLine[] = [
  { prompt: true, text: "python -m pytest" },
  { prompt: false, text: "========================" },
  { prompt: false, text: "106 passed in 12.4s  \u2713", highlight: true },
  { prompt: false, text: "========================" },
  { prompt: false, text: "" },
  { prompt: true, text: "git log --oneline -3" },
  { prompt: false, text: "a7f2e1d  atomic checkout with rollback" },
  { prompt: false, text: "c3b8d9a  JWT auth + RBAC + anti-enum" },
  { prompt: false, text: "f5e1a2b  layered arch (Routes\u2192Services\u2192Repos)" },
];

export function Terminal() {
  const [displayed, setDisplayed] = useState<{ text: string; highlight?: boolean }[]>([]);
  const [charIdx, setCharIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [started, setStarted] = useState(false);
  const [ref, visible] = useScrollReveal(0.3);

  useEffect(() => {
    if (visible && !started) {
      const timer = setTimeout(() => setStarted(true), 600);
      return () => clearTimeout(timer);
    }
  }, [visible, started]);

  useEffect(() => {
    if (!started || lineIdx >= lines.length) return;

    const line = lines[lineIdx];
    const fullText = line.prompt ? `~/ecommerce $ ${line.text}` : line.text;

    if (charIdx < fullText.length) {
      const speed = line.prompt ? 35 : 12;
      const timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(timer);
    }

    const pauseTime = line.text === "" ? 100 : line.prompt ? 400 : 80;
    const timer = setTimeout(() => {
      setDisplayed((prev) => [...prev, { text: fullText, highlight: line.highlight }]);
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, pauseTime);
    return () => clearTimeout(timer);
  }, [started, lineIdx, charIdx]);

  const currentLine =
    lineIdx < lines.length
      ? (lines[lineIdx].prompt ? `~/ecommerce $ ${lines[lineIdx].text}` : lines[lineIdx].text).slice(0, charIdx)
      : null;

  const c = Theme.colors;

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{
        background: "#0a0e17",
        border: `1px solid rgba(95,168,211,0.2)`,
        maxWidth: 480,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#111827" }}>
        <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <span className="ml-2 text-xs font-mono" style={{ color: "#6b7280" }}>
          terminal
        </span>
      </div>

      <div className="px-4 py-4 font-mono text-sm leading-relaxed" style={{ fontSize: 12.5, minHeight: 220 }}>
        {displayed.map((l, i) => (
          <div key={i} style={{ color: l.highlight ? "#4ade80" : "#d1d5db", minHeight: l.text === "" ? 8 : undefined }}>
            {l.text}
          </div>
        ))}
        {currentLine !== null && (
          <div style={{ color: "#d1d5db" }}>
            {currentLine}
            <span
              className="inline-block w-2 ml-px"
              style={{
                background: c.teal,
                height: 14,
                verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
