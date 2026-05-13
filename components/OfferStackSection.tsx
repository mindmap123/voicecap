import { offerTiers } from "@/data/landing";
import { Crosshair, Flame, Orbit } from "lucide-react";

const tierStyles = [
  {
    float: "animate-float",
    border: "border-mist/30",
    badge: "bg-mist/10 text-mist",
    icon: <Crosshair className="h-7 w-7" strokeWidth={1.8} />,
    iconColor: "text-mist",
    ctaClass: "border-mist/30 text-white",
    neon: "shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_50px_rgba(255,255,255,0.08),0_0_100px_rgba(255,255,255,0.04)]",
    neonHover: "hover:shadow-[0_0_30px_rgba(255,255,255,0.25),0_0_70px_rgba(255,255,255,0.15),0_0_120px_rgba(255,255,255,0.08)]",
  },
  {
    float: "animate-float-delay-1",
    border: "border-lime/50",
    badge: "bg-lime/10 text-lime",
    icon: <Flame className="h-7 w-7" strokeWidth={1.8} />,
    iconColor: "text-lime",
    ctaClass: "border-lime/50 bg-lime/10 text-lime",
    neon: "shadow-[0_0_15px_rgba(102,227,255,0.2),0_0_45px_rgba(102,227,255,0.1),0_0_90px_rgba(102,227,255,0.05)]",
    neonHover: "hover:shadow-[0_0_25px_rgba(102,227,255,0.35),0_0_70px_rgba(102,227,255,0.2),0_0_120px_rgba(102,227,255,0.1)]",
  },
  {
    float: "animate-float-delay-2",
    border: "border-amber/50",
    badge: "bg-amber/10 text-amber",
    icon: <Orbit className="h-7 w-7" strokeWidth={1.8} />,
    iconColor: "text-amber",
    ctaClass: "border-amber/50 bg-amber/10 text-amber",
    neon: "shadow-[0_0_15px_rgba(255,122,89,0.2),0_0_45px_rgba(255,122,89,0.1),0_0_90px_rgba(255,122,89,0.05)]",
    neonHover: "hover:shadow-[0_0_25px_rgba(255,122,89,0.35),0_0_70px_rgba(255,122,89,0.2),0_0_120px_rgba(255,122,89,0.1)]",
  },
];

export function OfferStackSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-graphite to-ink" />
      <div className="absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-lime/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-lime/[0.04] blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-amber/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lime animate-shimmer" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(102,227,255,0.08) 50%, transparent 100%)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            Offre Next Level
          </div>
          <h2 className="mt-6 text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Commencez petit.<br />
            <span className="bg-gradient-to-r from-lime to-amber bg-clip-text text-transparent">
              Scalez si ça marche.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {offerTiers.map((tier, index) => {
            const style = tierStyles[index];
            const isMiddle = index === 1;
            return (
              <article
                key={tier.name}
                className={`${style.float} relative rounded-[2rem] border ${style.border} bg-ink/80 backdrop-blur-sm p-8 transition-all duration-500 hover:scale-105 ${style.neon} ${style.neonHover} ${isMiddle ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {isMiddle && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-[0.65rem] font-black uppercase tracking-widest text-ink">
                    Populaire
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${style.iconColor}`}>
                    {style.icon}
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider ${style.badge}`}>
                    {tier.timeline}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-white sm:text-3xl">
                  {tier.name}
                </h3>

                <p className="mt-4 text-[0.95rem] font-medium leading-7 text-white/70">
                  {tier.description}
                </p>

                <div className="mt-8">
                  <span className={`inline-block rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:bg-white/5 ${style.ctaClass}`}>
                    {tier.cta}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
