module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accentsecondaryneutral-7": "var(--accentsecondaryneutral-7)",
        "whitealpha-50": "var(--whitealpha-50)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-base-medium": "var(--body-base-medium-font-family)",
        "body-base-regular": "var(--body-base-regular-font-family)",
        "body-base-semibold": "var(--body-base-semibold-font-family)",
        "body-md-medium": "var(--body-md-medium-font-family)",
        "body-md-semibold": "var(--body-md-semibold-font-family)",
        "body-sm-regular": "var(--body-sm-regular-font-family)",
        "button-base-bold": "var(--button-base-bold-font-family)",
        "button-base-medium": "var(--button-base-medium-font-family)",
        "button-small-bold": "var(--button-small-bold-font-family)",
        "button-small-medium": "var(--button-small-medium-font-family)",
        "heading-desktop-h1-bold": "var(--heading-desktop-h1-bold-font-family)",
        "heading-desktop-h2-bold": "var(--heading-desktop-h2-bold-font-family)",
        "heading-desktop-h5-bold": "var(--heading-desktop-h5-bold-font-family)",
        "heading-desktop-h6-bold": "var(--heading-desktop-h6-bold-font-family)",
        "paragraph-p2-regular": "var(--paragraph-p2-regular-font-family)",
        "regular-medium-compact": "var(--regular-medium-compact-font-family)",
        "semibold-medium-standard":
          "var(--semibold-medium-standard-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "shadow-to-bot-neutral-1": "var(--shadow-to-bot-neutral-1)",
        "shadow-to-bot-primary-1": "var(--shadow-to-bot-primary-1)",
        "shadow-to-bot-primary-4": "var(--shadow-to-bot-primary-4)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'aloka-gradient': 'linear-gradient(90deg, #7dc2a7ff, #0E3F2E )',
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
