"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Lang = "en" | "fr"

type Content = typeof en

const en = {
  langName: "EN",
  nav: {
    how: "How it works",
    security: "Security",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Protect my loved ones",
  },
  hero: {
    eyebrow: "Digital estate, handled with care",
    title: "Pass the Relais, not the chaos.",
    subtitle:
      "The day you're no longer here, the people you trust can access, close, or transfer your digital accounts — securely, and exactly as you decided.",
    primary: "Protect my loved ones",
    secondary: "See how it works",
    note: "Free to start. No card needed for your trial.",
    cardTitle: "The handoff",
    cardCaption: "A clean pass — continuity, not an ending.",
  },
  pillars: {
    title: "Built on four promises",
    items: [
      {
        title: "Continuity",
        body: "Your people are never locked out or left guessing.",
      },
      {
        title: "Control",
        body: "You decide, account by account, well in advance.",
      },
      {
        title: "Absolute confidentiality",
        body: "Zero-knowledge — not even Relais can read your secrets.",
      },
      {
        title: "Autonomy",
        body: "The relay keeps running even if Relais disappears.",
      },
    ],
  },
  problem: {
    eyebrow: "The chaos",
    title: "What happens to your digital life when you're gone?",
    body: "Today, the answer is usually chaos. Phones stay locked. Subscriptions keep charging for years. Photos, messages, and important accounts become unreachable. And the people you love are left guessing — grieving and locked out at the same time.",
    items: [
      { title: "Locked out", body: "Accounts freeze the moment you can't sign in." },
      { title: "Silent bleed", body: "Subscriptions keep charging long after you're gone." },
      { title: "Lost forever", body: "Photos, files and memories become unreachable." },
      { title: "Bureaucracy", body: "Relatives fight paperwork instead of grieving in peace." },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Set it up once. Relais does the rest.",
    steps: [
      {
        num: "01",
        title: "Register your accounts",
        body: "List what matters — email, social, banking, subscriptions — with the access and instructions your people will need, and how urgent each one is: right away, within thirty days, or at their discretion.",
      },
      {
        num: "02",
        title: "Choose your trusted contacts",
        body: "Name the people who'll carry out your wishes. Each one is verified by secret questions, so no one else can step in.",
      },
      {
        num: "03",
        title: "Activate the relay",
        body: "Relais checks in with you from time to time. As long as you respond, nothing happens. If you stop, your encrypted instructions reach your contacts — automatically.",
      },
    ],
  },
  security: {
    eyebrow: "Trust & security",
    title: "Your secrets stay yours. Not even we can read them.",
    body: "Your information is encrypted on your own device before it ever reaches us. We only store data we have no way to open — that's what zero-knowledge means. And the relay runs on infrastructure independent of our own servers, so it keeps working even if Relais the company ever disappears.",
    points: [
      {
        title: "Encrypted on your device",
        body: "Your data is locked before it ever leaves your phone. Relais only ever stores what it cannot open.",
      },
      {
        title: "Released only when you decide",
        body: "Nothing is shared while you're here and responding. You set the conditions; Relais simply respects them.",
      },
      {
        title: "Works even if Relais disappears",
        body: "The handoff doesn't depend on our company staying in business. It runs on its own — your plan outlives us.",
      },
    ],
    more: "More for the technically curious",
    moreBody:
      "We're preparing a detailed write-up of our encryption model and autonomous-switch architecture for those who want to verify every claim. Coming soon.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Start free. Stay protected for less than the chaos costs.",
    body: "Create your account and try Relais free. When you're ready, one simple annual subscription keeps everything in place. Pay by mobile money or card.",
    trial: {
      name: "Free trial",
      price: "Free",
      period: "to start",
      features: [
        "Create your account in minutes",
        "Register your first accounts",
        "Add two trusted contacts",
        "No card required to begin",
      ],
      cta: "Start free",
    },
    premium: {
      tag: "Most chosen",
      name: "Premium",
      price: "—",
      period: "/ year",
      priceNote: "Annual price announced soon",
      features: [
        "Unlimited accounts & instructions",
        "Up to five trusted contacts",
        "The autonomous relay switch",
        "Priority support",
      ],
      cta: "Protect my loved ones",
    },
    pay: "Pay by mobile money (MoMo) or card.",
    reassure: "Less than the chaos you're avoiding.",
  },
  credibility: {
    eyebrow: "Why we built Relais",
    title: "Built by people who take your trust seriously.",
    body: "Relais began with a simple, painful realization: when someone we cared about passed, their digital life became a locked door. We built Relais so that no family has to choose between grieving and fighting for access — and so that everyone can hand things over with dignity.",
    quotes: [
      {
        quote:
          "I set it up in an afternoon. For the first time, I feel calm about what happens to my accounts.",
        name: "Adjoua K.",
        role: "Scenario — a member",
      },
      {
        quote:
          "I was named as a trusted contact. When the time came, I knew exactly what to do — no chaos.",
        name: "Hervé M.",
        role: "Scenario — a trusted contact",
      },
      {
        quote:
          "I scrutinized the security model. Zero-knowledge and an independent switch — they got the hard parts right.",
        name: "Rodrigue T.",
        role: "Scenario — an early adopter",
      },
    ],
    stats: [
      { value: "Zero-knowledge", label: "We can never read your data" },
      { value: "Autonomous", label: "Works even if Relais disappears" },
      { value: "Mobile-first", label: "MoMo & card payments" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Your questions, answered plainly.",
    items: [
      {
        q: "What happens if Relais shuts down?",
        a: "Your plan keeps working. The handoff runs independently of our servers, so it doesn't rely on Relais still being around.",
      },
      {
        q: "Who can access my data, and when?",
        a: "Only the trusted contacts you name, only once your conditions are met, and only after they pass your secret questions. Never before.",
      },
      {
        q: "Is my data legally protected?",
        a: "Yes. You consent to the secure custody of your encrypted data, handled to data-protection and cybersecurity standards.",
      },
      {
        q: "What if I lose my phone or my PIN?",
        a: "Your 12 recovery words restore everything on a new phone — your vault, your contacts, your plan. Keep them safe: because not even Relais can read your data, no one can rebuild your account without them.",
      },
    ],
  },
  finalCta: {
    title: "Pass the Relais, not the chaos.",
    subtitle:
      "Take back control of your digital life — in a few minutes, for the people who matter.",
    primary: "Protect my loved ones",
    note: "Free account · Free trial · MoMo & card",
  },
  footer: {
    tagline: "Pass the Relais, not the chaos.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    links: {
      how: "How it works",
      security: "Security",
      pricing: "Pricing",
      faq: "FAQ",
      about: "Our story",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    rights: "All rights reserved.",
  },
}

const fr: Content = {
  langName: "FR",
  nav: {
    how: "Comment ça marche",
    security: "Sécurité",
    pricing: "Tarifs",
    faq: "FAQ",
    cta: "Protéger mes proches",
  },
  hero: {
    eyebrow: "Votre vie numérique, gérée avec soin",
    title: "Passe le relais, pas le chaos.",
    subtitle:
      "Le jour où vous ne serez plus là, les personnes en qui vous avez confiance pourront accéder à vos comptes numériques, les fermer ou les transmettre — en toute sécurité, selon vos volontés.",
    primary: "Protéger mes proches",
    secondary: "Voir comment ça marche",
    note: "Gratuit pour commencer. Aucune carte requise pour l'essai.",
    cardTitle: "Le passage de relais",
    cardCaption: "Un passage net — la continuité, pas une fin.",
  },
  pillars: {
    title: "Fondé sur quatre promesses",
    items: [
      {
        title: "Continuité",
        body: "Vos proches ne sont jamais bloqués ni laissés dans le flou.",
      },
      {
        title: "Contrôle",
        body: "Vous décidez, compte par compte, bien à l'avance.",
      },
      {
        title: "Confidentialité absolue",
        body: "Zero-knowledge — même Relais ne peut pas lire vos secrets.",
      },
      {
        title: "Autonomie",
        body: "Le relais continue de fonctionner même si Relais disparaît.",
      },
    ],
  },
  problem: {
    eyebrow: "Le chaos",
    title: "Que deviennent vos comptes numériques après vous ?",
    body: "Aujourd'hui, la réponse est souvent le chaos. Les téléphones restent verrouillés. Les abonnements continuent de prélever pendant des années. Photos, messages et comptes importants deviennent inaccessibles. Et vos proches restent dans le flou — en deuil et bloqués à la fois.",
    items: [
      { title: "Tout est bloqué", body: "Les comptes se figent dès que la connexion échoue." },
      { title: "Fuite silencieuse", body: "Les abonnements continuent de prélever après votre départ." },
      { title: "Perdu à jamais", body: "Photos, fichiers et souvenirs deviennent inaccessibles." },
      { title: "Bureaucratie", body: "Vos proches luttent contre la paperasse au lieu de faire leur deuil." },
    ],
  },
  how: {
    eyebrow: "Comment ça marche",
    title: "Configurez une fois. Relais s'occupe du reste.",
    steps: [
      {
        num: "01",
        title: "Enregistrez vos comptes",
        body: "Listez ce qui compte — e-mail, réseaux sociaux, banque, abonnements — avec les accès et les consignes dont vos proches auront besoin, et l'urgence de chacun : tout de suite, sous trente jours, ou à leur discrétion.",
      },
      {
        num: "02",
        title: "Choisissez vos personnes de confiance",
        body: "Désignez celles qui exécuteront vos volontés. Chacune est vérifiée par des questions secrètes : personne d'autre ne peut intervenir.",
      },
      {
        num: "03",
        title: "Activez le relais",
        body: "Relais prend de vos nouvelles régulièrement. Tant que vous répondez, rien ne se passe. Si vous ne répondez plus, vos instructions chiffrées parviennent à vos contacts — automatiquement.",
      },
    ],
  },
  security: {
    eyebrow: "Confiance & sécurité",
    title: "Vos secrets restent les vôtres. Même nous ne pouvons pas les lire.",
    body: "Vos informations sont chiffrées sur votre propre appareil avant même de nous parvenir. Nous ne stockons que des données que nous sommes incapables d'ouvrir — c'est le principe du zero-knowledge. Et le relais fonctionne sur une infrastructure indépendante de nos serveurs : il continue même si l'entreprise Relais venait à disparaître.",
    points: [
      {
        title: "Chiffré sur votre appareil",
        body: "Vos données sont verrouillées avant même de quitter votre téléphone. Relais ne conserve que ce qu'il ne peut pas ouvrir.",
      },
      {
        title: "Libéré uniquement quand vous le décidez",
        body: "Rien n'est partagé tant que vous êtes là et que vous répondez. Vous fixez les conditions ; Relais ne fait que les respecter.",
      },
      {
        title: "Fonctionne même si Relais disparaît",
        body: "La transmission ne dépend pas de la survie de notre entreprise. Elle fonctionne d'elle-même — votre plan nous survit.",
      },
    ],
    more: "Pour les plus curieux techniquement",
    moreBody:
      "Nous préparons une présentation détaillée de notre modèle de chiffrement et de l'architecture du déclencheur autonome, pour qui veut vérifier chaque affirmation. Bientôt disponible.",
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "Commencez gratuitement. Restez protégé pour moins cher que le chaos.",
    body: "Créez votre compte et essayez Relais gratuitement. Quand vous êtes prêt, un simple abonnement annuel garde tout en place. Payez par mobile money ou par carte.",
    trial: {
      name: "Essai gratuit",
      price: "Gratuit",
      period: "pour commencer",
      features: [
        "Créez votre compte en quelques minutes",
        "Enregistrez vos premiers comptes",
        "Ajoutez deux personnes de confiance",
        "Aucune carte requise pour débuter",
      ],
      cta: "Commencer gratuitement",
    },
    premium: {
      tag: "Le plus choisi",
      name: "Premium",
      price: "—",
      period: "/ an",
      priceNote: "Tarif annuel annoncé bientôt",
      features: [
        "Comptes & instructions illimités",
        "Jusqu'à cinq personnes de confiance",
        "Le déclencheur de relais autonome",
        "Support prioritaire",
      ],
      cta: "Protéger mes proches",
    },
    pay: "Payez par mobile money (MoMo) ou carte.",
    reassure: "Moins que le chaos que vous évitez.",
  },
  credibility: {
    eyebrow: "Pourquoi nous avons créé Relais",
    title: "Conçu par des gens qui prennent votre confiance au sérieux.",
    body: "Relais est né d'un constat simple et douloureux : au décès d'un proche, sa vie numérique devenait une porte close. Nous avons créé Relais pour qu'aucune famille n'ait à choisir entre faire son deuil et se battre pour un accès — et pour que chacun puisse transmettre avec dignité.",
    quotes: [
      {
        quote:
          "Je l'ai configuré en un après-midi. Pour la première fois, je suis serein quant à mes comptes.",
        name: "Adjoua K.",
        role: "Scénario — un membre",
      },
      {
        quote:
          "J'ai été désigné comme personne de confiance. Le moment venu, je savais exactement quoi faire — aucun chaos.",
        name: "Hervé M.",
        role: "Scénario — une personne de confiance",
      },
      {
        quote:
          "J'ai scruté le modèle de sécurité. Zero-knowledge et déclencheur indépendant — l'essentiel est bien fait.",
        name: "Rodrigue T.",
        role: "Scénario — un adopteur précoce",
      },
    ],
    stats: [
      { value: "Zero-knowledge", label: "Nous ne pouvons jamais lire vos données" },
      { value: "Autonome", label: "Fonctionne même si Relais disparaît" },
      { value: "Mobile d'abord", label: "Paiements MoMo & carte" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vos questions, des réponses claires.",
    items: [
      {
        q: "Que se passe-t-il si Relais ferme ?",
        a: "Votre plan continue de fonctionner. La transmission est indépendante de nos serveurs : elle ne dépend pas de l'existence de Relais.",
      },
      {
        q: "Qui peut accéder à mes données, et quand ?",
        a: "Uniquement les personnes de confiance que vous désignez, seulement une fois vos conditions remplies, et après avoir répondu à vos questions secrètes. Jamais avant.",
      },
      {
        q: "Mes données sont-elles protégées légalement ?",
        a: "Oui. Vous consentez à la conservation sécurisée de vos données chiffrées, traitées selon les normes de protection des données et de cybersécurité.",
      },
      {
        q: "Et si je perds mon téléphone ou mon PIN ?",
        a: "Vos 12 mots de récupération restaurent tout sur un nouveau téléphone — le coffre, vos contacts, votre plan. Gardez-les précieusement : comme même Relais ne peut pas lire vos données, personne ne peut reconstituer votre compte sans eux.",
      },
    ],
  },
  finalCta: {
    title: "Passe le relais, pas le chaos.",
    subtitle:
      "Reprenez la main sur votre vie numérique — en quelques minutes, pour ceux qui comptent.",
    primary: "Protéger mes proches",
    note: "Compte gratuit · Essai gratuit · MoMo & carte",
  },
  footer: {
    tagline: "Passe le relais, pas le chaos.",
    product: "Produit",
    company: "Entreprise",
    legal: "Légal",
    links: {
      how: "Comment ça marche",
      security: "Sécurité",
      pricing: "Tarifs",
      faq: "FAQ",
      about: "Notre histoire",
      contact: "Contact",
      privacy: "Confidentialité",
      terms: "Conditions",
    },
    rights: "Tous droits réservés.",
  },
}

const dictionaries: Record<Lang, Content> = { en, fr }

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Français par défaut (Cameroun d'abord) ; l'anglais si le navigateur le demande.
  const [lang, setLangState] = useState<Lang>("fr")

  useEffect(() => {
    const stored = window.localStorage.getItem("relais-lang") as Lang | null
    if (stored === "en" || stored === "fr") {
      setLangState(stored)
      return
    }
    const browser = navigator.language?.toLowerCase() ?? ""
    setLangState(browser.startsWith("en") ? "en" : "fr")
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem("relais-lang", next)
  }

  const toggle = () => setLang(lang === "en" ? "fr" : "en")

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: dictionaries[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
