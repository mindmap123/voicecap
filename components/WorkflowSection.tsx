import { workflowSteps } from "@/data/landing";
import { Headset, ScanSearch, CalendarClock, Send } from "lucide-react";

const icons = [
  <Headset key="headset" className="h-7 w-7" strokeWidth={1.8} />,
  <ScanSearch key="scan" className="h-7 w-7" strokeWidth={1.8} />,
  <CalendarClock key="calendar" className="h-7 w-7" strokeWidth={1.8} />,
  <Send key="send" className="h-7 w-7" strokeWidth={1.8} />,
];

const gradients = [
  "from-lime/20 to-lime/5",
  "from-amber/20 to-amber/5",
  "from-sky-400/20 to-sky-400/5",
  "from-fuchsia-400/20 to-fuchsia-400/5"
];

const accents = ["text-lime", "text-amber", "text-sky-400", "text-fuchsia-400"];
const borders = ["border-lime/30", "border-amber/30", "border-sky-400/30", "border-fuchsia-400/30"];
const glows = ["shadow-[0_0_40px_rgba(102,227,255,0.2)]", "shadow-[0_0_40px_rgba(255,122,89,0.2)]", "shadow-[0_0_40px_rgba(56,189,248,0.2)]", "shadow-[0_0_40px_rgba(232,121,249,0.2)]"];

export function WorkflowSection() {
  return (
    <section id="systeme" className="scroll-mt-24 px-4 pt-0 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">Le système</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Pas un robot au téléphone.<br className="hidden lg:block" /> Un parcours de <span className="whitespace-nowrap">lead complet.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative overflow-hidden rounded-3xl border ${borders[index]} bg-gradient-to-b ${gradients[index]} p-8 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 ${glows[index]}`}
            >
              {/* Numéro en fond */}
              <span className="absolute -right-4 -top-6 text-[8rem] font-black leading-none text-white/[0.06] select-none">
                {index + 1}
              </span>

              {/* Icône */}
              <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border ${borders[index]} bg-ink/80 ${accents[index]} backdrop-blur`}>
                {icons[index]}
              </div>

              {/* Contenu */}
              <h3 className={`relative mt-6 text-2xl font-black tracking-tight ${accents[index]}`}>
                {step.title}
              </h3>
              <p className="relative mt-4 text-[1.05rem] font-medium leading-7 text-white/80">
                {step.text}
              </p>

              {/* Ligne de connexion (sauf dernière card) */}
              {index < 3 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-mist/20 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
