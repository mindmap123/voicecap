import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-mist">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-mist/10 bg-ink/76 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-xl font-black tracking-tight text-mist">VoiceCaptur</span>
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-sm font-semibold italic text-transparent">by Next Level</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a className="transition hover:text-mist" href="#systeme">Système</a>
            <a className="transition hover:text-mist" href="#demo">Démo</a>
            <a className="transition hover:text-mist" href="#cas">Cas concrets</a>
            <a className="transition hover:text-mist" href="#roi">ROI</a>
          </div>
          <a
            href="#audit"
            className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Voir une démo
          </a>
        </nav>
      </header>
      {children}

    </div>
  );
}
