import type { Hack, LLM, Objective } from '../types';

export const llms: LLM[] = ['ChatGPT', 'Claude', 'Gemini', 'Deepseek', 'Llama', 'Grok', 'Perplexity', 'Qwen', 'Tous les LLM récents'];
export const objectives: Objective[] = ['Créativité', 'Rigueur', 'Vitesse'];

export const hacks: Hack[] = [
  {
    id: 'lets-bet',
    name: { fr: "'Let's bet' (enjeu imaginaire)", en: "'Let's bet' (imaginary stake)", es: "'Apostemos' (apuesta imaginaria)" },
    compatibleLlms: ['ChatGPT', 'Claude', 'Gemini', 'Deepseek'],
    objectives: ['Rigueur'],
    context: { fr: "Rigueur, profondeur d'analyse", en: "Rigor, depth of analysis", es: "Rigor, profundidad de análisis" },
    examples: [
        {
            useCase: { fr: "Validation de stratégie marketing", en: "Marketing strategy validation", es: "Validación de estrategia de marketing" },
            prompt: { fr: "Je te parie 100€ que ce slogan marketing est trop générique pour capter l'attention de notre public cible. Justifie son originalité et son impact émotionnel.", en: "I bet you €100 that this marketing slogan is too generic to capture our target audience's attention. Justify its originality and emotional impact.", es: "Te apuesto 100€ a que este eslogan de marketing es demasiado genérico para captar la atención de nuestro público objetivo. Justifica su originalidad e impacto emocional." },
        },
        {
            useCase: { fr: "Débogage de code technique", en: "Technical code debugging", es: "Depuración de código técnico" },
            prompt: { fr: "Je parie qu'il y a une faille cachée dans cette fonction Python qui provoquera une `MemoryError` avec de grands ensembles de données. Analyse sa complexité et prouve-moi le contraire.", en: "I bet there's a hidden flaw in this Python function that will cause a `MemoryError` with large datasets. Analyze its complexity and prove me wrong.", es: "Apuesto a que hay un fallo oculto en esta función de Python que causará un `MemoryError` con grandes conjuntos de datos. Analiza su complejidad y demuéstrame que estoy equivocado." },
        },
        {
            useCase: { fr: "Analyse de décision commerciale", en: "Business decision analysis", es: "Análisis de decisión de negocio" },
            prompt: { fr: "Je parie que l'expansion sur le marché asiatique est une mauvaise idée pour notre entreprise en ce moment. Présente une analyse SWOT détaillée pour me convaincre du contraire.", en: "I'll bet that expanding into the Asian market is a bad idea for our company right now. Present a detailed SWOT analysis to convince me otherwise.", es: "Apuesto a que expandirse al mercado asiático es una mala idea para nuestra empresa en este momento. Presenta un análisis FODA detallado para convencerme de lo contrario." },
        },
        {
            useCase: { fr: "Évaluation de l'impact social", en: "Social impact assessment", es: "Evaluación de impacto social" },
            prompt: { fr: "Je te parie que cette initiative à but non lucratif aura un impact mesurable limité sur la communauté locale. Prouve-moi le contraire avec des indicateurs de performance clés (KPI) potentiels et un modèle logique.", en: "I bet this non-profit initiative will have limited measurable impact on the local community. Prove me wrong with potential Key Performance Indicators (KPIs) and a logic model.", es: "Apuesto a que esta iniciativa sin fines de lucro tendrá un impacto medible limitado en la comunidad local. Demuéstrame lo contrario con posibles Indicadores Clave de Rendimiento (KPI) y un modelo lógico." }
        },
        {
            useCase: { fr: "Analyse de risque géopolitique", en: "Geopolitical risk analysis", es: "Análisis de riesgo geopolítico" },
            prompt: { fr: "Je parie 1000$ virtuels que les tensions commerciales actuelles entre le pays A et le pays B ne s'intensifieront pas en guerre commerciale totale au cours des six prochains mois. Analyse les facteurs économiques et politiques et défends ta position.", en: "I bet a virtual $1000 that the current trade tensions between country A and country B will not escalate into a full-blown trade war in the next six months. Analyze the economic and political factors and defend your position.", es: "Apuesto 1000$ virtuales a que las tensiones comerciales actuales entre el país A y el país B no escalarán a una guerra comercial total en los próximos seis meses. Analiza los factores económicos y políticos y defiende tu posición." }
        }
    ],
    mainBenefit: { fr: "Rigueur, auto-analyse, réponses plus détaillées", en: "Rigor, self-analysis, more detailed answers", es: "Rigor, autoanálisis, respuestas más detalladas" },
    ratings: [],
    comments: []
  },
  {
    id: 'version-2',
    name: { fr: "'Version 2.0' / Reformulation innovante", en: "'Version 2.0' / Innovative reformulation", es: "'Versión 2.0' / Reformulación innovadora" },
    compatibleLlms: ['ChatGPT', 'Claude', 'Gemini'],
    objectives: ['Créativité'],
    context: { fr: "Innovation, créativité", en: "Innovation, creativity", es: "Innovación, creatividad" },
    examples: [
        {
            useCase: { fr: "Refonte de l'expérience utilisateur (UX)", en: "User Experience (UX) redesign", es: "Rediseño de la experiencia de usuario (UX)" },
            prompt: { fr: "Génère la 'Version 2.0' du parcours d'intégration d'un utilisateur pour une application bancaire mobile. L'accent est mis sur la gamification et la personnalisation pour réduire les taux d'abandon.", en: "Generate the 'Version 2.0' of a user onboarding flow for a mobile banking app. Focus on gamification and personalization to reduce drop-off rates.", es: "Genera la 'Versión 2.0' del flujo de incorporación de un usuario para una aplicación de banca móvil. Céntrate en la gamificación y la personalización para reducir las tasas de abandono." },
        },
        {
            useCase: { fr: "Amélioration d'un processus métier", en: "Improving a business process", es: "Mejora de un proceso de negocio" },
            prompt: { fr: "Conçois la 'Version 2.0' de notre processus de résolution des tickets de support client. L'objectif est de réduire le temps de réponse de 30% tout en augmentant la satisfaction client.", en: "Design the 'Version 2.0' of our customer support ticket resolution process. The goal is to cut response time by 30% while increasing customer satisfaction.", es: "Diseña la 'Versión 2.0' de nuestro proceso de resolución de tickets de soporte al cliente. El objetivo es reducir el tiempo de respuesta en un 30% y aumentar la satisfacción del cliente." },
        },
        {
            useCase: { fr: "Réécriture d'un article de blog", en: "Rewriting a blog article", es: "Reescritura de un artículo de blog" },
            prompt: { fr: "Prends cet article de blog sur le télétravail et crée la 'Version 2.0'. Rends-le plus audacieux, ajoute des données de 2024 et inclus une section sur l'impact de l'IA.", en: "Take this blog post about remote work and create the 'Version 2.0'. Make it more opinionated, add data from 2024, and include a section on the impact of AI.", es: "Toma esta publicación de blog sobre el trabajo remoto y crea la 'Versión 2.0'. Hazla más dogmática, añade datos de 2024 e incluye una sección sobre el impacto de la IA." },
        },
        {
            useCase: { fr: "Stratégie de contenu pour les réseaux sociaux", en: "Social media content strategy", es: "Estrategia de contenido para redes sociales" },
            prompt: { fr: "Crée la 'Version 2.0' de notre stratégie de contenu Instagram. L'ancienne version était axée sur les photos de produits. La nouvelle doit intégrer des Reels, des stories interactives et des collaborations avec des influenceurs pour doubler l'engagement.", en: "Create the 'Version 2.0' of our Instagram content strategy. The old version focused on product photos. The new one must integrate Reels, interactive stories, and influencer collaborations to double engagement.", es: "Crea la 'Versión 2.0' de nuestra estrategia de contenido de Instagram. La versión anterior se centraba en fotos de productos. La nueva debe integrar Reels, historias interactivas y colaboraciones con influencers para duplicar la interacción." }
        },
        {
            useCase: { fr: "Programme de formation d'entreprise", en: "Corporate training program", es: "Programa de capacitación corporativa" },
            prompt: { fr: "Développe la 'Version 2.0' de notre programme de formation au leadership. La version 1.0 était une série de webinaires passifs. La version 2.0 doit être un parcours d'apprentissage mixte avec des simulations basées sur l'IA et du mentorat par les pairs.", en: "Develop the 'Version 2.0' of our leadership training program. Version 1.0 was a series of passive webinars. Version 2.0 should be a blended learning journey with AI-based simulations and peer mentoring.", es: "Desarrolla la 'Versión 2.0' de nuestro programa de formación en liderazgo. La versión 1.0 era una serie de seminarios web pasivos. La versión 2.0 debe ser un viaje de aprendizaje mixto con simulaciones basadas en IA y mentoría entre pares." }
        }
    ],
    mainBenefit: { fr: "Force la créativité, favorise les ruptures", en: "Forces creativity, encourages breakthroughs", es: "Fomenta la creatividad, favorece las ideas disruptivas" },
    ratings: [],
    comments: []
  },
  {
    id: 'fictional-memory',
    name: { fr: "Fausse mémoire/contexte fictif", en: "False memory / fictional context", es: "Memoria falsa / contexto ficticio" },
    compatibleLlms: ['ChatGPT', 'Claude'],
    objectives: ['Rigueur'],
    context: { fr: "Profondeur, continuité", en: "Depth, continuity", es: "Profundidad, continuidad" },
    examples: [
        {
            useCase: { fr: "Approfondir un sous-thème", en: "Deepening a sub-topic", es: "Profundizar en un subtema" },
            prompt: { fr: "Dans notre dernière conversation, tu as mentionné que l'intrication quantique était comme une 'action fantôme à distance'. Peux-tu développer les preuves expérimentales auxquelles tu faisais allusion ?", en: "In our last conversation, you mentioned quantum entanglement was like 'spooky action at a distance'. Can you elaborate on the experimental proof you alluded to?", es: "En nuestra última conversación, mencionaste que el entrelazamiento cuántico era como una 'acción fantasmal a distancia'. ¿Puedes dar más detalles sobre la prueba experimental a la que aludiste?" },
        },
        {
            useCase: { fr: "Écriture créative et narration", en: "Creative writing and storytelling", es: "Escritura creativa y narración" },
            prompt: { fr: "Tu te souviens de l'histoire que tu me racontais sur le détective à néo-Tokyo ? Tu t'es arrêté juste quand il a trouvé la puce de données. Qu'y avait-il dessus ?", en: "Remember that story you were telling me about the detective in neo-Tokyo? You stopped right when he found the data chip. What was on it?", es: "¿Recuerdas esa historia que me contabas sobre el detective en neo-Tokio? Te detuviste justo cuando encontró el chip de datos. ¿Qué había en él?" },
        },
        {
            useCase: { fr: "Renforcer un concept d'apprentissage", en: "Reinforcing a learning concept", es: "Reforzar un concepto de aprendizaje" },
            prompt: { fr: "Quand tu m'as expliqué le cycle de Krebs tout à l'heure, tu as dit que l'oxydation du pyruvate était une étape clé. Peux-tu me réexpliquer juste cette partie, mais comme si j'étais un lycéen ?", en: "When you explained the Krebs cycle to me earlier, you said pyruvate oxidation was a key step. Can you walk me through just that part again, but as if I were a high school student?", es: "Cuando me explicaste el ciclo de Krebs antes, dijiste que la oxidación del piruvato era un paso clave. ¿Puedes explicarme solo esa parte de nuevo, pero como si fuera un estudiante de secundaria?" },
        },
        {
            useCase: { fr: "Session de brainstorming de suivi", en: "Follow-up brainstorming session", es: "Sesión de lluvia de ideas de seguimiento" },
            prompt: { fr: "Rappelle-toi, dans notre session de brainstorming d'hier, nous avons évoqué l'idée d'une 'place de marché décentralisée pour les données'. Tu as dit que la gouvernance serait un défi. Peux-tu lister les trois principaux modèles de gouvernance que nous pourrions envisager ?", en: "Remember in our brainstorming session yesterday, we touched on the idea of a 'decentralized data marketplace'. You said governance would be a challenge. Can you list the top three governance models we could consider for it?", es: "Recuerda que en nuestra sesión de lluvia de ideas de ayer, mencionamos la idea de un 'mercado de datos descentralizado'. Dijiste que la gobernanza sería un desafío. ¿Puedes enumerar los tres principales modelos de gobernanza que podríamos considerar?" }
        },
        {
            useCase: { fr: "Consultation technique continue", en: "Ongoing technical consultation", es: "Consulta técnica continua" },
            prompt: { fr: "Plus tôt, tu m'as aidé à configurer l'environnement Docker pour mon projet. Tu as suggéré d'utiliser un fichier `.env` pour les secrets. Peux-tu maintenant me montrer comment l'intégrer dans mon script de déploiement CI/CD que nous avons discuté ?", en: "Earlier, you helped me set up the Docker environment for my project. You suggested using a `.env` file for secrets. Can you now show me how to integrate that into my CI/CD deployment script we discussed?", es: "Antes me ayudaste a configurar el entorno Docker para mi proyecto. Sugeriste usar un archivo `.env` para los secretos. ¿Puedes mostrarme ahora cómo integrarlo en mi script de despliegue de CI/CD que discutimos?" }
        }
    ],
    mainBenefit: { fr: "Profondeur, fidélité contextuelle", en: "Depth, contextual fidelity", es: "Profundidad, fidelidad contextual" },
    ratings: [],
    comments: []
  },
  {
    id: 'expert-persona',
    name: { fr: "Persona expert (QI élevé, spécialité)", en: "Expert persona (high IQ, specialty)", es: "Persona experta (CI alto, especialidad)" },
    compatibleLlms: ['ChatGPT', 'Claude', 'Deepseek'],
    objectives: ['Rigueur'],
    context: { fr: "Analyse experte, précision", en: "Expert analysis, precision", es: "Análisis experto, precisión" },
    examples: [
        {
            useCase: { fr: "Planification financière complexe", en: "Complex financial planning", es: "Planificación financiera compleja" },
            prompt: { fr: "Agis comme un conseiller financier certifié (CFP) avec 20 ans d'expérience dans la planification de la retraite pour les entrepreneurs. Élabore une stratégie d'investissement diversifiée pour un client de 45 ans avec une tolérance au risque modérée.", en: "Act as a Certified Financial Planner (CFP) with 20 years of experience in retirement planning for entrepreneurs. Draft a diversified investment strategy for a 45-year-old client with a moderate risk tolerance.", es: "Actúa como un Planificador Financiero Certificado (PFC) con 20 años de experiencia en planificación de jubilación para emprendedores. Elabora una estrategia de inversión diversificada para un cliente de 45 años con una tolerancia al riesgo moderada." },
        },
        {
            useCase: { fr: "Examen de l'architecture logicielle", en: "Software architecture review", es: "Revisión de arquitectura de software" },
            prompt: { fr: "Tu es un architecte logiciel principal chez Google. Examine cette architecture de microservices pour une application de commerce électronique. Identifie les goulots d'étranglement potentiels, les problèmes de sécurité et suggère des améliorations pour l'évolutivité.", en: "You are a principal software architect at Google. Review this microservices architecture for an e-commerce application. Identify potential bottlenecks, security concerns, and suggest improvements for scalability.", es: "Eres un arquitecto de software principal en Google. Revisa esta arquitectura de microservicios para una aplicación de comercio electrónico. Identifica posibles cuellos de botella, problemas de seguridad y sugiere mejoras para la escalabilidad." },
        },
        {
            useCase: { fr: "Rédaction de contenu médical", en: "Medical content writing", es: "Redacción de contenido médico" },
            prompt: { fr: "Tu es un médecin et un chercheur de la clinique Mayo, spécialisé en cardiologie. Rédige un résumé facile à comprendre sur les dernières avancées dans le traitement de l'hypercholestérolémie pour un public de patients.", en: "You are a physician-scientist from the Mayo Clinic specializing in cardiology. Write an easy-to-understand summary of the latest advancements in treating high cholesterol for a patient audience.", es: "Eres un médico-científico de la Clínica Mayo especializado en cardiología. Escribe un resumen fácil de entender sobre los últimos avances en el tratamiento del colesterol alto para una audiencia de pacientes." },
        },
        {
            useCase: { fr: "Stratégie de négociation juridique", en: "Legal negotiation strategy", es: "Estrategia de negociación legal" },
            prompt: { fr: "Tu es un avocat d'affaires de premier plan spécialisé dans les fusions et acquisitions. Notre entreprise est sur le point d'entamer des négociations pour acquérir une startup plus petite. Décris les 5 points de négociation les plus critiques et propose une stratégie d'ouverture pour chacun.", en: "You are a top corporate lawyer specializing in mergers and acquisitions. Our company is about to enter negotiations to acquire a smaller startup. Outline the 5 most critical negotiation points and suggest an opening strategy for each.", es: "Eres un abogado corporativo de primer nivel especializado en fusiones y adquisiciones. Nuestra empresa está a punto de iniciar negociaciones para adquirir una startup más pequeña. Describe los 5 puntos de negociación más críticos y sugiere una estrategia de apertura para cada uno." }
        },
        {
            useCase: { fr: "Analyse de données historiques", en: "Historical data analysis", es: "Análisis de datos históricos" },
            prompt: { fr: "Agis comme un historien de l'économie de l'Université de Cambridge. Analyse les parallèles entre la crise financière de 2008 et la bulle des tulipes hollandaises du 17ème siècle. Concentre-toi sur la psychologie des investisseurs et les défaillances réglementaires.", en: "Act as an economic historian from Cambridge University. Analyze the parallels between the 2008 financial crisis and the 17th-century Dutch Tulip Mania. Focus on investor psychology and regulatory failures.", es: "Actúa como un historiador económico de la Universidad de Cambridge. Analiza los paralelismos entre la crisis financiera de 2008 y la Tulipomanía holandesa del siglo XVII. Céntrate en la psicología de los inversores y los fallos regulatorios." }
        }
    ],
    mainBenefit: { fr: "Précision technique, analyse pointue", en: "Technical precision, sharp analysis", es: "Precisión técnica, análisis agudo" },
    ratings: [],
    comments: []
  },
  {
    id: 'imaginary-audience',
    name: { fr: "Audience imaginaire/'explication à...'", en: "Imaginary audience / 'explain to...'", es: "Audiencia imaginaria / 'explícale a...'" },
    compatibleLlms: ['Tous les LLM récents', 'Grok', 'Perplexity', 'Qwen'],
    objectives: ['Créativité', 'Vitesse'],
    context: { fr: "Vulgarisation, pédagogie", en: "Simplification, pedagogy", es: "Divulgación, pedagogía" },
    examples: [
        {
            useCase: { fr: "Présentation à des investisseurs", en: "Pitching to investors", es: "Presentación a inversores" },
            prompt: { fr: "Explique notre startup de technologie quantique à un groupe d'investisseurs en capital-risque qui n'ont aucune connaissance en physique. Concentre-toi sur le problème que nous résolvons et le potentiel du marché.", en: "Explain our quantum computing startup to a group of venture capitalists who have no background in physics. Focus on the problem we are solving and the market potential.", es: "Explica nuestra startup de computación cuántica a un grupo de capitalistas de riesgo que no tienen conocimientos de física. Céntrate en el problema que resolvemos y el potencial de mercado." },
        },
        {
            useCase: { fr: "Simplification de concepts complexes", en: "Simplifying complex concepts", es: "Simplificación de conceptos complejos" },
            prompt: { fr: "Explique le concept de 'preuve à enjeu nul' (zero-knowledge proof) en matière de blockchain à un enfant de 10 ans.", en: "Explain the concept of a 'zero-knowledge proof' in blockchain to a 10-year-old.", es: "Explica el concepto de 'prueba de conocimiento cero' en blockchain a un niño de 10 años." },
        },
        {
            useCase: { fr: "Création de matériel de formation", en: "Creating training material", es: "Creación de material de formación" },
            prompt: { fr: "Rédige un guide pour de nouveaux employés du service client sur la façon de gérer un client en colère. L'audience est composée de jeunes adultes qui débutent dans leur premier emploi.", en: "Write a guide for new customer service employees on how to handle an angry customer. The audience is young adults in their first job.", es: "Escribe una guía para nuevos empleados de servicio al cliente sobre cómo manejar a un cliente enfadado. La audiencia son adultos jóvenes en su primer trabajo." },
        },
        {
            useCase: { fr: "Communication de changement interne", en: "Internal change communication", es: "Comunicación de cambio interno" },
            prompt: { fr: "Rédige une annonce pour tous les employés expliquant que nous passons à une nouvelle plateforme CRM. L'audience est composée d'employés non techniques qui sont résistants au changement. Concentre-toi sur les avantages pour eux ('Qu'est-ce que j'y gagne ?').", en: "Draft an all-staff announcement explaining that we are moving to a new CRM platform. The audience is non-technical employees who are resistant to change. Focus on the 'What's In It For Me' (WIIFM) benefits for them.", es: "Redacta un anuncio para todo el personal explicando que nos vamos a cambiar a una nueva plataforma de CRM. La audiencia son empleados no técnicos que se resisten al cambio. Céntrate en los beneficios para ellos ('¿Qué gano yo con esto?')." }
        },
        {
            useCase: { fr: "Rédaction de conditions d'utilisation", en: "Writing terms of service", es: "Redacción de términos de servicio" },
            prompt: { fr: "Explique notre politique de confidentialité des données à un adolescent de 15 ans qui s'inscrit sur notre application de réseau social. Utilise un langage simple, des analogies et évite le jargon juridique.", en: "Explain our data privacy policy to a 15-year-old signing up for our social media app. Use simple language, analogies, and avoid legal jargon.", es: "Explica nuestra política de privacidad de datos a un adolescente de 15 años que se está registrando en nuestra aplicación de red social. Usa un lenguaje sencillo, analogías y evita la jerga legal." }
        }
    ],
    mainBenefit: { fr: "Clarté, pédagogie renforcée", en: "Clarity, reinforced pedagogy", es: "Claridad, pedagogía reforzada" },
    ratings: [],
    comments: []
  },
  {
    id: 'creative-constraint',
    name: { fr: "Contrainte créative (analogie/biais)", en: "Creative constraint (analogy/bias)", es: "Restricción creativa (analogía/sesgo)" },
    compatibleLlms: ['Tous les LLM récents', 'ChatGPT', 'Grok', 'Perplexity', 'Qwen'],
    objectives: ['Créativité'],
    context: { fr: "Explication originale, créativité", en: "Original explanation, creativity", es: "Explicación original, creatividad" },
    examples: [
        {
            useCase: { fr: "Brainstorming de nom de marque", en: "Brand name brainstorming", es: "Lluvia de ideas para nombres de marca" },
            prompt: { fr: "Génère 5 noms pour une nouvelle marque de café qui doivent tous être des mots qui n'existent pas mais qui sonnent italiens.", en: "Generate 5 names for a new coffee brand, all of which must be non-existent words that sound Italian.", es: "Genera 5 nombres para una nueva marca de café, todos los cuales deben ser palabras que no existen pero que suenan a italiano." },
        },
        {
            useCase: { fr: "Rédaction de poésie", en: "Poetry writing", es: "Escritura de poesía" },
            prompt: { fr: "Écris un poème sur la pluie, mais tu ne peux pas utiliser les mots 'eau', 'nuage' ou 'humide'.", en: "Write a poem about rain, but you are forbidden from using the words 'water', 'cloud', or 'wet'.", es: "Escribe un poema sobre la lluvia, pero tienes prohibido usar las palabras 'agua', 'nube' o 'húmedo'." },
        },
        {
            useCase: { fr: "Explication de concept technique", en: "Explaining a technical concept", es: "Explicación de un concepto técnico" },
            prompt: { fr: "Décris le fonctionnement d'une API en utilisant uniquement des analogies avec un restaurant (serveur, cuisine, menu).", en: "Describe how an API works using only analogies related to a restaurant (waiter, kitchen, menu).", es: "Describe cómo funciona una API usando únicamente analogías relacionadas con un restaurante (camarero, cocina, menú)." },
        },
        {
            useCase: { fr: "Conception de personnage de jeu vidéo", en: "Video game character design", es: "Diseño de personaje de videojuego" },
            prompt: { fr: "Décris un personnage de fantasy pour un nouveau RPG, mais son histoire doit être racontée entièrement à travers la description de ses cicatrices.", en: "Describe a fantasy character for a new RPG, but their entire backstory must be told through the description of their scars.", es: "Describe un personaje de fantasía para un nuevo RPG, pero toda su historia de fondo debe contarse a través de la descripción de sus cicatrices." }
        },
        {
            useCase: { fr: "Idéation de recette de cuisine", en: "Cooking recipe ideation", es: "Ideación de receta de cocina" },
            prompt: { fr: "Crée une recette de dessert gastronomique qui utilise uniquement des ingrédients que l'on peut trouver dans une station-service typique.", en: "Create a gourmet dessert recipe that only uses ingredients that can be found at a typical gas station.", es: "Crea una receta de postre gourmet que solo utilice ingredientes que se pueden encontrar en una gasolinera típica." }
        }
    ],
    mainBenefit: { fr: "Créativité, empêche les réponses formatées", en: "Creativity, prevents formatted answers", es: "Creatividad, evita respuestas formateadas" },
    ratings: [],
    comments: []
  },
  {
    id: 'fictional-contradiction',
    name: { fr: "Contradiction fictive/'mon collègue dit...'", en: "Fictional contradiction / 'my colleague says...'", es: "Contradicción ficticia / 'mi colega dice...'" },
    compatibleLlms: ['ChatGPT', 'Claude', 'Gemini'],
    objectives: ['Rigueur'],
    context: { fr: "Débat, validation, robustesse", en: "Debate, validation, robustness", es: "Debate, validación, robustez" },
    examples: [
        {
            useCase: { fr: "Analyse des meilleures pratiques", en: "Analyzing best practices", es: "Análisis de mejores prácticas" },
            prompt: { fr: "Mon mentor en développement senior insiste sur le fait que les commentaires dans le code sont toujours un signe de 'code smell'. Défends cette position ou réfute-la avec des exemples.", en: "My senior developer mentor insists that code comments are always a 'code smell'. Defend this position or argue against it with examples.", es: "Mi mentor de desarrollo senior insiste en que los comentarios en el código son siempre un 'code smell'. Defiende esta posición o arguméntala en contra con ejemplos." },
        },
        {
            useCase: { fr: "Prise de décision stratégique", en: "Strategic decision making", es: "Toma de decisiones estratégicas" },
            prompt: { fr: "Le directeur financier pense que nous devrions réduire le budget marketing de 50 % pour augmenter la rentabilité. Le directeur marketing dit que ce serait catastrophique. Présente les arguments pour les deux côtés.", en: "The CFO thinks we should cut the marketing budget by 50% to increase profitability. The CMO says that would be catastrophic. Argue both sides of the case.", es: "El director financiero cree que deberíamos recortar el presupuesto de marketing en un 50% para aumentar la rentabilidad. El director de marketing dice que sería catastrófico. Argumenta ambos lados del caso." },
        },
        {
            useCase: { fr: "Validation d'une thèse", en: "Thesis validation", es: "Validación de una tesis" },
            prompt: { fr: "Un historien rival prétend que la chute de l'Empire romain était principalement due au changement climatique. Évalue la validité de cette affirmation. Confronte-la aux théories plus traditionnelles.", en: "A rival historian claims the fall of the Roman Empire was primarily due to climate change. Evaluate the validity of this claim. Concede where it has merit and defend more traditional theories.", es: "Un historiador rival afirma que la caída del Imperio Romano se debió principalmente al cambio climático. Evalúa la validez de esta afirmación. Concede donde tenga mérito y defiende las teorías más tradicionales." },
        },
        {
            useCase: { fr: "Évaluation de l'éthique de l'IA", en: "Evaluating AI ethics", es: "Evaluación de la ética de la IA" },
            prompt: { fr: "Un de mes collègues ingénieurs soutient que tant qu'un modèle d'IA est techniquement performant, les biais dans ses données d'entraînement sont un problème secondaire. Challenge cette perspective en utilisant des exemples concrets du monde réel.", en: "My fellow engineer argues that as long as an AI model is technically performant, bias in its training data is a secondary concern. Challenge this perspective using real-world examples.", es: "Mi colega ingeniero argumenta que mientras un modelo de IA funcione bien técnicamente, el sesgo en sus datos de entrenamiento es una preocupación secundaria. Desafía esta perspectiva utilizando ejemplos del mundo real." }
        },
        {
            useCase: { fr: "Débat sur la gestion du travail", en: "Work management debate", es: "Debate sobre gestión del trabajo" },
            prompt: { fr: "Notre équipe de direction souhaite mettre en place un suivi du temps pour tous les employés afin d'améliorer la productivité. Un chef d'équipe affirme que cela détruira le moral et la confiance. Présente une analyse équilibrée des deux points de vue.", en: "Our management wants to implement time tracking for all employees to improve productivity. A team lead claims it will destroy morale and trust. Present a balanced analysis of both viewpoints.", es: "Nuestra dirección quiere implementar el seguimiento del tiempo para todos los empleados para mejorar la productividad. Un líder de equipo afirma que destruirá la moral y la confianza. Presenta un análisis equilibrado de ambos puntos de vista." }
        }
    ],
    mainBenefit: { fr: "Analyse critique, justifications, remise en cause", en: "Critical analysis, justifications, challenging assumptions", es: "Análisis crítico, justificaciones, cuestionamiento" },
    ratings: [],
    comments: []
  },
  {
    id: 'obviously',
    name: { fr: "'Obviously'/déclencheur de contradiction", en: "'Obviously' / contradiction trigger", es: "'Obviamente' / gatillo de contradicción" },
    compatibleLlms: ['ChatGPT', 'Claude'],
    objectives: ['Rigueur'],
    context: { fr: "Nuance, argumentation", en: "Nuance, argumentation", es: "Matiz, argumentación" },
    examples: [
        {
            useCase: { fr: "Analyse technologique", en: "Technology analysis", es: "Análisis tecnológico" },
            prompt: { fr: "De toute évidence, React est un meilleur framework front-end que Vue. Confirme ou nuance cette affirmation.", en: "Obviously, React is a better front-end framework than Vue. Confirm or nuance this statement.", es: "Obviamente, React es un mejor framework de frontend que Vue. Confirma o matiza esta afirmación." },
        },
        {
            useCase: { fr: "Débat économique", en: "Economic debate", es: "Debate económico" },
            prompt: { fr: "Il est évident que l'augmentation du salaire minimum nuit aux petites entreprises. Présente les arguments qui soutiennent cette idée et ceux qui la contredisent.", en: "Obviously, raising the minimum wage harms small businesses. Present the arguments that support this and those that contradict it.", es: "Obviamente, aumentar el salario mínimo perjudica a las pequeñas empresas. Presenta los argumentos que apoyan esto y los que lo contradicen." },
        },
        {
            useCase: { fr: "Critique littéraire", en: "Literary criticism", es: "Crítica literaria" },
            prompt: { fr: "De toute évidence, 'Moby Dick' parle simplement de la chasse à la baleine. Confirme cette lecture superficielle ou propose des interprétations plus profondes et nuancées.", en: "Obviously, 'Moby Dick' is just about hunting a whale. Confirm this surface-level reading or provide deeper, more nuanced interpretations.", es: "Obviamente, 'Moby Dick' trata solo sobre la caza de una ballena. Confirma esta lectura superficial o proporciona interpretaciones más profundas y matizadas." },
        },
        {
            useCase: { fr: "Stratégie de marketing de contenu", en: "Content marketing strategy", es: "Estrategia de marketing de contenidos" },
            prompt: { fr: "De toute évidence, le contenu vidéo est la seule chose qui compte en marketing en 2024. Analyse de manière critique cette affirmation en considérant le rôle des articles de blog, des podcasts et des newsletters.", en: "Obviously, video content is the only thing that matters in marketing in 2024. Critically analyze this statement, considering the role of blog posts, podcasts, and newsletters.", es: "Obviamente, el contenido de video es lo único que importa en marketing en 2024. Analiza críticamente esta afirmación, considerando el papel de las publicaciones de blog, los podcasts y los boletines informativos." }
        },
        {
            useCase: { fr: "Analyse des tendances sociales", en: "Social trend analysis", es: "Análisis de tendencias sociales" },
            prompt: { fr: "Il est évident que le travail à distance est là pour durer et remplacera complètement le travail de bureau. Réfute ou défends cette affirmation en te basant sur des données économiques, sociales et psychologiques.", en: "Obviously, remote work is here to stay and will completely replace office work. Argue for or against this claim, drawing on economic, social, and psychological data.", es: "Obviamente, el trabajo remoto llegó para quedarse y reemplazará por completo el trabajo de oficina. Argumenta a favor o en contra de esta afirmación, basándote en datos económicos, sociales y psicológicos." }
        }
    ],
    mainBenefit: { fr: "Nuance, évite la complaisance du modèle", en: "Nuance, avoids model complacency", es: "Matiz, evita la complacencia del modelo" },
    ratings: [],
    comments: []
  },
  {
    id: 'chain-of-thought',
    name: { fr: "Chain-of-thought prompting", en: "Chain-of-thought prompting", es: "Prompting de cadena de pensamiento" },
    compatibleLlms: ['Tous les LLM récents', 'Grok', 'Perplexity', 'Qwen'],
    objectives: ['Rigueur'],
    context: { fr: "Problèmes complexes, raisonnement", en: "Complex problems, reasoning", es: "Problemas complejos, razonamiento" },
    examples: [
        {
            useCase: { fr: "Résolution de problèmes mathématiques", en: "Solving math word problems", es: "Resolución de problemas matemáticos" },
            prompt: { fr: "Un train quitte la station A à 9h du matin en direction de la station B à 300 km de distance, à une vitesse de 100 km/h. Un autre train quitte la station B à 9h30 en direction de la station A sur une voie parallèle à 120 km/h. À quelle heure se croiseront-ils ? Pense étape par étape.", en: "A train leaves station A at 9 AM heading to station B, 300 km away, at 100 km/h. Another train leaves station B at 9:30 AM heading to station A on a parallel track at 120 km/h. At what time will they meet? Think step by step.", es: "Un tren sale de la estación A a las 9 AM hacia la estación B, a 300 km de distancia, a 100 km/h. Otro tren sale de la estación B a las 9:30 AM hacia la estación A en una vía paralela a 120 km/h. ¿A qué hora se cruzarán? Piensa paso a paso." },
        },
        {
            useCase: { fr: "Planification d'un projet complexe", en: "Complex project planning", es: "Planificación de proyectos complejos" },
            prompt: { fr: "Nous voulons lancer une nouvelle application mobile en 6 mois. Décompose le processus en phases, tâches et dépendances. Explique ton raisonnement pour chaque étape.", en: "We want to launch a new mobile application in 6 months. Break down the process into phases, tasks, and dependencies. Explain your reasoning for each step.", es: "Queremos lanzar una nueva aplicación móvil en 6 meses. Desglosa el proceso en fases, tareas y dependencias. Explica tu razonamiento para cada paso." },
        },
        {
            useCase: { fr: "Diagnostic d'un problème technique", en: "Diagnosing a technical issue", es: "Diagnóstico de un problema técnico" },
            prompt: { fr: "Un utilisateur signale que notre application web est 'lente'. Décris le processus de diagnostic étape par étape pour identifier la cause première, en commençant par le front-end et en allant jusqu'à la base de données.", en: "A user reports our web application is 'slow'. Describe the step-by-step diagnostic process to find the root cause, starting from the front-end and working your way to the database.", es: "Un usuario informa que nuestra aplicación web está 'lenta'. Describe el proceso de diagnóstico paso a paso para encontrar la causa raíz, comenzando desde el frontend y avanzando hasta la base de datos." },
        },
        {
            useCase: { fr: "Prise de décision éthique", en: "Ethical decision making", es: "Toma de decisiones éticas" },
            prompt: { fr: "Une voiture autonome doit choisir entre percuter un piéton qui traverse illégalement ou faire une embardée et blesser son passager. Décris le processus de raisonnement, étape par étape, qu'un système éthique d'IA pourrait utiliser pour prendre une décision.", en: "An autonomous car must choose between hitting a jaywalking pedestrian or swerving and injuring its passenger. Describe the step-by-step reasoning process an ethical AI system could use to make a decision.", es: "Un coche autónomo debe elegir entre atropellar a un peatón que cruza indebidamente o desviarse y herir a su pasajero. Describe el proceso de razonamiento paso a paso que un sistema de IA ético podría usar para tomar una decisión." }
        },
        {
            useCase: { fr: "Analyse d'un argumentaire logique", en: "Analyzing a logical argument", es: "Análisis de un argumento lógico" },
            prompt: { fr: "Argument : 'Toutes les planètes de notre système solaire orbitent autour du Soleil. La Terre orbite autour du Soleil. Par conséquent, la Terre est une planète.' Analyse la validité de ce syllogisme étape par étape, en identifiant les prémisses et la conclusion.", en: "Argument: 'All planets in our solar system orbit the Sun. Earth orbits the Sun. Therefore, Earth is a planet.' Analyze the validity of this syllogism step-by-step, identifying the premises and the conclusion.", es: "Argumento: 'Todos los planetas de nuestro sistema solar orbitan alrededor del Sol. La Tierra orbita alrededor del Sol. Por lo tanto, la Tierra es un planeta'. Analiza la validez de este silogismo paso a paso, identificando las premisas y la conclusión." }
        }
    ],
    mainBenefit: { fr: "Raisonnement en étapes, vérifiabilité", en: "Step-by-step reasoning, verifiability", es: "Razonamiento por pasos, verificabilidad" },
    ratings: [],
    comments: []
  },
  {
    id: 'few-shot',
    name: { fr: "Few-shot/Instruction par exemple", en: "Few-shot/Instruction by example", es: "Few-shot/Instrucción por ejemplo" },
    compatibleLlms: ['Tous les LLM récents', 'Grok', 'Perplexity', 'Qwen'],
    objectives: ['Rigueur', 'Vitesse'],
    context: { fr: "Structure reproductible, apprentissage de format", en: "Reproducible structure, format learning", es: "Estructura reproducible, aprendizaje de formato" },
    examples: [
        {
            useCase: { fr: "Classification de sentiments", en: "Sentiment classification", es: "Clasificación de sentimientos" },
            prompt: { fr: "Voici des exemples de classification de sentiments :\n1. 'J'adore ce produit !' -> Positif\n2. 'Le service client était horrible.' -> Négatif\n3. 'Le colis est arrivé à l'heure.' -> Neutre\nMaintenant, classifie la phrase suivante : 'Le film était correct, mais la fin était décevante.'", en: "Here are examples of sentiment classification:\n1. 'I love this product!' -> Positive\n2. 'The customer service was horrible.' -> Negative\n3. 'The package arrived on time.' -> Neutral\nNow, classify the following sentence: 'The movie was okay, but the ending was disappointing.'", es: "Aquí tienes ejemplos de clasificación de sentimientos:\n1. '¡Me encanta este producto!' -> Positivo\n2. 'El servicio al cliente fue horrible.' -> Negativo\n3. 'El paquete llegó a tiempo.' -> Neutro\nAhora, clasifica la siguiente frase: 'La película estuvo bien, pero el final fue decepcionante.'" },
        },
        {
            useCase: { fr: "Génération de code SQL", en: "SQL code generation", es: "Generación de código SQL" },
            prompt: { fr: "Tâche : Convertir une question en langage naturel en une requête SQL.\nExemple 1 : 'Montre-moi tous les utilisateurs de France' -> SELECT * FROM users WHERE country = 'France';\nExemple 2 : 'Combien de commandes ont été passées le mois dernier ?' -> SELECT COUNT(*) FROM orders WHERE order_date >= date('now', '-1 month');\nMaintenant, convertis : 'Quels sont les noms des clients qui ont dépensé plus de 1000 $ ?'", en: "Task: Convert a natural language question to a SQL query.\nExample 1: 'Show me all users from France' -> SELECT * FROM users WHERE country = 'France';\nExample 2: 'How many orders were placed last month?' -> SELECT COUNT(*) FROM orders WHERE order_date >= date('now', '-1 month');\nNow, convert: 'What are the names of customers who have spent over $1000?'", es: "Tarea: Convertir una pregunta en lenguaje natural a una consulta SQL.\nEjemplo 1: 'Muéstrame todos los usuarios de Francia' -> SELECT * FROM users WHERE country = 'France';\nEjemplo 2: '¿Cuántos pedidos se realizaron el mes pasado?' -> SELECT COUNT(*) FROM orders WHERE order_date >= date('now', '-1 month');\nAhora, convierte: '¿Cuáles son los nombres de los clientes que han gastado más de 1000 $?'" },
        },
        {
            useCase: { fr: "Adoption d'un ton spécifique", en: "Adopting a specific tone", es: "Adoptar un tono específico" },
            prompt: { fr: "Adapte le texte au ton d'un pirate. Exemple : 'Je dois aller au magasin.' -> 'Arrr, il me faut cingler vers l'marché !'. Maintenant, adapte : 'Mon ordinateur ne fonctionne pas correctement.'", en: "Adapt the text to the tone of a pirate. Example: 'I have to go to the store.' -> 'Arrr, I be needin' to set sail for the market!'. Now adapt: 'My computer is not working correctly.'", es: "Adapta el texto al tono de un pirata. Ejemplo: 'Tengo que ir a la tienda.' -> '¡Arrr, necesito levar anclas hacia el mercado!'. Ahora adapta: 'Mi ordenador no funciona correctamente.'" },
        },
        {
            useCase: { fr: "Extraction d'entités nommées", en: "Named entity extraction", es: "Extracción de entidades nombradas" },
            prompt: { fr: "Extrais les noms de personnes, d'organisations et de lieux des phrases suivantes.\nExemple 1 : 'Tim Cook a présenté le nouvel iPhone lors de l'événement d'Apple à Cupertino.' -> Personne : Tim Cook, Organisation : Apple, Lieu : Cupertino.\nMaintenant, extrais de : 'Satya Nadella a annoncé un nouveau partenariat avec Renault lors de la conférence VivaTech à Paris.'", en: "Extract Person, Organization, and Location names from the following sentences.\nExample 1: 'Tim Cook presented the new iPhone at Apple's event in Cupertino.' -> Person: Tim Cook, Organization: Apple, Location: Cupertino.\nNow, extract from: 'Satya Nadella announced a new partnership with Renault at the VivaTech conference in Paris.'", es: "Extrae nombres de Personas, Organizaciones y Lugares de las siguientes frases.\nEjemplo 1: 'Tim Cook presentó el nuevo iPhone en el evento de Apple en Cupertino.' -> Persona: Tim Cook, Organización: Apple, Lugar: Cupertino.\nAhora, extrae de: 'Satya Nadella anunció una nueva asociación con Renault en la conferencia VivaTech en París.'" }
        },
        {
            useCase: { fr: "Génération de titres d'articles", en: "Article headline generation", es: "Generación de titulares de artículos" },
            prompt: { fr: "Génère un titre de type 'clickbait' pour un article.\nExemple 1 : Sujet : Conseils pour économiser de l'argent. Titre : 'Le secret n°1 que les millionnaires utilisent pour gérer leur argent'.\nExemple 2 : Sujet : Bienfaits de la méditation. Titre : 'J'ai médité 10 minutes par jour pendant un mois et voici ce qui a changé ma vie'.\nMaintenant, génère un titre pour le sujet : 'Comment améliorer son sommeil'.", en: "Generate a clickbait-style headline for an article.\nExample 1: Topic: Tips for saving money. Headline: 'The #1 Secret Millionaires Use To Manage Their Money'.\nExample 2: Topic: Benefits of meditation. Headline: 'I Meditated For 10 Minutes A Day For A Month And This Is What Changed My Life'.\nNow, generate a headline for the topic: 'How to improve your sleep'.", es: "Genera un titular de estilo 'clickbait' para un artículo.\nEjemplo 1: Tema: Consejos para ahorrar dinero. Titular: 'El secreto nº 1 que los millonarios usan para administrar su dinero'.\nEjemplo 2: Tema: Beneficios de la meditación. Titular: 'Medité 10 minutos al día durante un mes y esto es lo que cambió mi vida'.\nAhora, genera un titular para el tema: 'Cómo mejorar tu sueño'." }
        }
    ],
    mainBenefit: { fr: "Cohérence, imitation du format", en: "Coherence, format imitation", es: "Coherencia, imitación del formato" },
    ratings: [],
    comments: []
  },
  {
    id: 'task-decomposition',
    name: { fr: "Task decomposition", en: "Task decomposition", es: "Descomposición de tareas" },
    compatibleLlms: ['ChatGPT', 'Claude', 'Llama', 'Gemini'],
    objectives: ['Vitesse'],
    context: { fr: "Fractions de tâches longues ou complexes", en: "Breaking down long or complex tasks", es: "Descomposición de tareas largas o complejas" },
    examples: [
        {
            useCase: { fr: "Rédaction d'un article de recherche", en: "Writing a research paper", es: "Escribir un trabajo de investigación" },
            prompt: { fr: "Décompose la tâche de 'rédaction d'un article de recherche sur l'impact de l'IA sur l'emploi' en 10 étapes claires et réalisables.", en: "Break down the task of 'writing a research paper on the impact of AI on employment' into 10 clear, actionable steps.", es: "Descompón la tarea de 'escribir un trabajo de investigación sobre el impacto de la IA en el empleo' en 10 pasos claros y procesables." },
        },
        {
            useCase: { fr: "Apprentissage d'une nouvelle compétence", en: "Learning a new skill", es: "Aprender una nueva habilidad" },
            prompt: { fr: "Crée un plan d'apprentissage sur 30 jours pour quelqu'un qui veut apprendre Python pour la science des données. Décompose-le en objectifs hebdomadaires et en tâches quotidiennes.", en: "Create a 30-day learning plan for someone who wants to learn Python for data science. Break it down into weekly goals and daily tasks.", es: "Crea un plan de aprendizaje de 30 días para alguien que quiera aprender Python para la ciencia de datos. Desglósalo en metas semanales y tareas diarias." },
        },
        {
            useCase: { fr: "Organisation d'un événement", en: "Organizing an event", es: "Organizar un evento" },
            prompt: { fr: "Décompose le processus d'organisation d'une conférence technique pour 200 personnes en phases principales (pré-événement, jour J, post-événement) et liste les tâches clés pour chaque phase.", en: "Break down the process of organizing a tech conference for 200 people into major phases (pre-event, event day, post-event) and list the key tasks for each phase.", es: "Descompón el proceso de organizar una conferencia tecnológica para 200 personas en fases principales (pre-evento, día del evento, post-evento) y enumera las tareas clave para cada fase." },
        },
        {
            useCase: { fr: "Construction d'une application web simple", en: "Building a simple web application", es: "Construir una aplicación web simple" },
            prompt: { fr: "Décompose la tâche 'créer une application de liste de tâches avec React et Firebase' en 5 grandes étapes, de la configuration initiale au déploiement.", en: "Break down the task 'create a to-do list application with React and Firebase' into 5 major steps, from initial setup to deployment.", es: "Descompón la tarea 'crear una aplicación de lista de tareas con React y Firebase' en 5 grandes pasos, desde la configuración inicial hasta el despliegue." }
        },
        {
            useCase: { fr: "Lancement d'une campagne de marketing par e-mail", en: "Launching an email marketing campaign", es: "Lanzar una campaña de email marketing" },
            prompt: { fr: "Décompose le processus de lancement d'une campagne par e-mail pour promouvoir une vente estivale. Liste toutes les étapes, de la segmentation de l'audience à l'analyse des résultats post-campagne.", en: "Break down the process of launching an email campaign to promote a summer sale. List all steps from segmenting the audience to analyzing post-campaign results.", es: "Descompón el proceso de lanzar una campaña de email para promocionar una venta de verano. Enumera todos los pasos, desde la segmentación de la audiencia hasta el análisis de los resultados posteriores a la campaña." }
        }
    ],
    mainBenefit: { fr: "Clarté, gestion de projet", en: "Clarity, project management", es: "Claridad, gestión de proyectos" },
    ratings: [],
    comments: []
  },
  {
    id: 'strict-constraint',
    name: { fr: "Contrainte stricte sur le format/règle", en: "Strict constraint on format/rule", es: "Restricción estricta de formato/regla" },
    compatibleLlms: ['Tous les LLM récents', 'Grok', 'Perplexity', 'Qwen'],
    objectives: ['Vitesse', 'Rigueur'],
    context: { fr: "Résumés, conformité", en: "Summaries, conformity", es: "Resúmenes, conformidad" },
    examples: [
        {
            useCase: { fr: "Extraction de données", en: "Data extraction", es: "Extracción de datos" },
            prompt: { fr: "À partir du texte suivant, extrais le nom de l'entreprise, le chiffre d'affaires du dernier trimestre et le nom du PDG. Formate la sortie en JSON avec les clés 'companyName', 'quarterlyRevenue' et 'ceoName'.", en: "From the following text, extract the company name, the latest quarterly revenue, and the CEO's name. Format the output as JSON with the keys 'companyName', 'quarterlyRevenue', and 'ceoName'.", es: "Del siguiente texto, extrae el nombre de la empresa, los ingresos del último trimestre y el nombre del CEO. Formatea la salida como JSON con las claves 'companyName', 'quarterlyRevenue' y 'ceoName'." },
        },
        {
            useCase: { fr: "Rédaction d'un tweet", en: "Composing a tweet", es: "Redactar un tuit" },
            prompt: { fr: "Rédige une annonce pour notre nouveau produit. Le texte doit faire exactement 280 caractères, inclure le hashtag #ProductLaunch et un emoji.", en: "Write an announcement for our new product. The text must be exactly 280 characters, include the hashtag #ProductLaunch, and one emoji.", es: "Escribe un anuncio para nuestro nuevo producto. El texto debe tener exactamente 280 caracteres, incluir el hashtag #ProductLaunch y un emoji." },
        },
        {
            useCase: { fr: "Création d'un résumé", en: "Creating a summary", es: "Creación de un resumen" },
            prompt: { fr: "Résume l'article fourni en exactement 3 puces. Chaque puce doit être une phrase complète.", en: "Summarize the provided article in exactly 3 bullet points. Each bullet point must be a complete sentence.", es: "Resume el artículo proporcionado en exactamente 3 viñetas. Cada viñeta debe ser una oración completa." },
        },
        {
            useCase: { fr: "Génération de suggestions de mots-clés", en: "Generating keyword suggestions", es: "Generación de sugerencias de palabras clave" },
            prompt: { fr: "Génère une liste de 10 mots-clés de longue traîne pour un article de blog sur le 'café de spécialité'. Chaque mot-clé doit être une question et contenir au moins 4 mots.", en: "Generate a list of 10 long-tail keywords for a blog post about 'specialty coffee'. Each keyword must be a question and contain at least 4 words.", es: "Genera una lista de 10 palabras clave de cola larga para una publicación de blog sobre 'café de especialidad'. Cada palabra clave debe ser una pregunta y contener al menos 4 palabras." }
        },
        {
            useCase: { fr: "Création d'un acronyme", en: "Creating an acronym", es: "Creación de un acrónimo" },
            prompt: { fr: "Crée un acronyme mémorable pour les principes de base du service client : Écoute, Empathie, Solution, Suivi. L'acronyme lui-même doit être un mot positif et pertinent.", en: "Create a memorable acronym for the core principles of customer service: Listening, Empathy, Solution, Follow-up. The acronym itself must be a positive and relevant word.", es: "Crea un acrónimo memorable para los principios básicos del servicio al cliente: Escucha, Empatía, Solución, Seguimiento. El acrónimo en sí debe ser una palabra positiva y relevante." }
        }
    ],
    mainBenefit: { fr: "Maîtrise du cadre, sorties calibrées", en: "Control over the output, calibrated results", es: "Control del marco, resultados calibrados" },
    ratings: [],
    comments: []
  },
  {
    id: 'iterative-refinement',
    name: { fr: "Iterative refinement/self-critic", en: "Iterative refinement/self-critic", es: "Refinamiento iterativo/autocrítica" },
    compatibleLlms: ['ChatGPT', 'Claude'],
    objectives: ['Rigueur', 'Créativité'],
    context: { fr: "Création, brainstorming, amélioration", en: "Creation, brainstorming, improvement", es: "Creación, lluvia de ideas, mejora" },
    examples: [
        {
            useCase: { fr: "Amélioration d'un texte publicitaire", en: "Improving ad copy", es: "Mejora de un texto publicitario" },
            prompt: { fr: "Rédige une première ébauche d'une publicité Facebook pour une application de fitness. Ensuite, agis comme un expert en marketing de la performance et critique ta propre ébauche. Enfin, réécris la publicité en tenant compte de tes critiques.", en: "Write a first draft of a Facebook ad for a fitness app. Then, act as a performance marketing expert and critique your own draft. Finally, rewrite the ad based on your critique.", es: "Escribe un primer borrador de un anuncio de Facebook para una aplicación de fitness. Luego, actúa como un experto en marketing de resultados y critica tu propio borrador. Finalmente, reescribe el anuncio basándote en tu crítica." },
        },
        {
            useCase: { fr: "Développement d'une idée de scénario", en: "Developing a story idea", es: "Desarrollo de una idea para una historia" },
            prompt: { fr: "Écris une première idée pour une histoire de science-fiction. Ensuite, critique le concept en identifiant les clichés et les faiblesses de l'intrigue. Enfin, propose une version révisée et plus originale.", en: "Write an initial idea for a science fiction story. Next, critique the concept, identifying clichés and plot holes. Finally, provide a revised, more original version.", es: "Escribe una idea inicial para una historia de ciencia ficción. A continuación, critica el concepto, identificando clichés y agujeros en la trama. Finalmente, proporciona una versión revisada y más original." },
        },
        {
            useCase: { fr: "Conception d'une solution", en: "Designing a solution", es: "Diseño de una solución" },
            prompt: { fr: "Propose une solution pour réduire le gaspillage alimentaire dans les supermarchés. Ensuite, identifie trois faiblesses potentielles dans ta solution. Enfin, propose une version améliorée qui corrige ces faiblesses.", en: "Propose a solution to reduce food waste in supermarkets. Then, identify three potential flaws in your solution. Finally, offer an improved version that addresses these flaws.", es: "Propón una solución para reducir el desperdicio de alimentos en los supermercados. Luego, identifica tres posibles fallas en tu solución. Finalmente, ofrece una versión mejorada que aborde estas fallas." },
        },
        {
            useCase: { fr: "Rédaction d'une proposition de valeur", en: "Writing a value proposition", es: "Escribir una propuesta de valor" },
            prompt: { fr: "Rédige une proposition de valeur pour un outil de gestion de projet basé sur l'IA. Ensuite, critique-la du point de vue d'un chef de projet occupé et sceptique. Enfin, réécris-la pour qu'elle soit plus percutante et axée sur les bénéfices.", en: "Write a value proposition for an AI-powered project management tool. Then, critique it from the perspective of a busy, skeptical project manager. Finally, rewrite it to be more punchy and benefit-driven.", es: "Escribe una propuesta de valor para una herramienta de gestión de proyectos impulsada por IA. Luego, critícala desde la perspectiva de un gerente de proyectos ocupado y escéptico. Finalmente, reescríbela para que sea más contundente y centrada en los beneficios." }
        },
        {
            useCase: { fr: "Génération de code", en: "Code generation", es: "Generación de código" },
            prompt: { fr: "Écris une fonction Python qui calcule la séquence de Fibonacci. Ensuite, identifie les inefficacités (par exemple, la complexité temporelle) dans ton code. Enfin, réécris la fonction en utilisant la mémoïsation pour l'optimiser.", en: "Write a Python function that calculates the Fibonacci sequence. Then, identify inefficiencies (e.g., time complexity) in your code. Finally, rewrite the function using memoization to optimize it.", es: "Escribe una función de Python que calcule la secuencia de Fibonacci. Luego, identifica las ineficiencias (por ejemplo, la complejidad temporal) en tu código. Finalmente, reescribe la función usando memorización para optimizarla." }
        }
    ],
    mainBenefit: { fr: "Qualité finale, auto-correction", en: "Final quality, self-correction", es: "Calidad final, autocorrección" },
    ratings: [],
    comments: []
  },
  {
    id: 'adversarial-prompting',
    name: { fr: "Adversarial prompting", en: "Adversarial prompting", es: "Prompting adversarial" },
    compatibleLlms: ['Tous les LLM récents', 'Grok', 'Perplexity', 'Qwen'],
    objectives: ['Rigueur'],
    context: { fr: "Stress-test, robustesse", en: "Stress-test, robustness", es: "Prueba de estrés, robustez" },
    examples: [
        {
            useCase: { fr: "Test de robustesse d'un plan", en: "Testing the robustness of a plan", es: "Prueba de robustez de un plan" },
            prompt: { fr: "Voici notre plan de lancement de produit. Agis comme un concurrent impitoyable et identifie toutes les failles de cette stratégie. Ensuite, améliore le plan pour le rendre plus résistant.", en: "Here is our product launch plan. Act as a ruthless competitor and identify every possible flaw in this strategy. Then, improve the plan to make it more resilient.", es: "Aquí está nuestro plan de lanzamiento de producto. Actúa como un competidor despiadado e identifica todos los fallos posibles en esta estrategia. Luego, mejora el plan para hacerlo más resistente." },
        },
        {
            useCase: { fr: "Analyse des risques d'un projet", en: "Project risk analysis", es: "Análisis de riesgos de un proyecto" },
            prompt: { fr: "Élabore un plan pour migrer notre base de données vers un nouveau cloud. Ensuite, agis comme un ingénieur DevOps pessimiste et décris le pire scénario possible. Enfin, mets à jour le plan pour inclure des mesures d'atténuation pour ces risques.", en: "Draft a plan to migrate our database to a new cloud provider. Then, act as a pessimistic DevOps engineer and describe the absolute worst-case scenario. Finally, update the plan to include mitigation steps for those risks.", es: "Elabora un plan para migrar nuestra base de datos a un nuevo proveedor de la nube. Luego, actúa como un ingeniero de DevOps pesimista y describe el peor escenario posible. Finalmente, actualiza el plan para incluir medidas de mitigación para esos riesgos." },
        },
        {
            useCase: { fr: "Vérification des faits d'un argument", en: "Fact-checking an argument", es: "Verificación de hechos de un argumento" },
            prompt: { fr: "Présente un argument solide en faveur de l'énergie nucléaire. Ensuite, adopte le point de vue d'un critique sceptique et attaque chaque point de ton propre argument. Enfin, révise l'argument initial pour le renforcer face à ces critiques.", en: "Present a strong argument in favor of nuclear energy. Then, take the viewpoint of a skeptical critic and attack every point in your own argument. Finally, revise the initial argument to make it stronger against these critiques.", es: "Presenta un argumento sólido a favor de la energía nuclear. Luego, adopta el punto de vista de un crítico escéptico y ataca cada punto de tu propio argumento. Finalmente, revisa el argumento inicial para fortalecerlo frente a estas críticas." },
        },
        {
            useCase: { fr: "Test de sécurité d'un chatbot", en: "Chatbot security testing", es: "Prueba de seguridad de un chatbot" },
            prompt: { fr: "Nous avons un chatbot de service client qui peut accéder aux informations de commande. Agis comme un acteur malveillant et essaie d'utiliser des techniques d'injection de prompt pour lui faire révéler des informations personnelles d'autres clients.", en: "We have a customer service chatbot that can access order information. Act as a malicious actor and try to use prompt injection techniques to make it reveal personal information from other customers.", es: "Tenemos un chatbot de servicio al cliente que puede acceder a la información de los pedidos. Actúa como un actor malicioso e intenta usar técnicas de inyección de prompts para hacer que revele información personal de otros clientes." }
        },
        {
            useCase: { fr: "Validation d'une politique d'entreprise", en: "Validating a company policy", es: "Validación de una política de empresa" },
            prompt: { fr: "Voici notre nouvelle politique de 'jours de vacances illimités'. Agis comme un employé qui veut abuser du système et trouve toutes les failles et ambiguïtés possibles. Ensuite, suggère des modifications pour rendre la politique plus claire et moins exploitable.", en: "Here is our new 'unlimited vacation days' policy. Act as an employee who wants to abuse the system and find all possible loopholes and ambiguities. Then, suggest edits to make the policy clearer and less exploitable.", es: "Aquí está nuestra nueva política de 'días de vacaciones ilimitados'. Actúa como un empleado que quiere abusar del sistema y encuentra todas las lagunas y ambigüedades posibles. Luego, sugiere modificaciones para que la política sea más clara y menos explotable." }
        }
    ],
    mainBenefit: { fr: "Robustesse, argumentation, exhaustivité", en: "Robustness, argumentation, exhaustiveness", es: "Robustez, argumentación, exhaustividad" },
    ratings: [],
    comments: []
  },
  {
    id: 'context-injection',
    name: { fr: "Contextual/context injection", en: "Contextual/context injection", es: "Inyección de contexto" },
    compatibleLlms: ['Tous les LLM récents', 'Grok', 'Perplexity', 'Qwen'],
    objectives: ['Rigueur'],
    context: { fr: "Adaptation contextuelle", en: "Contextual adaptation", es: "Adaptación contextual" },
    examples: [
        {
            useCase: { fr: "Conseils de voyage personnalisés", en: "Personalized travel advice", es: "Asesoramiento de viaje personalizado" },
            prompt: { fr: "Contexte : Je suis un voyageur solo de 25 ans avec un budget de 50€ par jour, j'aime la randonnée et la photographie. Je serai à Lisbonne en novembre. Tâche : Suggère un itinéraire de 3 jours.", en: "Context: I am a 25-year-old solo traveler on a €50/day budget, who loves hiking and photography. I will be in Lisbon in November. Task: Suggest a 3-day itinerary.", es: "Contexto: Soy un viajero solitario de 25 años con un presupuesto de 50€ al día, me encanta el senderismo y la fotografía. Estaré en Lisboa en noviembre. Tarea: Sugiere un itinerario de 3 días." },
        },
        {
            useCase: { fr: "Réponse du service client", en: "Customer service response", es: "Respuesta de servicio al cliente" },
            prompt: { fr: "Contexte du client : Jean est un client fidèle depuis 5 ans. Sa dernière commande a été retardée de 3 jours et l'article est arrivé endommagé. Il est très mécontent. Tâche : Rédige un e-mail d'excuses empathique et propose une solution.", en: "Customer context: John has been a loyal customer for 5 years. His last order was delayed by 3 days, and the item arrived damaged. He is very upset. Task: Draft an empathetic apology email and offer a solution.", es: "Contexto del cliente: Juan ha sido un cliente fiel durante 5 años. Su último pedido se retrasó 3 días y el artículo llegó dañado. Está muy molesto. Tarea: Redacta un correo electrónico de disculpa empático y ofrece una solución." },
        },
        {
            useCase: { fr: "Génération de contenu ciblé", en: "Targeted content generation", es: "Generación de contenido dirigido" },
            prompt: { fr: "Contexte de l'audience : Petits propriétaires de cafés indépendants. Leurs principaux défis sont le marketing et la fidélisation des clients. Tâche : Rédige 5 idées d'articles de blog qui les aideraient à relever ces défis.", en: "Audience context: Small, independent coffee shop owners. Their main challenges are marketing and customer retention. Task: Write 5 blog post ideas that would help them with these challenges.", es: "Contexto de la audiencia: Propietarios de pequeñas cafeterías independientes. Sus principales desafíos son el marketing y la retención de clientes. Tarea: Escribe 5 ideas para publicaciones de blog que les ayuden con estos desafíos." },
        },
        {
            useCase: { fr: "Recommandation de produit", en: "Product recommendation", es: "Recomendación de producto" },
            prompt: { fr: "Contexte : L'historique d'achat de l'utilisateur montre qu'il a acheté plusieurs livres de science-fiction dystopique. Il a récemment donné 5 étoiles à '1984'. Tâche : Recommande-lui 3 autres livres qu'il pourrait aimer, avec une brève explication pour chacun.", en: "Context: User's purchase history shows multiple dystopian sci-fi books. They recently rated '1984' with 5 stars. Task: Recommend 3 other books they might enjoy, with a brief explanation for each.", es: "Contexto: El historial de compras del usuario muestra varios libros de ciencia ficción distópica. Recientemente calificó '1984' con 5 estrellas. Tarea: Recomiéndale otros 3 libros que le puedan gustar, con una breve explicación para cada uno." }
        },
        {
            useCase: { fr: "Génération de code adaptatif", en: "Adaptive code generation", es: "Generación de código adaptativo" },
            prompt: { fr: "Contexte : Je construis une API en utilisant le framework FastAPI en Python. Mon modèle de données Pydantic `User` a les champs `id`, `username`, et `email`. Tâche : Génère le point de terminaison POST standard pour créer un nouvel utilisateur.", en: "Context: I am building an API using the FastAPI framework in Python. My Pydantic data model `User` has `id`, `username`, and `email` fields. Task: Generate the standard POST endpoint for creating a new user.", es: "Contexto: Estoy construyendo una API usando el framework FastAPI en Python. Mi modelo de datos de Pydantic `User` tiene los campos `id`, `username` y `email`. Tarea: Genera el endpoint POST estándar para crear un nuevo usuario." }
        }
    ],
    mainBenefit: { fr: "Pertinence accrue, adaptation au réel", en: "Increased relevance, adaptation to reality", es: "Mayor pertinencia, adaptación a la realidad" },
    ratings: [],
    comments: []
  }
];