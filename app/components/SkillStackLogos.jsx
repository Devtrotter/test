export const NextLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#000" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
    <path d="M8 7v10M8 7l9 12" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <rect x="15.5" y="7" width="1.4" height="10" fill="#fff" />
  </svg>
);

export const TSLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <rect width="24" height="24" rx="3" fill="#3178c6" />
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fill="#fff"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      fontWeight="700"
    >
      TS
    </text>
  </svg>
);

export const NodeLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path d="M12 1.5L21.5 7v10L12 22.5L2.5 17V7L12 1.5z" fill="#5fa04e" />
    <path d="M12 1.5L21.5 7v10L12 22.5L2.5 17V7L12 1.5z" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="0.4" />
    <text
      x="12"
      y="15"
      textAnchor="middle"
      fill="#fff"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
      fontSize="8"
      fontWeight="800"
    >
      JS
    </text>
  </svg>
);

export const SassLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#cd6799" />
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fill="#fff"
      fontFamily="ui-serif, serif"
      fontStyle="italic"
      fontSize="14"
      fontWeight="700"
    >
      S
    </text>
  </svg>
);

export const BuildAILogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#7c3aed" />
    <path
      d="M12 5l1.4 4.2L17.6 11l-4.2 1.6L12 17l-1.4-4.4L6.4 11l4.2-1.8z"
      fill="#fff"
    />
  </svg>
);

export const STACK_LOGOS = {
  'Next.js': NextLogo,
  TypeScript: TSLogo,
  'Node.js': NodeLogo,
  'Sass / CSS': SassLogo,
  'Build / AI': BuildAILogo,
};
