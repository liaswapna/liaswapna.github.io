/**
 * Theme — single source of truth for design tokens.
 *
 * Static class so colours and helpers are accessible everywhere
 * without prop-drilling or context. Nothing here is stateful.
 */
export class Theme {
  static readonly colors = {
    dark: "#0F1B2D",
    accent: "#1B4965",
    teal: "#5FA8D3",
    mint: "#BEE9E8",
    bg: "#F8FAFC",
    white: "#FFFFFF",
    gray: "#64748B",
    grayLight: "#E2E8F0",
    text: "#1E293B",
    muted: "#475569",
  } as const;

  static heroGradient(): string {
    const { dark, accent, teal } = this.colors;
    return `linear-gradient(155deg, ${dark} 0%, ${accent} 50%, ${teal} 100%)`;
  }

  static contactGradient(): string {
    const { dark, accent } = this.colors;
    return `linear-gradient(155deg, ${dark} 0%, ${accent} 100%)`;
  }

  static gridPattern(): string {
    return [
      "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)",
      "linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
    ].join(",");
  }

  static mintFaded(opacity: number): string {
    return `rgba(190, 233, 232, ${opacity})`;
  }
}
