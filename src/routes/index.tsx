import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandy Melville $750 Gift Card — Finish Signing Up" },
      {
        name: "description",
        content:
          "Wrap up your sign-up in four quick steps and receive your $750 Brandy Melville gift card.",
      },
      { property: "og:title", content: "Brandy Melville $750 Gift Card — Finish Signing Up" },
      {
        property: "og:description",
        content:
          "Wrap up your sign-up in four quick steps and receive your $750 Brandy Melville gift card.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  'Tap the "Get Mine" button',
  "Share your email and a few basic details",
  "Finish 4-5 partner offers",
  "Spend your $750 Brandy Melville gift card!",
];

const faqs = [
  {
    q: "How much time do the offers take?",
    a: "Most people wrap everything up in about 15-30 minutes. Some offers finish in seconds, while a few take a little longer to register.",
  },
  {
    q: "What exactly is an offer?",
    a: "An offer is a short action from one of our partners — signing up for a free trial, answering a quick survey, or trying out an app.",
  },
  {
    q: "How many offers are required?",
    a: "You'll need to finish 4-5 partner offers before your reward is unlocked.",
  },
  {
    q: "When does my reward arrive?",
    a: "Once every offer is confirmed, your gift card is emailed to the address you entered, usually within a few days.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background px-5 py-12">
      <div className="mx-auto w-full max-w-lg">
        <header className="text-center">
          <h1 className="font-display text-3xl font-semibold uppercase tracking-[0.35em] text-foreground">
            Brandy
          </h1>
          <p className="font-display text-sm uppercase tracking-[0.5em] text-muted-foreground">
            Melville
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-foreground/60" />
          <h2 className="mt-8 font-display text-3xl font-semibold text-foreground">
            Finish Signing Up
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Just a few easy steps stand between you and your $750 Brandy Melville gift card
          </p>
        </header>

        <ol className="mt-10 space-y-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-md border border-border bg-card px-4 py-4"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-card-foreground">{step}</span>
            </li>
          ))}
        </ol>

        <Button
          size="lg"
          className="mt-10 h-14 w-full rounded-md text-base font-semibold uppercase tracking-[0.2em]"
        >
          Get Mine
        </Button>
        <p className="mx-auto mt-4 max-w-sm text-center text-xs text-muted-foreground">
          By tapping "Get Mine" you agree to finish the steps listed above in order to receive your
          gift card.
        </p>

        <section className="mt-14">
          <h3 className="font-display text-2xl font-semibold text-foreground">
            Questions People Ask
          </h3>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="mb-3 rounded-md border border-border bg-card px-4"
              >
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <footer className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            Terms of Use
          </a>
          <span aria-hidden>·</span>
          <a href="#" className="hover:text-foreground">
            Privacy Notice
          </a>
          <span aria-hidden>·</span>
          <a href="#" className="hover:text-foreground">
            BrandyMelville.com
          </a>
        </footer>
      </div>
    </main>
  );
}
