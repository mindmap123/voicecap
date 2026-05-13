"use client";
import { useEffect, useRef, useState } from "react";
import { useCases } from "@/data/landing";
import { HardHat, Stethoscope, Building2, TrendingUp } from "lucide-react";

const sectorIcons = [
  <HardHat key="hardhat" className="h-6 w-6" strokeWidth={1.8} />,
  <Stethoscope key="stethoscope" className="h-6 w-6" strokeWidth={1.8} />,
  <Building2 key="building" className="h-6 w-6" strokeWidth={1.8} />,
  <TrendingUp key="trending" className="h-6 w-6" strokeWidth={1.8} />,
];

const accents = [
  { text: "text-amber", bg: "bg-amber", ring: "ring-amber/30", glow: "rgba(255,122,89,0.4)" },
  { text: "text-lime", bg: "bg-lime", ring: "ring-lime/30", glow: "rgba(102,227,255,0.4)" },
  { text: "text-emerald-400", bg: "bg-emerald-400", ring: "ring-emerald-400/30", glow: "rgba(52,211,153,0.4)" },
  { text: "text-violet-400", bg: "bg-violet-400", ring: "ring-violet-400/30", glow: "rgba(167,139,250,0.4)" },
];

function AnimatedCard({ item, index }: { item: typeof useCases[0]; index: number }) {
  const [inView, setInView] = useState(false);
  const [metricText, setMetricText] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const style = accents[index];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (metricText.length < item.metric.length) {
      const timer = setTimeout(() => {
        setMetricText(item.metric.slice(0, metricText.length + 1));
      }, 30 + Math.random() * 20);
      return () => clearTimeout(timer);
    }
  }, [inView, metricText, item.metric]);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[1px] transition-all duration-500 hover:scale-[1.03]"
        style={{ boxShadow: inView ? `0 0 0px ${style.glow}, 0 20px 60px rgba(0,0,0,0.3)` : "none" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${style.glow}, 0 20px 60px rgba(0,0,0,0.4)`; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${style.glow}, 0 20px 60px rgba(0,0,0,0.3)`; }}
      >
        <div className="relative h-full rounded-[calc(2rem-1px)] bg-ink/95 p-6 sm:p-8">
          {/* Animated gradient orb */}
          <div
            className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl transition-all duration-700 ${inView ? "opacity-30 scale-100" : "opacity-0 scale-50"} ${style.bg}`}
            style={{ transitionDelay: `${index * 150 + 300}ms` }}
          />

          {/* Header row */}
          <div className="relative flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg}/10 ${style.text} ring-1 ${style.ring} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              {sectorIcons[index]}
            </div>
            <h3 className="text-lg font-black text-white sm:text-xl">{item.sector}</h3>
          </div>

          {/* Pain point with pulse dot */}
          <div className="relative mt-5 flex items-start gap-3">
            <span className={`mt-1.5 block h-2 w-2 shrink-0 rounded-full ${style.bg} ${inView ? "animate-pulse" : ""}`} />
            <p className="text-[0.95rem] font-bold leading-6 text-white/70">
              {item.pain}
            </p>
          </div>

          {/* Solution with animated check */}
          <div className="relative mt-4 flex items-start gap-3">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/20 text-lime transition-all duration-500 ${inView ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} style={{ transitionDelay: `${index * 150 + 500}ms` }}>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className={`text-[0.9rem] font-bold leading-6 ${style.text}`}>{item.workflow}</p>
          </div>

          {/* Metric with typing effect */}
          <div className={`relative mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`} style={{ transitionDelay: `${index * 150 + 600}ms` }}>
            <p className="text-[0.82rem] font-bold text-white">
              {metricText}
              {metricText.length < item.metric.length && inView && (
                <span className={`ml-0.5 inline-block h-3.5 w-[2px] animate-pulse ${style.bg}`} />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UseCasesSection() {
  return (
    <section id="cas" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">Cas concrets</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Un agent adapté à votre métier.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {useCases.map((item, index) => (
            <AnimatedCard key={item.sector} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
