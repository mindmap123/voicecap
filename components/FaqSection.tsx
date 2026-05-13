import { faqs } from "@/data/landing";

export function FaqSection() {
  return (
    <section id="faq" className="bg-graphite px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">FAQ</p>
        <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Les objections normales, traitées clairement.</h2>
        <div className="mt-10 divide-y divide-mist/10 rounded-3xl border border-mist/10 bg-ink/60">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-lime transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
