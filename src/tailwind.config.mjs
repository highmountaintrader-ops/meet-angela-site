/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '500' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '0.02em', fontWeight: '800' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.02em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.02em', fontWeight: '900' }],
                '8xl': ['6rem', { lineHeight: '1.0', letterSpacing: '0.02em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1.0', letterSpacing: '0.02em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "roboto",
                paragraph: "roboto"
            },
            colors: {
                destructive: '#dc3545',
                'destructive-foreground': '#FFFFFF',
                grey100: '#f8f9fa',
                grey200: '#e9ecef',
                grey300: '#dee2e6',
                grey400: '#ced4da',
                grey500: '#adb5bd',
                grey600: '#6c757d',
                grey700: '#495057',
                grey800: '#343a40',
                grey900: '#212529',
                background: '#FFFFFF',
                secondary: '#6c757d',
                foreground: '#333333',
                'secondary-foreground': '#FFFFFF',
                'primary-foreground': '#FFFFFF',
                primary: '#007AFF'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
