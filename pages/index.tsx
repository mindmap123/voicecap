import Head from "next/head";
import { AuditSection } from "@/components/AuditSection";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { Layout } from "@/components/Layout";
import { OfferStackSection } from "@/components/OfferStackSection";
import { RoiSection } from "@/components/RoiSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { VoiceShowcase } from "@/components/VoiceShowcase";

const pageTitle = "Agent vocal IA pour appels entrants | Next Level";
const pageDescription =
  "Next Level transforme chaque appel entrant en opportunité suivie avec un agent vocal IA, des scénarios métier et un système de suivi commercial.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nextlevel.example/#organization",
      name: "Next Level",
      description:
        "Agence web et IA qui conçoit des systèmes digitaux, agents IA, automatisations et landing pages pour TPE/PME.",
      areaServed: "France"
    },
    {
      "@type": "WebSite",
      "@id": "https://nextlevel.example/#website",
      name: "Next Level",
      publisher: {
        "@id": "https://nextlevel.example/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nextlevel.example/#voice-agent-service",
      name: "Standard anti-perte Next Level",
      provider: {
        "@id": "https://nextlevel.example/#organization"
      },
      areaServed: "France",
      serviceType: "Agent vocal IA et système de qualification d'appels",
      audience: {
        "@type": "Audience",
        audienceType: "TPE, PME, artisans, commerces locaux, agences et indépendants"
      },
      description: pageDescription,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR"
        }
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Est-ce adapté à une petite entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui si chaque appel a une valeur commerciale. Le bon calcul est la valeur des opportunités perdues quand personne ne répond."
      }
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si la demande est complexe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'agent sort du scénario proprement : transfert, prise de message enrichie, ou création d'une tâche de rappel avec le résumé de l'appel."
      }
    }
  ]
};

const canonicalUrl = "https://nextlevel.example/agents-vocaux";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08111f" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/voice-dashboard.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <main>
        <HeroSection />
        <WorkflowSection />
        <VoiceShowcase />
        <UseCasesSection />
        <RoiSection />
        <OfferStackSection />
        <FaqSection />
        <AuditSection />
      </main>
      <footer className="border-t border-mist/10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-black tracking-tight text-mist">VoiceCaptur</span>
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-xs font-semibold italic text-transparent">by Next Level</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                L&apos;agent vocal qui décroche, qualifie et remplit votre agenda.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mist/50">Navigation</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li><a href="#systeme" className="transition hover:text-mist">Le système</a></li>
                <li><a href="#cas" className="transition hover:text-mist">Cas concrets</a></li>
                <li><a href="#roi" className="transition hover:text-mist">ROI</a></li>
                <li><a href="#faq" className="transition hover:text-mist">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mist/50">Contact</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li><a href="#audit" className="transition hover:text-lime">Voir une démo</a></li>
                <li><a href="mailto:contact@nextlevel.fr" className="transition hover:text-mist">contact@nextlevel.fr</a></li>
              </ul>
            </div>

            {/* Légal */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mist/50">Légal</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li><a href="#" className="transition hover:text-mist">Mentions légales</a></li>
                <li><a href="#" className="transition hover:text-mist">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-mist/10 pt-5 text-center text-xs text-muted">
            © {new Date().getFullYear()} VoiceCaptur — Tous droits réservés. made by{" "}
            <a
              href="https://nextlevel-agency.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block h-[1.2em] overflow-hidden align-baseline ml-1 translate-y-[3px]"
            >
              <span className="inline-block font-bold text-muted transition-transform duration-500 group-hover:-translate-y-full">
                Next Level
              </span>
              <span className="absolute left-0 top-full inline-block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-bold text-transparent transition-transform duration-500 group-hover:-translate-y-full">
                Next Level
              </span>
            </a>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
