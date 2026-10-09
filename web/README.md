# SocialXReach web

SaaS marketing site for SocialXReach, built with Next.js (App Router), TypeScript, Tailwind CSS v4,
Lucide icons and Motion.

```bash
npm install
npm run dev     # http://localhost:3000
```

## Where things live

| Path | What |
| --- | --- |
| `src/config/` | Brand, navigation and pricing — change names, links and prices here |
| `src/content/` | Page content and mock data (scenarios, products, solutions, templates, integrations, stories, FAQs) |
| `src/components/ui/` | Design-system primitives (Button, Container, Badge, Accordion, Reveal, PlatformIcon) |
| `src/components/mockups/` | Building blocks for product illustrations (chat bubbles, workflow nodes) |
| `src/components/home/` | Homepage sections |
| `src/components/{pricing,product,solutions,templates,integrations,customers,contact,auth}/` | Feature components |
| `src/lib/api.ts` | Client for the FastAPI backend (contact form) |

## What is real and what is a demo

- Contact form submissions are stored by the FastAPI backend in `../backend`.
- Pricing is placeholder data (`pricingConfig.isDemo`), shown with a disclaimer.
- Integrations are listed as "Planned" or "Exploring"; none are live.
- Customer stories are fictional and labelled "Illustrative example".
- Sign-up and sign-in are placeholder pages; no authentication is implemented.
- Product illustrations and the workflow builder are frontend demonstrations only.
