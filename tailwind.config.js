/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0A14', // Deep Void
                primary: '#F0EFF4',    // Ghost
                accent: '#7B61FF',     // Plasma
                muted: '#18181B',      // Graphite
            },
            fontFamily: {
                heading: ['Sora', 'sans-serif'],
                drama: ['"Instrument Serif"', 'serif'],
                mono: ['"Fira Code"', 'monospace'],
                body: ['Inter', 'sans-serif'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                }
            },
            animation: {
                'marquee': 'marquee 35s linear infinite',
                'marquee-reverse': 'marquee-reverse 35s linear infinite'
            }
        },
    },
    plugins: [],
}
