import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        graphite: "#101a2e",
        panel: "#16243a",
        mist: "#f3f0e8",
        muted: "#aeb8c8",
        lime: "#66e3ff",
        amber: "#ff7a59"
      },
      boxShadow: {
        glow: "0 0 48px rgba(102, 227, 255, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
