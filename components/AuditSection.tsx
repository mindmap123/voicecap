export function AuditSection() {
  return (
    <section id="audit" className="scroll-mt-[2rem] px-4 py-6 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Gradient border wrapper */}
        <div className="rounded-[2rem] p-[2px] bg-gradient-to-r from-violet-500/60 via-lime/60 to-amber/60 shadow-[0_0_20px_rgba(167,139,250,0.2),0_0_50px_rgba(102,227,255,0.12),0_0_100px_rgba(102,227,255,0.06)] sm:rounded-[2.5rem]">
          <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-panel p-5 sm:rounded-[calc(2.5rem-2px)] sm:p-12 lg:p-16">
            {/* Decorative orbs */}
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-500/[0.06] blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-amber/[0.06] blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              {/* Left - copy (hidden on mobile) */}
              <div className="hidden lg:block">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/50">Démo</p>
                <h2 className="mt-4 text-4xl font-black leading-[1.1] text-white sm:text-5xl">
                  Voyez votre agent en action.
                </h2>
                <p className="mt-5 text-base font-medium leading-7 text-white/60">
                  On identifie vos appels à risque, le premier scénario rentable et l&apos;intégration minimale pour tester.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["SM", "LK", "EA"].map((initials) => (
                      <div key={initials} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[0.55rem] font-bold text-white ring-2 ring-panel">
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-white/50">+30 démos réalisées ce mois</p>
                </div>
              </div>

              {/* Right - form */}
              <form className="relative" name="voice-agent-audit">
                {/* Mobile title */}
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50 lg:hidden">Démo</p>
                <h2 className="mt-2 mb-4 text-2xl font-black text-white lg:hidden">Voyez votre agent en action.</h2>
                <div className="mb-5 flex items-center gap-3 lg:hidden">
                  <div className="flex -space-x-2">
                    {["SM", "LK", "EA"].map((initials) => (
                      <div key={initials} className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[0.5rem] font-bold text-white ring-2 ring-panel">
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-white/50">+30 démos réalisées ce mois</p>
                </div>

                <div className="grid gap-3 sm:gap-4">
                  <input
                    className="rounded-xl border border-white/[0.1] bg-white/[0.1] px-4 py-3 text-sm font-medium text-white placeholder-white/40 outline-none transition-all focus:border-white/30 focus:bg-white/[0.14] focus:ring-1 focus:ring-white/20"
                    placeholder="Votre nom"
                  />
                  <input
                    className="rounded-xl border border-white/[0.1] bg-white/[0.1] px-4 py-3 text-sm font-medium text-white placeholder-white/40 outline-none transition-all focus:border-white/30 focus:bg-white/[0.14] focus:ring-1 focus:ring-white/20"
                    placeholder="Email ou téléphone"
                  />
                  <input
                    className="rounded-xl border border-white/[0.1] bg-white/[0.1] px-4 py-3 text-sm font-medium text-white placeholder-white/40 outline-none transition-all focus:border-white/30 focus:bg-white/[0.14] focus:ring-1 focus:ring-white/20"
                    placeholder="Activité (artisan, cabinet, agence...)"
                  />
                  <select className="rounded-xl border border-white/[0.1] bg-white/[0.1] px-4 py-3 text-sm font-medium text-white outline-none transition-all focus:border-white/30 focus:bg-white/[0.14] focus:ring-1 focus:ring-white/20">
                    <option className="bg-ink">Appels manqués / semaine</option>
                    <option className="bg-ink">1 à 5</option>
                    <option className="bg-ink">6 à 15</option>
                    <option className="bg-ink">16 à 30</option>
                    <option className="bg-ink">Plus de 30</option>
                  </select>
                </div>
                <button
                  className="mt-4 w-full rounded-xl bg-white px-6 py-3.5 text-sm font-black text-ink transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  type="button"
                >
                  Voir une démo
                </button>
                <p className="mt-3 text-center text-[0.6rem] leading-4 text-white/30">
                  En envoyant ce formulaire, vous acceptez d&apos;être recontacté. Aucun spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
