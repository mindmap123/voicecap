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
