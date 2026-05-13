import { callScript, smsExamples, voiceAgents } from "@/data/landing";

export function ProofDemoSection() {
  const agent = voiceAgents[0];
  const sms = smsExamples[1];

  return (
    <section id="demo" className="scroll-mt-24 border-y border-mist/10 bg-mist px-4 py-20 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-ink/50">Démo concrète</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Un appel, un SMS, une fiche lead. Pas quinze promesses.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Le visiteur doit comprendre en trente secondes ce que l&apos;agent produit pour votre business.
            </p>
            <audio className="mt-8 w-full" controls preload="metadata" src="/audio/agent-demo.m4a">
              Votre navigateur ne supporte pas la lecture audio.
            </audio>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] bg-ink p-5 text-mist">
              <div className="flex items-center gap-4 border-b border-mist/10 pb-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-xl font-black text-ink">
                  {agent.name.slice(0, 1)}
                </div>
                <div>
                  <h3 className="text-2xl font-black">{agent.name}</h3>
                  <p className="text-sm text-muted">{agent.role}</p>
                </div>
              </div>
              <div className="mt-5 flex h-16 items-end gap-1">
                {Array.from({ length: 22 }).map((_, index) => (
                  <span
                    key={index}
                    className="w-full rounded-full bg-lime"
                    style={{ height: `${12 + ((index * 13) % 38)}px` }}
                  />
                ))}
              </div>
              <p className="mt-5 rounded-3xl bg-panel p-4 text-sm leading-6 text-muted">{agent.job}</p>
            </article>

            <article className="rounded-[2rem] bg-ink p-5 text-mist">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-lime">Conversation</p>
              <div className="mt-4 space-y-3">
                {callScript.slice(0, 3).map((item) => (
                  <div key={item.line} className="rounded-3xl border border-mist/10 bg-panel p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-amber">{item.speaker}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.line}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-ink p-5 text-mist lg:col-span-2">
              <div className="flex items-center justify-between gap-4 border-b border-mist/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{sms.recipient}</p>
                  <h3 className="mt-1 text-xl font-black">{sms.title}</h3>
                </div>
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink">
                  Envoyé
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {sms.messages.map((message) => (
                  <p key={message} className="rounded-3xl bg-mist px-4 py-3 text-sm font-medium leading-6 text-ink">
                    {message}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
