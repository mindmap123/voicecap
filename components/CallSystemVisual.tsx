"use client";
import { useEffect, useState } from "react";

const conversation = [
  { speaker: "agent", text: "Bonjour, agence Duval Immobilier, que puis-je faire pour vous ?" },
  { speaker: "prospect", text: "Bonjour, j'appelle pour le T3 rue de la République, il est encore dispo ?" },
  { speaker: "agent", text: "Oui tout à fait. Rappelez-moi, c'est pour une location ou un achat ?" },
  { speaker: "prospect", text: "C'est pour un achat, on est deux avec un budget autour de 280k." },
  { speaker: "agent", text: "Parfait. Je peux vous proposer une visite. Vous êtes disponible quand ?" },
  { speaker: "prospect", text: "Jeudi en fin de matinée ce serait idéal." },
  { speaker: "agent", text: "C'est noté. Jeudi 11h, je vous envoie la confirmation par SMS." },
];

const output = {
  lead: "Couple · Budget 280k · T3 République",
  action: "Visite jeudi 11h · SMS envoyé",
};

export function CallSystemVisual() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(0);

  useEffect(() => {
    if (visibleCount < conversation.length) {
      const delay = visibleCount === 0 ? 1200 : 1800 + Math.random() * 800;
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
        setSpeakingIndex(visibleCount);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowOutput(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  // Loop animation
  useEffect(() => {
    if (showOutput) {
      const timer = setTimeout(() => {
        setVisibleCount(0);
        setShowOutput(false);
        setSpeakingIndex(0);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showOutput]);

  const currentSpeaker = visibleCount < conversation.length ? conversation[visibleCount]?.speaker : null;

  return (
    <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border border-mist/10 bg-ink/90 p-4 shadow-glow backdrop-blur sm:p-5">
        {/* Status bar */}
        <div className="flex items-center justify-between px-2 pb-4">
          <div className="flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${currentSpeaker === "agent" ? "bg-lime animate-pulse" : "bg-lime/50"}`} />
            <span className="text-[0.7rem] font-bold uppercase tracking-widest text-lime">En appel · 0:{String(Math.min(visibleCount * 8 + 3, 59)).padStart(2, "0")}</span>
          </div>
          <span className="text-[0.65rem] font-medium text-muted">Agent Immo</span>
        </div>

        {/* Waveform when agent speaks */}
        <div className="flex h-10 items-center justify-center gap-[3px] px-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={`w-[3px] rounded-full transition-all duration-300 ${
                currentSpeaker === "agent"
                  ? "bg-lime animate-pulse"
                  : currentSpeaker === "prospect"
                  ? "bg-amber/70"
                  : "bg-mist/10"
              }`}
              style={{
                height: currentSpeaker
                  ? `${8 + Math.sin(i * 0.8 + visibleCount * 2) * 12 + Math.random() * 6}px`
                  : "4px",
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Chat messages */}
        <div className="mt-4 flex h-[320px] flex-col gap-2.5 overflow-hidden px-1 sm:h-[340px]">
          {conversation.slice(0, visibleCount).map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.speaker === "agent" ? "justify-start" : "justify-end"} animate-rise`}
              style={{ animationDelay: "0ms" }}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.82rem] font-medium leading-5 ${
                  msg.speaker === "agent"
                    ? "rounded-tl-sm bg-panel border border-mist/10 text-white/90"
                    : "rounded-tr-sm bg-lime/15 border border-lime/20 text-white/90"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {visibleCount < conversation.length && visibleCount > 0 && (
            <div className={`flex ${conversation[visibleCount]?.speaker === "agent" ? "justify-start" : "justify-end"}`}>
              <div className={`flex gap-1 rounded-2xl px-4 py-3 ${
                conversation[visibleCount]?.speaker === "agent" ? "bg-panel border border-mist/10" : "bg-lime/10 border border-lime/20"
              }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-mist/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-mist/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-mist/50 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
        </div>

        {/* Output card */}
        {showOutput && (
          <div className="mt-3 animate-rise rounded-2xl border border-lime/30 bg-lime/5 p-4">
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-lime">Fiche lead créée</p>
            <p className="mt-2 text-sm font-semibold text-white">{output.lead}</p>
            <p className="mt-1 text-sm font-medium text-lime">{output.action}</p>
          </div>
        )}
      </div>
    </div>
  );
}
