/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': 'var(--color-midnight-navy)',
        'deep-global-blue': 'var(--color-deep-global-blue)',
        'electric-blue': 'var(--color-electric-blue)',
        'signal-cyan': 'var(--color-signal-cyan)',
        'verified-emerald': 'var(--color-verified-emerald)',
        'prestige-gold': 'var(--color-prestige-gold)',
        'cloud-white': 'var(--color-cloud-white)',
        'slate-text': 'var(--color-slate-text)',
        'soft-border': 'var(--color-soft-border)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      }
    },
  },
  plugins: [],
}
