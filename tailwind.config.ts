
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cosmic: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065',
				},
				celestial: {
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
					950: '#1e1b4b',
				},
				space: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				},
				gold: {
					50: '#fefce8',
					100: '#fef9c3',
					200: '#fef08a',
					300: '#fde047',
					400: '#facc15',
					500: '#eab308',
					600: '#ca8a04',
					700: '#a16207',
					800: '#854d0e',
					900: '#713f12',
					950: '#422006',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeOut: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-10px)' },
				},
				starFloat: {
					'0%': { transform: 'rotate(0deg) translateY(0)' },
					'50%': { transform: 'rotate(5deg) translateY(-15px)' },
					'100%': { transform: 'rotate(0deg) translateY(0)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'fade-in': 'fadeIn 0.6s ease-out',
				'fade-out': 'fadeOut 0.6s ease-out',
				'star-float': 'starFloat 8s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
			},
			backgroundImage: {
				'stars-pattern': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\" opacity=\"0.07\"><circle cx=\"100\" cy=\"100\" r=\"1.5\" fill=\"white\"/><circle cx=\"200\" cy=\"300\" r=\"1\" fill=\"white\"/><circle cx=\"300\" cy=\"150\" r=\"1.2\" fill=\"white\"/><circle cx=\"400\" cy=\"250\" r=\"0.8\" fill=\"white\"/><circle cx=\"500\" cy=\"100\" r=\"1\" fill=\"white\"/><circle cx=\"600\" cy=\"300\" r=\"0.8\" fill=\"white\"/><circle cx=\"700\" cy=\"200\" r=\"1.5\" fill=\"white\"/><circle cx=\"800\" cy=\"100\" r=\"1\" fill=\"white\"/><circle cx=\"900\" cy=\"300\" r=\"0.7\" fill=\"white\"/><circle cx=\"150\" cy=\"400\" r=\"1.2\" fill=\"white\"/><circle cx=\"250\" cy=\"500\" r=\"1\" fill=\"white\"/><circle cx=\"350\" cy=\"450\" r=\"0.7\" fill=\"white\"/><circle cx=\"450\" cy=\"500\" r=\"1.5\" fill=\"white\"/><circle cx=\"550\" cy=\"400\" r=\"1\" fill=\"white\"/><circle cx=\"650\" cy=\"500\" r=\"0.8\" fill=\"white\"/><circle cx=\"750\" cy=\"450\" r=\"1.2\" fill=\"white\"/><circle cx=\"850\" cy=\"500\" r=\"1\" fill=\"white\"/><circle cx=\"950\" cy=\"450\" r=\"0.7\" fill=\"white\"/><circle cx=\"100\" cy=\"600\" r=\"1\" fill=\"white\"/><circle cx=\"200\" cy=\"700\" r=\"1.5\" fill=\"white\"/><circle cx=\"300\" cy=\"650\" r=\"0.8\" fill=\"white\"/><circle cx=\"400\" cy=\"700\" r=\"1\" fill=\"white\"/><circle cx=\"500\" cy=\"600\" r=\"1.2\" fill=\"white\"/><circle cx=\"600\" cy=\"700\" r=\"0.7\" fill=\"white\"/><circle cx=\"700\" cy=\"650\" r=\"1\" fill=\"white\"/><circle cx=\"800\" cy=\"700\" r=\"1.5\" fill=\"white\"/><circle cx=\"900\" cy=\"650\" r=\"0.8\" fill=\"white\"/><circle cx=\"150\" cy=\"800\" r=\"1\" fill=\"white\"/><circle cx=\"250\" cy=\"900\" r=\"0.7\" fill=\"white\"/><circle cx=\"350\" cy=\"850\" r=\"1.2\" fill=\"white\"/><circle cx=\"450\" cy=\"900\" r=\"1\" fill=\"white\"/><circle cx=\"550\" cy=\"800\" r=\"0.8\" fill=\"white\"/><circle cx=\"650\" cy=\"900\" r=\"1.5\" fill=\"white\"/><circle cx=\"750\" cy=\"850\" r=\"1\" fill=\"white\"/><circle cx=\"850\" cy=\"900\" r=\"0.7\" fill=\"white\"/><circle cx=\"950\" cy=\"850\" r=\"1.2\" fill=\"white\"/></svg>')",
				'cosmic-gradient': 'linear-gradient(to bottom right, rgb(15, 23, 42) 0%, rgb(88, 28, 135) 50%, rgb(15, 23, 42) 100%)',
				'celestial-glow': 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
