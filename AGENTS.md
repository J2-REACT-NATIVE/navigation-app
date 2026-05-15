# Repository Instructions

## Project Shape
- Expo SDK 54 React Native app using Expo Router; `package.json` sets `main` to `expo-router/entry`.
- Routes live under `app/`; the current root route is `app/index.tsx`, and `app/_layout.tsx` imports `app/global.css` and renders `<Slot />`.
- TypeScript is strict and uses the `@/*` path alias for repository-root imports.
- `app.json` enables Expo typed routes and React Compiler, plus React Native New Architecture.

## Commands
- Install with `npm install`; this repo uses `package-lock.json`, not yarn or pnpm.
- Start Metro with `npm start` or `npx expo start`.
- Platform shortcuts: `npm run ios`, `npm run android`, `npm run web`.
- LAN start is macOS-specific: `npm run start:lan` uses `ipconfig getifaddr en0` and clears Metro cache.
- Lint with `npm run lint` (`expo lint`). There is no configured test script or typecheck script; use `npx tsc --noEmit` for focused TS verification.

## Styling And Build Wiring
- NativeWind is wired through `babel.config.js` (`jsxImportSource: "nativewind"` plus `nativewind/babel`) and `metro.config.js` (`withNativeWind` with input `./app/global.css`). Keep these in sync if moving the global CSS file.
- Tailwind class scanning is configured for `app/**/*`, `components/**/*`, `presentation/**/*`, and `./App.tsx`; add new source roots there before relying on NativeWind classes in them.

## Gotchas
- `npm run reset-project` is still declared, but `scripts/reset-project.js` is absent in the current tree; do not recommend or run it unless that script is restored.
- Generated/native outputs are ignored: `.expo/`, `dist/`, `web-build/`, `/ios`, and `/android`.
