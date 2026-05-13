"use client";
import { CallSystemVisual } from "@/components/CallSystemVisual";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen px-5 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="animate-rise max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime">
            L&apos;agent qui décroche quand vous ne pouvez pas
          </p>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[0.95] text-mist sm:text-6xl lg:text-7xl">
            Ne laissez pas vos appels filer chez le concurrent.
          </h1>


        </div>
        <CallSystemVisual />
      </div>
    </section>
  );
}
