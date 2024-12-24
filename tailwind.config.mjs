/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        gradientRotate: {
          "0%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "50% 50%" },

          "100%": { backgroundPosition: "0% 100%" },
        },
      },
      animation: {
        gradientRotate: "gradientRotate 5s linear infinite alternate-reverse",
      },
    },
  },
  plugins: [],
};
