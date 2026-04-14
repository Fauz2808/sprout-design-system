# Sprout Design System

> Design tokens + Storybook + Figma Code Connect for Sprout React Native app.
> **For developers:** this folder is your source of truth. If Figma says one thing and this folder says another, ask the designer.

---

## What's in here

```
04 - Design System & Storybook/
├── tokens/
│   └── theme.ts              ← ALL design tokens. Import from here, never hardcode values.
├── src/components/
│   ├── Button/               ← Button.tsx + Button.stories.tsx
│   ├── Input/                ← Input.tsx + Input.stories.tsx
│   ├── NavigationBar/        ← NavigationBar.tsx + NavigationBar.stories.tsx
│   ├── Typography/           ← Typography.tsx + Typography.stories.tsx
│   └── Badge/                ← Badge.tsx + Badge.stories.tsx
├── .storybook/
│   ├── main.ts               ← Storybook config (webpack, aliases)
│   └── preview.tsx           ← Global decorators, backgrounds, viewport sizes
├── figma-code-connect/
│   ├── figma.config.json     ← Code Connect config
│   ├── Button.figma.tsx      ← Links Button Figma component → code
│   ├── Input.figma.tsx
│   ├── NavigationBar.figma.tsx
│   └── Badge.figma.tsx
├── handoff/
│   └── sprout-design-handoff.html   ← OPEN THIS FIRST. Full spec for every component.
├── package.json
├── tsconfig.json
└── babel.config.js
```

---

## Setup

### 1. Install dependencies

```bash
cd "04 - Design System & Storybook"
yarn install
```

### 2. Run Storybook

```bash
yarn storybook
```

Opens at **http://localhost:6006** — you'll see all components in the left panel.

### 3. Build static Storybook

```bash
yarn build-storybook
```

Outputs to `storybook-static/` — deploy to Netlify/Vercel for your team.

---

## How to use the token file in your app

Copy `tokens/theme.ts` into your React Native project and import from it everywhere:

```ts
import { colors, spacing, radius, typography, shadows, buttonSizes } from '@/tokens/theme';

// Use tokens — never hardcode
style={{
  backgroundColor: colors.brand[500],   // #186338
  padding: spacing[16],                  // 16
  borderRadius: radius.xl,              // 16
}}
```

---

## Components quick reference

| Component | Import | Key props |
|---|---|---|
| Button | `@/components/Button/Button` | `type`, `size`, `label`, `onPress` |
| Input | `@/components/Input/Input` | `label`, `size`, `errorText`, `disabled` |
| NavigationBar | `@/components/NavigationBar/NavigationBar` | `tabs`, `activeTab`, `onTabPress`, `bottomInset` |
| Typography | `@/components/Typography/Typography` | `variant` (h1–h6, p1–p3, s1–s3, c1–c3) |
| Badge | `@/components/Badge/Badge` | `variant`, `color`, `size`, `label` |

---

## Figma Code Connect

After installing Code Connect, publish the mappings so your devs see real code in Figma Dev Mode:

### Install Code Connect CLI

```bash
yarn add --dev @figma/code-connect
```

### Publish to Figma

```bash
FIGMA_ACCESS_TOKEN=your_token_here npx figma connect publish
```

Get your token: figma.com → Account → Personal Access Tokens → generate one with Dev Resources scope.

### What it does

When a developer clicks on a Button in Figma Dev Mode, instead of generic CSS they see:

```tsx
<Button
  type="Primary"
  size="Large"
  label="Get Started"
  onPress={() => {}}
/>
```

This is the exact code they should copy. No guessing.

---

## Figma file

**Sprout Design — Prod:** https://www.figma.com/design/EhpRiGZ5eJnBb132X9zewg

- Design System page → components
- Variables panel → all colour and spacing tokens

---

## Fonts

Install these in your React Native project:

| Font | Weight | Usage |
|---|---|---|
| Playfair Display | Medium (500) | All headings h1–h6 |
| Inter | Regular (400) | Body text |
| Inter | Medium (500) | Subheadings, active nav labels |
| Inter | SemiBold (600) | Button labels, c1 captions |

**iOS:** Add font files to `Info.plist` under `UIAppFonts`.
**Android:** Add font files to `android/app/src/main/assets/fonts/`.

---

## Rules for developers

1. **Never hardcode colours.** Use `colors.*` or `semanticColors.*`.
2. **Never hardcode spacing.** Use `spacing[n]`.
3. **All buttons use `radius.full`** (9999px pill shape). This is non-negotiable.
4. **All inputs use `radius.lg`** (12px).
5. **App background is `colors.secondary[500]`** (#f4f1ea cream) — not white.
6. **Headings use Playfair Display** — if you use Inter for a heading, it's wrong.
7. **Open `handoff/sprout-design-handoff.html`** in a browser before touching any component.

---

## Questions?

Check the handoff doc first: `handoff/sprout-design-handoff.html`

Then check Storybook: `yarn storybook`

Then check Figma: the component's Dev Mode panel will show the exact code.
