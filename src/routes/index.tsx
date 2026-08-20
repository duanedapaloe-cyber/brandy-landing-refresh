import { createFileRoute } from "@tanstack/react-router";

const CTA_URL = "https://linkthem.net/aff_c?offer_id=1234&aff_id=115643";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandy Melville $750 Gift Card — Complete Your Registration" },
      {
        name: "description",
        content:
          "Finish a few easy steps and claim your $750 Brandy Melville gift card today.",
      },
      {
        property: "og:title",
        content: "Brandy Melville $750 Gift Card — Complete Your Registration",
      },
      {
        property: "og:description",
        content:
          "Finish a few easy steps and claim your $750 Brandy Melville gift card today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  'Tap the "Claim Now" button',
  "Fill in your email and basic details",
  "Finish 4-5 sponsored deals",
  "Enjoy your $750 Brandy Melville gift card!",
];

const faqs = [
  {
    q: "How much time do the deals take?",
    a: "Most people wrap them up within a short session — many deals only take a couple of minutes each.",
  },
  {
    q: "What exactly is a deal?",
    a: "A deal is a short offer from one of our sponsors, such as signing up for a trial, a sample, or a quick survey.",
  },
  {
    q: "How many deals must I finish?",
    a: "You need to complete 4-5 sponsored deals for your reward to be approved.",
  },
  {
    q: "When does my reward arrive?",
    a: "As soon as your deals are confirmed, your reward is sent out to the email you registered with.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 font-sans text-foreground">
      <div className="mx-auto w-full max-w-xl">
        <header className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-accent-foreground">
            Brandy Melville
          </h1>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
        </header>

        <h2 className="mt-8 text-center font-display text-3xl font-bold">
          Finish Your Registration
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Work through these easy steps to claim your $750 Brandy Melville gift card
        </p>

        <ol className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {i + 1}
              </span>
              <span className="text-sm font-bold">{s}</span>
            </li>
          ))}
        </ol>

        <a
          href={CTA_URL}
          rel="nofollow sponsored noopener"
          className="mt-9 flex w-full items-center justify-center rounded-xl bg-primary px-6 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
        >
          Claim Now
        </a>

        <p className="mx-auto mt-4 max-w-md text-center text-xs leading-relaxed text-muted-foreground">
          By choosing "Claim Now", you accept that the required steps must be completed to
          receive your gift card.
        </p>

        <h2 className="mt-14 font-display text-2xl font-bold">Questions People Ask Often</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between text-sm font-bold">
                {f.q}
                <span className="ml-3 text-muted-foreground transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <footer className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold text-accent-foreground">
          <a href={CTA_URL} rel="nofollow sponsored noopener" className="hover:underline">
            Terms of Use
          </a>
          <span className="text-muted-foreground">•</span>
          <a href={CTA_URL} rel="nofollow sponsored noopener" className="hover:underline">
            Privacy Notice
          </a>
          <span className="text-muted-foreground">•</span>
          <a href={CTA_URL} rel="nofollow sponsored noopener" className="hover:underline">
            BrandyMelville.com
          </a>
        </footer>
      </div>
    </main>
  );
}
