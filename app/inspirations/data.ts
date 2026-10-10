export type Inspiration = {
  name: string
  url: string
  kind: 'app' | 'brand' | 'site' | 'type' | 'object'
  note?: string
  /** Optional picture, e.g. '/inspirations/dia.jpg' (put the file in public/inspirations/). */
  image?: string
}

export const kindLabels: Record<Inspiration['kind'], string> = {
  app: 'App',
  brand: 'Brand',
  site: 'Site',
  type: 'Type',
  object: 'Object',
}

export const inspirations: Inspiration[] = [
  {
    name: 'Dia',
    url: 'https://www.diabrowser.com',
    kind: 'app',
    note: 'The Browser Company’s AI browser.',
    image: '/inspirations/dia.jpg',
  },
  {
    name: 'Linear',
    url: 'https://linear.app',
    kind: 'app',
    note: 'Issue tracking, and the bar for product craft.',
    image: '/inspirations/linear.jpg',
  },
  {
    name: 'The Browser Company',
    url: 'https://thebrowser.company',
    kind: 'brand',
    note: 'Warm, weird and very human for a software company.',
    image: '/inspirations/the-browser-company.jpg',
  },
  {
    name: 'Arc',
    url: 'https://arc.net',
    kind: 'app',
    note: 'The browser that came before Dia.',
    image: '/inspirations/arc.jpg',
  },
  {
    name: 'Raycast',
    url: 'https://www.raycast.com',
    kind: 'app',
    note: 'Keyboard-first launcher; dense but calm.',
    image: '/inspirations/raycast.jpg',
  },
  {
    name: 'Grainient',
    url: 'https://grainient.supply',
    kind: 'site',
    note: 'Grainy, animated gradients and a shader tool.',
    image: '/inspirations/grainient.jpg',
  },
  {
    name: 'Stripe',
    url: 'https://stripe.com',
    kind: 'brand',
    note: 'Docs and marketing that set the standard.',
    image: '/inspirations/stripe.jpg',
  },
  {
    name: 'Emil Kowalski',
    url: 'https://emilkowal.ski',
    kind: 'site',
    note: 'Animation and component craft.',
    image: '/inspirations/emil-kowalski.jpg',
  },
  {
    name: 'Mason Wong',
    url: 'https://www.mason-wong.com',
    kind: 'site',
    note: 'Visual designer’s portfolio; big type, quiet texture.',
    image: '/inspirations/mason-wong.jpg',
  },
  {
    name: 'The General Intelligence Company',
    url: 'https://www.generalintelligencecompany.com',
    kind: 'site',
    note: 'An AI lab that looks like a Ghibli postcard of Central Park.',
    image: '/inspirations/general-intelligence-company.jpg',
  },
  {
    name: 'Wise Design',
    url: 'https://wise.design',
    kind: 'brand',
    note: 'Wise’s design system and brand, out in the open.',
    image: '/inspirations/wise-design.jpg',
  },
  {
    name: 'Monzo',
    url: 'https://monzo.com',
    kind: 'brand',
    note: 'A bank with a voice, and that hot coral.',
    image: '/inspirations/monzo.jpg',
  },
]
