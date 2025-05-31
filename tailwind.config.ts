import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '375px',
  		md: '768px',
  		lg: '1200px'
  	},
  	container: {
		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			md: '2rem'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: 'var(--font--sans)',
  			serif: 'var(--font--serif)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        theme: {
          bg: 'hsl(var(--theme-bg))',
          fg: 'hsl(var(--theme-fg))',
          accent: 'hsl(var(--theme-accent))',
          'accent-light': 'hsl(var(--theme-accent-light))',
          'accent-dark': 'hsl(var(--theme-accent-dark))',
          muted: 'hsl(var(--theme-muted))',
          'muted-fg': 'hsl(var(--theme-muted-fg))',
          border: 'hsl(var(--theme-border))',
          card: 'hsl(var(--theme-card))',
          'card-fg': 'hsl(var(--theme-card-fg))',
          highlight: 'hsl(var(--theme-highlight))',
        },
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		animation: {
			'ping-large': "ping-large 1s ease-in-out infinite",
			"move-left": 'move-left 1s linear infinite',
        	"move-right": 'move-right 1s linear infinite',
			"zoom-out": 'zoom-out 0.5s ease-in-out',
		},
		keyframes: {
			'ping-large': {
				'75%, 100%': {
					transform: 'scale(3)',
					opacity: '0',
				}
			},
			"move-left": {
				'0%': {
				  transform: "translateX(0%)",
				},
				'100%': {
				  transform: "translateX(-50%)",
				},
			  },
			  "move-right": {
				'0%': {
				  transform: "translateX(-50%)",
				},
				'100%': {
				  transform: "translateX(0%)",
				}
			 },
			 "zoom-out": {
				'0%': {
				  transform: 'scale(1)',
				},
				'100%': {
				  transform: 'scale(0.95)',
				},
			  },
		},
	},
	},
  plugins: [require("tailwindcss-animate")],
};
export default config;
