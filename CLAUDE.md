# Swift OS website

Static Svelte 5/SvelteKit 2 site presenting Swift OS and digital sovereignty. Product content lives in `content/`; this is not the Hummingbird framework website despite retained template references. Tailwind 3 and custom components provide the UI; extend `src/lib/components/` and existing tokens before adding parallel components.

- `src/lib/content.ts` loads local YAML/Markdown from `content/` using server filesystem APIs. Keep these loaders on the server; render Markdown through the existing content pipeline.
- Static assets live in `static/`. The static adapter emits `build/`, uses `BASE_PATH` when set, and root layout enables prerendering. Preserve base-path-aware links. The `/docs` route still redirects to docs.hummingbird.codes; treat that as a template leftover to review when changing navigation, not proof of Swift OS documentation.
- Theme state lives in `src/lib/stores/theme.ts`: light/dark/system with browser guards. Preserve orange/zinc styling, rounded controls and both color modes.
- Existing Iconify collections and shared code highlighting cover the site's icon and code examples; reuse them.

Use package scripts: `npm run dev`, `npm run check`, `npm run lint`, `npm run build`, and `npm run preview`. `typecheck` is also available; `check` includes SvelteKit sync. Multiple package-manager lockfiles are present: preserve the task's established install workflow and avoid incidental lockfile churn. There is no test script.

Verify relevant type/lint/build behavior for code changes and the affected rendered page for visual changes. Consult current Svelte documentation when needed; no mandatory MCP discovery or bulk documentation loading on every task.
