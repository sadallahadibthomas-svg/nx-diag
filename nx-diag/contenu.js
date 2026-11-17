// =====================================================================
//  SAÏD 2.0 — le contenu du carnet (textes, questions, défis…)
//  Modifier ici, puis relancer : python fabriquer.py
// =====================================================================
const CARNET = {
  nom: "",
  surnom: "",
  titre: "SAÏD",
  version: "2.0",
  sousTitre: "Le carnet du bâtisseur",
  devise: "Maîtrise · Foi · Discipline",

  saisons: {
    1: { nom: "Saison 1", sous: "90 jours de fondations", mois: ["Les fondations", "La maîtrise", "L'élan"] },
    2: { nom: "Saison 2", sous: "90 jours pour durer",   mois: ["La constance", "L'expansion", "Version 2.0"] }
  },

  // ---------------------------------------------------------------
  piliers: [
    { id: "foi",      nom: "Foi",             phrase: "Mes 5 prières : mon ancrage. Quand tout bouge, elles restent." },
    { id: "corps",    nom: "Corps",           phrase: "Salle, repas, sommeil : mon corps est mon outil, je l'entretiens." },
    { id: "mental",   nom: "Mental",          phrase: "Maîtriser ma colère, penser positif, lâcher ce qui ne dépend pas de moi." },
    { id: "taf",      nom: "Taf",             phrase: "Mon travail : sérieux, rigueur, réputation. Je fais honneur à ma place." },
    { id: "boutique", nom: "Boutique",        phrase: "Ma boutique : mon empire. Chaque jour, une brique de plus." },
    { id: "maman",    nom: "Maman & famille", phrase: "Rendre ce qu'on m'a donné. Elle fait beaucoup pour moi : je fais beaucoup pour elle." },
    { id: "detente",  nom: "Détente",         phrase: "Sortir, rire, souffler avec les cousins : le repos fait partie du plan." }
  ],

  // ---------------------------------------------------------------
  citations: [
    { t: "Le fort n'est pas celui qui terrasse les gens. Le fort est celui qui se maîtrise quand il est en colère.", a: "Hadith — Bukhari, Muslim" },
    { t: "À côté de la difficulté, il y a certes une facilité.", a: "Coran 94:6" },
    { t: "Nous sommes ce que nous faisons de manière répétée. L'excellence n'est donc pas un acte, mais une habitude.", a: "Will Durant, d'après Aristote" },
    { t: "Allah n'impose à aucune âme une charge supérieure à sa capacité.", a: "Coran 2:286" },
    { t: "Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu'ils portent sur les choses.", a: "Épictète" },
    { t: "Les actes les plus aimés d'Allah sont les plus réguliers, même s'ils sont peu nombreux.", a: "Hadith — Bukhari, Muslim" },
    { t: "Petit à petit, l'oiseau fait son nid.", a: "Proverbe" },
    { t: "Ne te mets pas en colère.", a: "Hadith — Bukhari" },
    { t: "Nul n'est libre s'il n'est maître de lui-même.", a: "Épictète" },
    { t: "Et cherchez secours dans l'endurance et la prière.", a: "Coran 2:45" },
    { t: "Celui qui se vainc lui-même est fort.", a: "Lao-Tseu" },
    { t: "Celui qui croit en Allah et au Jour dernier, qu'il dise du bien ou qu'il se taise.", a: "Hadith — Bukhari, Muslim" },
    { t: "La colère est mauvaise conseillère.", a: "Proverbe" },
    { t: "Quiconque place sa confiance en Allah, Il lui suffit.", a: "Coran 65:3" },
    { t: "Si tu veux aller vite, marche seul. Si tu veux aller loin, marchons ensemble.", a: "Proverbe africain" },
    { t: "Le meilleur d'entre vous est celui qui est le meilleur envers sa famille.", a: "Hadith — Tirmidhi" },
    { t: "Tu as du pouvoir sur ton esprit, pas sur les événements. Prends-en conscience, et tu trouveras la force.", a: "Marc Aurèle" },
    { t: "N'est-ce point par l'évocation d'Allah que se tranquillisent les cœurs ?", a: "Coran 13:28" },
    { t: "Quand tu ne sais pas où tu vas, regarde d'où tu viens.", a: "Proverbe africain" },
    { t: "Ton sourire à ton frère est une aumône.", a: "Hadith — Tirmidhi" },
    { t: "Allah ne modifie point l'état d'un peuple tant qu'ils ne modifient pas ce qui est en eux-mêmes.", a: "Coran 13:11" },
    { t: "La patience est amère, mais son fruit est doux.", a: "Proverbe" },
    { t: "Souvenez-vous de Moi, Je Me souviendrai de vous.", a: "Coran 2:152" },
    { t: "Je ne cherche pas à être parfait. Je cherche à être meilleur que l'homme d'hier.", a: "2.0" }
  ],

  // ---------------------------------------------------------------
  //  91 questions : un thème par jour de la semaine (1 = lundi … 7 = dimanche)
  themes: {
    1: "Le bâtisseur", 2: "La maîtrise", 3: "La foi", 4: "Les miens",
    5: "La gratitude", 6: "Mon empire", 7: "Le miroir"
  },
  questions: {
    1: [
      "Quel est l'objectif le plus important de ma semaine, et pourquoi ?",
      "Qu'est-ce que je veux avoir construit dans 5 ans ?",
      "Quelle compétence, si je la maîtrisais, changerait ma vie ?",
      "Qu'est-ce que je repousse depuis trop longtemps ? Quel est le premier petit pas ?",
      "Quel homme est-ce que je veux être dans 5 ans ? Décris-le.",
      "Qu'est-ce qui me fait perdre le plus de temps, et comment le réduire ?",
      "Quelle est ma plus grande force ? Comment l'utiliser cette semaine ?",
      "Qui est un modèle pour moi, et qu'est-ce que je peux lui emprunter ?",
      "Si je n'avais peur de rien, qu'est-ce que je ferais cette semaine ?",
      "Mon terrain, ma future maison : à quoi ressemblera-t-elle ?",
      "Quelle habitude voudrais-je avoir installée dans 3 mois ?",
      "De quoi ai-je besoin pour atteindre mon prochain objectif (temps, argent, aide) ?",
      "Qu'est-ce que j'ai appris ces 3 derniers mois dont je suis fier ?"
    ],
    2: [
      "Qu'est-ce qui m'a énervé récemment ? Qu'est-ce que je ressentais vraiment derrière la colère ?",
      "Qu'est-ce que je veux tout de suite en ce moment ? Que se passe-t-il si j'attends une semaine ?",
      "Raconte une fois où tu as gardé ton calme. Qu'est-ce qui t'a aidé ?",
      "Qu'est-ce qui ne dépend pas de moi aujourd'hui ? Comment est-ce que je l'accepte ?",
      "Qu'est-ce qui m'a stressé aujourd'hui ? Quelle importance cela aura-t-il dans un an ?",
      "Quelle phrase vais-je me répéter la prochaine fois que la colère monte ?",
      "Est-ce que j'attends des autres qu'ils pensent et agissent comme moi ? Dans quelle situation ?",
      "Quand ai-je été pressé pour rien cette semaine ? Qu'est-ce que ça m'a coûté ?",
      "Qu'est-ce que je regrette d'avoir dit ou envoyé ? Qu'est-ce que j'en retiens ?",
      "Comment réagit mon corps quand je stresse ou que je m'énerve (mâchoire, poitrine, voix) ?",
      "Quelle situation de demain risque de m'énerver ? Comment vais-je la gérer ?",
      "Qu'est-ce que la patience m'a déjà apporté dans ma vie ?",
      "Si je revivais ma dernière grosse colère, qu'est-ce que je ferais différemment ?"
    ],
    3: [
      "Quelle prière m'a apporté le plus de paix aujourd'hui, et pourquoi ?",
      "De quoi est-ce que je veux demander pardon à Allah ?",
      "Quelle invocation je veux faire pour moi, pour Maman, pour ma famille ?",
      "Qu'est-ce qui m'aide à prier à l'heure ? Qu'est-ce qui m'en empêche ?",
      "Quel rappel ou quel verset m'a touché récemment ?",
      "De quoi suis-je reconnaissant envers Allah aujourd'hui ?",
      "Qu'est-ce que je dois remettre entre les mains d'Allah et arrêter de porter seul ?",
      "Quelle bonne action discrète puis-je faire cette semaine ?",
      "Comment je me sens les jours où je fais Fajr à l'heure ?",
      "Quel défaut de mon caractère je veux corriger, avec l'aide d'Allah ?",
      "Quel est le moment de la journée où je me sens le plus en paix ?",
      "Que veut dire la patience (sabr) pour moi en ce moment ?",
      "Si tout s'arrêtait demain, de quoi serais-je fier ? Qu'est-ce que je voudrais avoir réparé ?"
    ],
    4: [
      "Qu'est-ce que Maman a fait pour moi cette semaine ? Comment le lui rendre ?",
      "Quand ai-je dit merci à Maman pour la dernière fois ? Quand le refaire ?",
      "Qui m'a soutenu récemment ? Est-ce que je le lui ai montré ?",
      "Avec qui est-ce que je me sens vraiment moi-même ?",
      "Quelle relation me fait du bien ? Laquelle me tire vers le bas ?",
      "Ai-je vraiment écouté quelqu'un aujourd'hui, sans préparer ma réponse ?",
      "Qu'est-ce que j'attends des autres ? Est-il juste de l'attendre ?",
      "Quel cousin ou quel ami je n'ai pas vu depuis longtemps ? Quand le voir ?",
      "Qu'est-ce que je veux offrir ou faire pour Maman ce mois-ci ?",
      "Comment je réagis quand quelqu'un me dit non ? Comment j'aimerais réagir ?",
      "Qu'est-ce qui rend une personne digne de ma confiance ?",
      "Qu'est-ce que je donne aux autres sans rien attendre en retour ?",
      "Quelle personne de ma famille a besoin de moi en ce moment ?"
    ],
    5: [
      "Jumu'a : qu'est-ce que je retiens du sermon ou de la prière d'aujourd'hui ?",
      "Quelles sont les 5 choses simples qui me rendent heureux ?",
      "Quel moment de cette semaine je voudrais revivre ?",
      "Qu'est-ce que j'ai aujourd'hui que je n'avais pas il y a un an ?",
      "Qu'est-ce qui m'a fait rire cette semaine ?",
      "Qu'est-ce que j'aime dans mon travail ?",
      "Qu'est-ce que j'aime dans ma boutique ? Pourquoi je l'ai créée ?",
      "De quel progrès à la salle suis-je fier ?",
      "Quelle qualité est-ce que j'aime chez moi ?",
      "Qu'est-ce qui me donne de l'énergie ? Comment en avoir plus ?",
      "Quelle petite chose a rendu ma journée meilleure ?",
      "Pour qui suis-je reconnaissant, et pourquoi ?",
      "Qu'est-ce qui va bien dans ma vie en ce moment, même si tout n'est pas parfait ?"
    ],
    6: [
      "Quelle est la prochaine étape pour faire grandir ma boutique ?",
      "Qu'est-ce que mes clients aiment le plus chez moi ? Comment en faire plus ?",
      "Quel nouveau service ou produit pourrais-je proposer ?",
      "Combien est-ce que je veux économiser ce mois-ci ? Comment ?",
      "Quelle dépense inutile puis-je supprimer ?",
      "Quelle publication ou quelle promo vais-je faire cette semaine ?",
      "Qu'est-ce qui me prend trop de temps à la boutique ? Comment mieux l'organiser ?",
      "Que peut m'apporter mon nouveau projet dans 6 mois ?",
      "Quelle compétence (code, design, vente) je développe en ce moment ?",
      "Qu'est-ce que je veux avoir accompli pour la boutique d'ici la fin de l'année ?",
      "Quel client m'a appris quelque chose récemment ?",
      "Comment je garde mon calme avec un client difficile ?",
      "Mon projet de maison : quelle est la prochaine étape concrète ?"
    ],
    7: [
      "Qu'est-ce que je ressens vraiment ce soir ? Sans filtre.",
      "Quelle pensée a tourné en boucle dans ma tête cette semaine ? Qu'est-ce que je peux en faire ?",
      "Est-ce que je pense encore à ce qui me fait du mal ? Qu'est-ce que je fais pour avancer ?",
      "Qu'est-ce que j'ai lâché cette semaine (une pensée, une habitude, une rancune) ?",
      "Je me suis demandé ce que les gens pensent de moi : qu'est-ce que je sais vraiment, et qu'est-ce que j'imagine ?",
      "Qu'est-ce que je me pardonne cette semaine ?",
      "Quel remords revient le plus souvent ? Ai-je fait ce qui était possible pour réparer ?",
      "Qu'est-ce que l'homme que j'étais il y a un mois penserait de moi aujourd'hui ?",
      "Quelle pensée négative revient souvent ? Quelle pensée positive la remplace ?",
      "À qui dois-je des excuses ? Qu'est-ce qui m'empêche de les faire ?",
      "Mon week-end m'a-t-il reposé ? Qu'est-ce que je change ?",
      "Quelle leçon je retiens de cette semaine ?",
      "Qu'est-ce que je veux me dire pour la semaine prochaine ?"
    ]
  },

  // ---------------------------------------------------------------
  defis: [
    "Écrire dans ce carnet chaque soir, 7 jours sur 7.",
    "Zéro message, zéro vocal sous la colère : la règle des 24 heures.",
    "Les 5 prières à l'heure, toute la semaine.",
    "Couché avant minuit, téléphone loin du lit.",
    "3 vrais repas et un shaker par jour, même sans appétit.",
    "Un geste pour Maman chaque jour.",
    "Le rendez-vous des soucis : 15 minutes à heure fixe, pas une de plus.",
    "Écouter jusqu'au bout avant de répondre.",
    "Une vraie sortie avec les cousins ou les amis.",
    "Attendre 24 heures avant toute envie, tout achat, toute décision.",
    "Zéro rechute, 7 jours sur 7.",
    "Une action par jour pour faire grandir la boutique.",
    "Dire merci et pardon sans attendre.",
    // saison 2
    "Pas de réseaux sociaux après 22 h.",
    "Debout pour Fajr, 7 jours sur 7.",
    "Un compliment sincère par jour.",
    "Préparer mes repas de la semaine à l'avance.",
    "Mettre de côté une somme fixe chaque jour.",
    "Un moment avec Maman chaque jour, sans téléphone.",
    "Ne plus vérifier qui a vu mes statuts ni ce qu'on pense de moi.",
    "Finir un projet commencé (boutique, code ou maison).",
    "Battre un record à la salle.",
    "Dire non calmement, sans m'énerver.",
    "Une page de Coran ou un rappel chaque jour.",
    "Pardonner à quelqu'un, et me pardonner à moi-même.",
    "Écrire ma lettre à moi-même pour l'an prochain."
  ],

  // ---------------------------------------------------------------
  //  Semaine type (d'après ce qui a été raconté — modifiable au crayon)
  semaineType: [
    ["Lundi",    "Taf",          "15 h · Salle",               "Maison · Maman · carnet"],
    ["Mardi",    "Taf",          "15 h · Salle",               "Maison · Maman · carnet"],
    ["Mercredi", "Taf",          "Repos — récupération",       "Boutique ou projet · carnet"],
    ["Jeudi",    "Taf",          "15 h · Salle",               "Maison · Maman · carnet"],
    ["Vendredi", "Taf · Jumu'a",          "15 h · Salle",               "Maison · Maman · carnet"],
    ["Samedi",   "Boutique",              "Salle si séance ratée",      "Sortie · détente"],
    ["Dimanche", "Boutique (ou repos)",   "Repos · famille",            "Sortie ou repos · bilan"]
  ],
  salleJours: [1, 2, 4, 5],

  contrat: [
    "Je fais mes 5 prières, à l'heure autant que possible.",
    "Je vais à la salle 4 fois par semaine. Une séance ratée se rattrape le week-end.",
    "Je mange 3 vrais repas et une collation, même sans appétit.",
    "Je dors au moins 7 heures. Le téléphone dort loin du lit.",
    "Je n'envoie aucun message ni vocal sous la colère : j'attends 24 heures.",
    "Zéro rechute : aucune vieille habitude ne reprend ma vie.",
    "Je fais chaque jour un geste pour Maman.",
    "Je fais chaque jour un pas pour mon taf et pour la boutique.",
    "Je m'occupe : week-end prévu, sorties, cousins, projets. Je ne tourne pas en rond.",
    "Quand je veux quelque chose tout de suite, j'attends. Quand ma tête tourne, je trie : ce qui dépend de moi, je le fais ; le reste, je le confie à Allah.",
    "J'écris dans ce carnet chaque soir, honnêtement."
  ],

  quiz: [
    "Je garde mon calme quand les gens ne font pas ce que je veux.",
    "Je sais attendre, même quand je veux quelque chose tout de suite.",
    "Je ne stresse plus pour des petites choses.",
    "Je ne me demande plus sans arrêt ce que les gens pensent de moi.",
    "J'ai fait la paix avec mes erreurs passées.",
    "Je fais mes 5 prières chaque jour.",
    "Je dors au moins 7 heures.",
    "Je mange 3 vrais repas par jour.",
    "Je vais à la salle 4 fois par semaine.",
    "Je n'envoie plus de message ni de vocal sous la colère.",
    "Je passe du temps de qualité avec Maman.",
    "Je sais m'occuper quand je m'ennuie.",
    "Je suis fier de l'homme que je deviens."
  ],

  declencheurs: [
    "Quand les gens ne font pas ce que je veux",
    "Quand on ne me répond pas, qu'on m'ignore",
    "Quand je me sens rejeté ou pas important",
    "Quand on me manque de respect",
    "Quand les choses ne vont pas à mon rythme",
    "Quand je suis fatigué ou que j'ai faim",
    "Quand on me critique",
    "Quand je me sens impuissant",
    "Quand on me ment"
  ],
  signaux: ["Mâchoire serrée", "Chaleur au visage", "Cœur qui s'accélère", "Voix qui monte",
            "Poings serrés", "Envie de prendre le téléphone", "Envie de bouder, de partir"],
  cache: ["La peur de perdre", "Le sentiment de rejet", "La fatigue", "La tristesse",
          "La honte", "L'impuissance", "La jalousie"],

  antiEnnui: [
    ["Corps",    ["Séance de rattrapage à la salle", "Marche au bord du fleuve", "Foot avec les cousins", "100 pompes en séries", "Préparer mes repas protéinés"]],
    ["Esprit",   ["Lire 20 pages", "Avancer un module de code", "Un documentaire", "Écouter un rappel", "Apprendre une sourate"]],
    ["Boutique", ["Ranger et décorer la vitrine", "Publier 3 statuts", "Faire l'inventaire", "Appeler un ancien client", "Avancer sur mon projet studio"]],
    ["Projets",  ["Dessiner le plan de ma maison", "Chercher des idées déco", "Réparer un appareil", "Trier mes fichiers et mes disques"]],
    ["Les miens",["Passer chez les cousins", "Rendre visite à un oncle, une tante", "Faire les courses de Maman", "Inviter un ami à manger"]],
    ["Détente",  ["Un film du catalogue", "Une partie de jeu vidéo", "Manger dehors", "Dormir tôt : c'est aussi un choix"]]
  ],

  maman: [
    "Passer la voir, l'appeler, chaque jour",
    "Manger avec elle",
    "Faire ses courses",
    "L'accompagner (marché, visite, rendez-vous)",
    "Lui offrir un pagne, un parfum, un bijou",
    "Réparer quelque chose à la maison",
    "Lui glisser une enveloppe",
    "L'emmener au restaurant",
    "Faire une dou'a pour elle",
    "Lui dire merci, simplement"
  ],

  // ---------------------------------------------------------------
  //  La première page (saison 1) — écrite à partir de ce qui a été raconté.
  premierePage: [
    "Ma première page sur le téléphone.",
    "Écris ici, avec tes mots, pourquoi tu commences. Ou importe ta copie du PC (Réglages > Restaurer une copie)."
  ]
};
