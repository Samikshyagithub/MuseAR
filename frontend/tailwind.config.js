/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "*"
    ],
    theme: {
        extend: {
            colors: {
                "gray": "#ededed",
                "primary": "#286f95",
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
                marquee2: 'marquee2 40s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
        },
    },
    plugins: [],
}
