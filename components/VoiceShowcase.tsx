"use client";
import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const voices = [
  { name: "Clara", style: "Chaleureuse & pro", file: "/audio/voice1.mp3", color: "lime" },
  { name: "Inès", style: "Douce & efficace", file: "/audio/voice2.mp3", color: "amber" },
  { name: "Hugo", style: "Direct & rassurant", file: "/audio/voice3.mp3", color: "emerald-400" },
  { name: "Léo", style: "Dynamique & clair", file: "/audio/Voice4.mp3", color: "violet-400" },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; wave: string; glow: string }> = {
  lime: { bg: "bg-lime", text: "text-lime", ring: "ring-lime/30", wave: "bg-lime", glow: "shadow-[0_0_30px_rgba(102,227,255,0.2)]" },
  amber: { bg: "bg-amber", text: "text-amber", ring: "ring-amber/30", wave: "bg-amber", glow: "shadow-[0_0_30px_rgba(255,122,89,0.2)]" },
  "emerald-400": { bg: "bg-emerald-400", text: "text-emerald-400", ring: "ring-emerald-400/30", wave: "bg-emerald-400", glow: "shadow-[0_0_30px_rgba(52,211,153,0.2)]" },
  "violet-400": { bg: "bg-violet-400", text: "text-violet-400", ring: "ring-violet-400/30", wave: "bg-violet-400", glow: "shadow-[0_0_30px_rgba(167,139,250,0.2)]" },
};

function VoiceCard({ voice, index }: { voice: typeof voices[0]; index: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const colors = colorMap[voice.color];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnd = () => { setPlaying(false); setProgress(0); };
    const onLoaded = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("loadedmetadata", onLoaded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink/80 p-5 transition-all duration-500 hover:scale-[1.02] ${playing ? colors.glow : ""}`}>
      <audio ref={audioRef} src={voice.file} preload="metadata" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-lg font-black ${colors.text}`}>{voice.name}</p>
          <p className="text-xs font-medium text-muted">{voice.style}</p>
        </div>
        <button
          onClick={toggle}
          className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 ${colors.ring} ${playing ? colors.bg + " text-ink" : "bg-white/5 " + colors.text} transition-all duration-300 hover:scale-110`}
        >
          {playing ? <Pause className="h-4 w-4" strokeWidth={2.5} /> : <Play className="h-4 w-4 ml-0.5" strokeWidth={2.5} />}
        </button>
      </div>

      {/* Waveform / progress */}
      <div className="mt-4 flex items-center gap-3">
        <div className="relative h-8 flex-1 flex items-end gap-[2px] overflow-hidden rounded-lg">
          {Array.from({ length: 32 }).map((_, i) => {
            const barProgress = (i / 32) * 100;
            const isActive = barProgress < progress;
            const height = 30 + Math.sin(i * 0.7 + index * 2) * 50 + Math.cos(i * 1.3) * 20;
            return (
              <span
                key={i}
                className={`w-full rounded-full transition-all duration-150 ${isActive ? colors.wave : "bg-white/10"} ${playing && isActive ? "animate-pulse" : ""}`}
                style={{ height: `${height}%`, animationDelay: `${i * 30}ms` }}
              />
            );
          })}
        </div>
        <span className="text-[0.65rem] font-bold tabular-nums text-muted w-8 text-right">
          {duration ? formatTime(duration) : "···"}
        </span>
      </div>
    </div>
  );
}

export function VoiceShowcase() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">Voix</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
            Écoutez votre futur agent.
          </h2>
          <p className="mt-4 text-base font-medium text-muted">
            Chaque voix est personnalisable selon votre ton et votre métier.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {voices.map((voice, index) => (
            <VoiceCard key={voice.name} voice={voice} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
