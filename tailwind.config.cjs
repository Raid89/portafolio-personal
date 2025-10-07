module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0A0A',
        charcoal: '#131313',
        graphite: '#1F1F1F',
        accent: '#5B78F6',
        secondary: '#F1F1F1'
      },
      fontFamily: {
        sans: ['"Satoshi"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        glow: '0 0 60px rgba(91, 120, 246, 0.45)'
      }
    }
  },
  plugins: []
};
