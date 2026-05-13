"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, CalendarCheck, TrendingUp, Clock } from "lucide-react";

const stats = [
  { icon: <Phone className="h-5 w-5" strokeWidth={1.8} />, value: 100, suffix: "%", label: "Décrochés", color: "text-lime", border: "border-lime/30", glow: "hover:shadow-[0_0_40px_rgba(102,227,255,0.2)]" },
  { icon: <Clock className="h-5 w-5" strokeWidth={1.8} />, value: 30, suffix: "s", label: "Qualification", color: "text-amber", border: "border-amber/30", glow: "hover:shadow-[0_0_40px_rgba(255,122,89,0.2)]" },
  { icon: <CalendarCheck className="h-5 w-5" strokeWidth={1.8} />, value: 47, suffix: "", label: "RDV / mois", color: "text-emerald-400", border: "border-emerald-400/30", glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]" },
  { icon: <TrendingUp className="h-5 w-5" strokeWidth={1.8} />, value: 12, suffix: "k€", label: "Récupérés", color: "text-violet-400", border: "border-violet-400/30", glow: "hover:shadow-[0_0_40px_rgba(167,139,250,0.2)]" },
];

const testimonials = [
  { text: "Des leads qui tournent en 24h/7, c'est le rêve de tout entrepreneur.", name: "L'Atelier", role: "Infopreneur · Paris", initials: "LA" },
  { text: "On a récupéré 3 mandats la première semaine, juste avec les appels du soir.", name: "Sophie M.", role: "Agence immobilière · Lyon", initials: "SM" },
  { text: "Les gens appellent à 7h30 avant l'ouverture. Maintenant l'agent prend le RDV et on commence la journée agenda rempli.", name: "Dr. Laurent K.", role: "Cabinet dentaire · Bordeaux", initials: "LK" },
  { text: "On est sur chantier toute la journée. Maintenant chaque appel est qualifié avant qu'on rappelle.", name: "Enzo & Antho", role: "Artisans plombiers · Bordeaux", initials: "EA" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 35;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

function TestimonialPhone({ inView }: { inView: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* iPhone frame */}
      <div className="relative rounded-[3rem] border-[3px] border-white/10 bg-ink p-3 shadow-[0_0_60px_rgba(102,227,255,0.08)]">
        {/* Notch */}
        <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-white/5" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-graphite to-ink px-5 pb-8 pt-10">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <div className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <p className="text-[0.6rem] font-bold uppercase tracking-widest text-muted">Messages clients</p>
          </div>

          {/* Messages container - fixed height */}
          <div className="mt-4 relative h-[180px]">
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className={`absolute inset-0 transition-all duration-700 ${index === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
              >
                {/* Message bubble */}
                <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/10 p-4">
                  <p className="text-[0.85rem] font-semibold leading-5 text-white">
                    {t.text}
                  </p>
                </div>

                {/* Sender */}
                <div className="mt-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime/10 text-[0.6rem] font-black text-lime">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.name}</p>
                    <p className="text-[0.6rem] text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="mt-4 flex justify-center gap-1.5">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? "w-5 bg-lime" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Reflection glow */}
      <div className="absolute -bottom-6 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-lime/[0.06] blur-2xl" />
    </div>
  );
}

export function RoiSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="roi" ref={ref} className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">Résultats</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
            30 jours. Zéro appel perdu.
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Stats 2x2 */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-2xl border ${stat.border} bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-all duration-500 hover:scale-105 ${stat.glow} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ${stat.color}`}>
                  {stat.icon}
                </div>
                <p className={`mt-3 text-3xl font-black tabular-nums ${stat.color} sm:text-4xl`}>
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wider text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* iPhone testimonials au centre */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`} style={{ transitionDelay: "400ms" }}>
            <TestimonialPhone inView={inView} />
          </div>

          {/* Texte droit - résumé */}
          <div className={`text-center lg:text-left transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`} style={{ transitionDelay: "600ms" }}>
            <p className="text-2xl font-black leading-8 text-white sm:text-3xl">
              Ils ont branché l&apos;agent.<br />
              <span className="text-lime">Les résultats parlent.</span>
            </p>
            <p className="mt-4 text-sm font-medium text-muted">
              Chaque témoignage = un vrai client qui perdait des appels avant VoiceCaptur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
