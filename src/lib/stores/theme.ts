import { writable, type Writable, type Readable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeStore {
	subscribe: Writable<Theme>['subscribe'];
	resolvedTheme: Readable<ResolvedTheme>;
	init: () => (() => void) | undefined;
	setTheme: (newTheme: Theme) => void;
	toggle: () => void;
	getSystemTheme: () => ResolvedTheme;
}

// Create the theme store
function createThemeStore(): ThemeStore {
	const { subscribe, set, update } = writable<Theme>('system');

	// Resolved theme store (what's actually applied)
	const resolvedTheme = writable<ResolvedTheme>('light');

	// Get system preference
	function getSystemTheme(): ResolvedTheme {
		if (!browser) return 'light';
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	// Apply theme to document
	function applyTheme(theme: ResolvedTheme) {
		if (!browser) return;
		
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		resolvedTheme.set(theme);
	}

	// Resolve theme (system -> actual theme)
	function resolveTheme(theme: Theme): ResolvedTheme {
		if (theme === 'system') {
			return getSystemTheme();
		}
		return theme;
	}

	// Initialize theme
	function init() {
		if (!browser) return;

		// Get stored theme or default to system
		const stored = localStorage.getItem('theme') as Theme || 'system';
		set(stored);
		
		const resolved = resolveTheme(stored);
		applyTheme(resolved);
		
		// Make sure resolvedTheme is set initially
		resolvedTheme.set(resolved);

		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => {
			// Only update if current theme is 'system'
			update(currentTheme => {
				if (currentTheme === 'system') {
					const newResolved = getSystemTheme();
					applyTheme(newResolved);
					resolvedTheme.set(newResolved);
				}
				return currentTheme;
			});
		};

		mediaQuery.addEventListener('change', handleChange);

		// Cleanup function
		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}

	// Set theme
	function setTheme(newTheme: Theme) {
		if (!browser) return;
		
		set(newTheme);
		localStorage.setItem('theme', newTheme);
		
		const resolved = resolveTheme(newTheme);
		applyTheme(resolved);
		resolvedTheme.set(resolved);
	}

	// Toggle between light and dark (preserves user preference)
	function toggle() {
		update(currentTheme => {
			const resolved = resolveTheme(currentTheme);
			const newTheme = resolved === 'dark' ? 'light' : 'dark';
			setTheme(newTheme);
			return newTheme;
		});
	}

	return {
		subscribe,
		resolvedTheme: { subscribe: resolvedTheme.subscribe },
		init,
		setTheme,
		toggle,
		getSystemTheme
	};
}

export const theme = createThemeStore();