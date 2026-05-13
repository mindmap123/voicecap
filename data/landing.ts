export const useCases = [
  {
    sector: "Artisans & services",
    pain: "Vous êtes sur un chantier, personne ne décroche.",
    workflow: "L'agent répond, note le besoin et vous envoie la fiche prête à rappeler.",
    metric: "+60 demandes traitées/mois sans décrocher une seule fois"
  },
  {
    sector: "Libéraux",
    pain: "En consultation, personne ne décroche.",
    workflow: "L'agent filtre, rassure et réserve un créneau.",
    metric: "Agenda rempli dès 8h sans secrétaire"
  },
  {
    sector: "Immobilier",
    pain: "L'acheteur veut une réponse maintenant, pas demain.",
    workflow: "L'agent qualifie bien, budget, dispo et déclenche la visite.",
    metric: "Réponse immédiate = avantage concurrentiel"
  },
  {
    sector: "Coachs & formateurs",
    pain: "Vos leads refroidissent si personne ne rappelle vite.",
    workflow: "L'agent qualifie et place le prospect dans votre pipeline.",
    metric: "Suivi rapide = budget acquisition protégé"
  }
];

export const workflowSteps = [
  {
    title: "Décrocher",
    text: "L'agent répond avec votre nom, votre ton et une mention claire d'assistance automatisée."
  },
  {
    title: "Comprendre",
    text: "Il identifie la demande, l'urgence, le contexte et les informations utiles à votre équipe."
  },
  {
    title: "Agir",
    text: "Il prend un rendez-vous, transfère si nécessaire ou déclenche la bonne suite."
  },
  {
    title: "Tracer",
    text: "Vous recevez le résumé, le score du lead et la prochaine action dans votre outil."
  }
];

export const marketGaps = [
  {
    common: "Un agent vocal 24/7",
    nextLevel: "Un standard anti-perte relié à vos vrais suivis commerciaux"
  },
  {
    common: "Un script générique",
    nextLevel: "Un scénario métier écrit autour de vos appels réels"
  },
  {
    common: "Un résumé après appel",
    nextLevel: "Un lead scoré, routé, relançable et mesuré"
  }
];

export const lossPoints = [
  {
    title: "Ça sonne pendant que vous produisez",
    text: "Chantier, rendez-vous, consultation, livraison. Le prospect chaud arrive au pire moment."
  },
  {
    title: "Le message vocal ne suffit pas",
    text: "Il manque le besoin, l'urgence, le budget, la zone, la disponibilité, la prochaine action."
  },
  {
    title: "Le rappel arrive trop tard",
    text: "Le prospect a déjà comparé, réservé ailleurs ou oublié pourquoi il vous appelait."
  },
  {
    title: "Personne ne mesure la fuite",
    text: "Sans tableau clair, les appels perdus restent une intuition au lieu d'un chiffre."
  }
];

export const offerTiers = [
  {
    name: "Audit anti-perte",
    timeline: "30 min",
    description: "On estime vos appels perdus, vos scénarios prioritaires et la valeur récupérable.",
    cta: "Point d'entrée"
  },
  {
    name: "Pilote vocal",
    timeline: "1 scénario",
    description: "Un agent sur un cas précis : qualification, RDV, transfert ou rappel enrichi.",
    cta: "Preuve rapide"
  },
  {
    name: "Système complet",
    timeline: "Multi-scénarios",
    description: "Téléphonie, agenda, CRM, reporting, amélioration continue et suivi des conversions.",
    cta: "Machine à leads"
  }
];

export const smsExamples = [
  {
    title: "Confirmation prospect",
    recipient: "Prospect",
    messages: [
      "Bonjour Lucas, votre demande de devis chauffage a bien été transmise à Atelier Martin.",
      "Un rappel est prévu jeudi à 10h30. En cas d'urgence, répondez URGENT à ce SMS."
    ]
  },
  {
    title: "Alerte équipe",
    recipient: "Équipe",
    messages: [
      "Lead chaud : dépannage chaudière, Lyon 6, budget validé, disponible demain matin.",
      "Résumé + transcript ajoutés dans votre planning. Statut : à rappeler avant 12h."
    ]
  },
  {
    title: "Relance douce",
    recipient: "Prospect",
    messages: [
      "Bonjour Sarah, suite à votre appel d'hier, voulez-vous confirmer le créneau vendredi 14h ?",
      "Répondez OUI pour confirmer ou proposez un autre moment."
    ]
  }
];

export const voiceAgents = [
  {
    name: "Nora",
    role: "Accueil & qualification",
    tone: "Calme, clair, rassurant",
    job: "Décroche, comprend la demande, filtre l'urgence et crée une fiche lead propre.",
    status: "En ligne"
  },
  {
    name: "Elias",
    role: "Rendez-vous & agenda",
    tone: "Direct, organisé, professionnel",
    job: "Propose un créneau, confirme par SMS et ajoute les notes utiles dans l'agenda.",
    status: "Agenda connecté"
  },
  {
    name: "Maïa",
    role: "Relance & récupération",
    tone: "Chaleureux, bref, commercial",
    job: "Rappelle les formulaires froids, réactive les devis et signale les prospects chauds.",
    status: "Relance active"
  }
];

export const callScript = [
  {
    speaker: "Agent",
    line: "Bonjour, vous êtes bien chez Atelier Martin. Je suis l'assistant automatique. Je peux prendre votre demande et prévenir l'équipe."
  },
  {
    speaker: "Prospect",
    line: "Bonjour, j'ai une chaudière en panne depuis ce matin. Est-ce que quelqu'un peut passer rapidement ?"
  },
  {
    speaker: "Agent",
    line: "Oui. Je vais noter l'urgence. Dans quelle ville êtes-vous, et avez-vous déjà un code erreur affiché ?"
  },
  {
    speaker: "Sortie système",
    line: "Lead urgent, Lyon 6, chauffage, rappel avant 12h, résumé envoyé à l'équipe."
  }
];

export const faqs = [
  {
    question: "Mes clients sauront-ils qu'ils parlent à une IA ?",
    answer: "Oui, le message d'accueil doit être clair. L'objectif n'est pas de tromper, mais de répondre vite, proprement, et de transférer dès que la demande dépasse le scénario prévu."
  },
  {
    question: "Est-ce que mon numéro actuel change ?",
    answer: "Non dans la plupart des cas. On peut rediriger une ligne existante ou utiliser un numéro dédié selon votre contexte téléphonique."
  },
  {
    question: "Combien de temps faut-il pour lancer un premier agent ?",
    answer: "Un pilote simple peut être cadré rapidement quand l'offre, les horaires, les questions de qualification et l'agenda sont prêts."
  },
  {
    question: "Que se passe-t-il si la demande est complexe ?",
    answer: "L'agent sort du scénario proprement : transfert, prise de message enrichie, ou création d'une tâche de rappel avec le résumé de l'appel."
  },
  {
    question: "Est-ce adapté à une petite entreprise ?",
    answer: "Oui si chaque appel a une valeur commerciale. Le bon calcul n'est pas le volume seul, mais la valeur des opportunités que vous perdez quand personne ne répond."
  }
];

export const proofPoints = [
  "Scénario écrit pour votre métier",
  "Agenda, email, Notion, votre planning ou CRM",
  "Résumé structuré après chaque appel",
  "Pilotage simple des appels récupérés"
];
