import { createFileRoute } from "@tanstack/react-router";

const CTA_URL = "https://linkthem.net/aff_c?offer_id=1234&aff_id=115643";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandy Melville $750 Reward — Claim Yours" },
      {
        name: "description",
        content:
          "Follow four short steps and claim your $750 Brandy Melville reward today. Limited spots available.",
      },
      { property: "og:title", content: "Brandy Melville $750 Reward — Claim Yours" },
      {
        property: "og:description",
        content:
          "Follow four short steps and claim your $750 Brandy Melville reward today. Limited spots available.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    n: "1",
    title: "Share your email",
    body: "Drop in a valid email address so we know where to send your reward details.",
  },
  {
    n: "2",
    title: "Answer a few quick questions",
    body: "A short survey — it only takes a moment and helps us confirm you qualify.",
  },
  {
    n: "3",
    title: "Complete 4-5 offers",
    body: "Pick and finish 4-5 sponsor offers from the list. Choose whichever ones suit you best.",
  },
  {
    n: "4",
    title: "Receive your $750",
    body: "Once your offers are verified, your $750 Brandy Melville reward is released to you.",
  },
];

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CTA_URL}
      rel="nofollow sponsored noopener"
      className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] hover:bg-primary/90"
    >
      {label}
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-6 text-center">
          <p className="font-display text-2xl font-semibold uppercase tracking-[0.35em]">
            Brandy Melville
          </p>
        </div>
      </header>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Limited time reward
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-tight sm:text-6xl">
            Get a $750 Brandy Melville Reward
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Refresh your closet on us. Complete a handful of simple steps and walk away with $750
            to spend on the pieces you have been eyeing.
          </p>
          <div className="mt-10">
            <CtaButton label="Claim my $750" />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Only a limited number of rewards are available each day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center font-display text-4xl font-semibold">How it works</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-card p-7 text-left shadow-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-accent-foreground">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton label="Start now" />
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold">Why people love this</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { t: "Free to join", d: "There is no cost to sign up and take part." },
              { t: "Quick to finish", d: "Most people wrap up the steps the same day." },
              { t: "Real rewards", d: "Verified participants get their $750 released." },
            ].map((i) => (
              <div key={i.t}>
                <h3 className="font-display text-xl font-semibold">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs leading-relaxed text-muted-foreground">
        <p className="mx-auto max-w-2xl px-6">
          This promotion is not affiliated with, sponsored by, or endorsed by Brandy Melville.
          Rewards require completion of the listed steps and offer requirements.
        </p>
        <p className="mt-4">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </main>
  );
}
