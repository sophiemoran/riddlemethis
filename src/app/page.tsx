import Aristotle from "@/components/Aristotle";
import AskCard from "@/components/AskCard";

const steps = [
  {
    icon: "📄",
    title: "Add your material",
    body: "Upload your slides or notes as a PDF, or type the question that's confusing you.",
  },
  {
    icon: "🎯",
    title: "Pick your terms",
    body: "Name any topic you know well: football, cooking, music, video games, anything.",
  },
  {
    icon: "💡",
    title: "Get it explained",
    body: "Aristotle explains it in your terms, then sums it up in real terms for the test.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-serif text-xl font-semibold whitespace-nowrap text-forest-700 sm:text-2xl">
          Riddle Me This
        </span>
        <div className="flex items-center gap-1 whitespace-nowrap sm:gap-3">
          <button type="button" className="rounded-full px-4 py-2 text-sm font-medium text-forest-700 hover:bg-forest-50">
            Log in
          </button>
          <button type="button" className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-700">
            Sign up
          </button>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-forest-100 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute top-64 -left-32 h-80 w-80 rounded-full bg-silver-200 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-8 pb-20 lg:grid-cols-2">
            <div className="animate-pop">
              <span className="inline-block rounded-full border border-forest-200 bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700">
                Your study buddy for test week
              </span>
              <h1 className="mt-6 font-serif text-5xl leading-tight font-semibold tracking-tight text-forest-900 sm:text-6xl">
                Confused? Let Aristotle explain it{" "}
                <span className="relative whitespace-nowrap text-forest-600">
                  your way.
                  <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                    <path d="M2 8 Q50 2 100 7 T198 5" className="stroke-silver-400" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-silver-600">
                Ask about anything from your class, pick a topic you already know
                inside out, and get an explanation that finally clicks.
              </p>

              <div className="mt-10">
                <AskCard />
              </div>
            </div>

            <div className="order-first flex flex-col items-center lg:order-none">
              <div className="animate-pop relative mb-4 max-w-sm rounded-3xl border border-silver-200 bg-white px-6 py-5 shadow-lg shadow-forest-900/10 [animation-delay:200ms]">
                <p className="text-sm font-semibold text-forest-600">
                  Arbitrage pricing, in football terms:
                </p>
                <p className="mt-2 text-forest-900">
                  &ldquo;Imagine two teams value the same quarterback differently.
                  You trade for him cheap from one and sell him high to the other.
                  That risk-free gain? Arbitrage.&rdquo;
                </p>
                <div aria-hidden className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-r border-b border-silver-200 bg-white" />
              </div>
              <Aristotle className="animate-float h-auto w-48 drop-shadow-xl sm:w-64 lg:w-80" />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-forest-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-serif text-4xl font-semibold text-forest-900">
              How it works
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-silver-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-1 whitespace-nowrap sm:gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 text-2xl">
                      {step.icon}
                    </span>
                    <span className="font-serif text-sm font-semibold text-silver-500">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-forest-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-silver-600">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example explanation */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center font-serif text-4xl font-semibold text-forest-900">
              Every answer ends in real terms
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-silver-600">
              Analogies help it click. The real definition makes sure you&apos;re
              ready for the test.
            </p>

            <div className="mt-10 space-y-4">
              <div className="ml-auto max-w-md rounded-3xl rounded-br-md bg-forest-600 px-5 py-4 text-white shadow-md">
                Can you explain what arbitrage pricing is in football terms?
              </div>
              <div className="flex items-end gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-silver-200 bg-forest-50 p-0.5">
                  <Aristotle headOnly waving={false} className="h-full w-full" />
                </div>
                <div className="max-w-lg rounded-3xl rounded-bl-md border border-silver-200 bg-white px-5 py-4 shadow-md">
                  <p className="text-forest-900">
                    Picture a trade market between teams. If the Bears value a
                    receiver at a 2nd-round pick and the Packers value him at a 1st,
                    a smart GM grabs him from the Bears and flips him to the Packers.
                    Prices across teams get pulled back into line.
                  </p>
                  <div className="mt-4 rounded-2xl border-l-4 border-forest-500 bg-forest-50 px-4 py-3">
                    <p className="text-xs font-bold tracking-wide text-forest-600 uppercase">
                      In real terms
                    </p>
                    <p className="mt-1 text-sm text-forest-900">
                      Arbitrage pricing theory says an asset&apos;s expected return depends
                      on its exposure to several economic factors. If an asset is
                      mispriced, investors trade it until the price is corrected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest-800 py-8 text-center text-sm text-silver-300">
        Riddle Me This · Study smarter, in your own terms
      </footer>
    </div>
  );
}
