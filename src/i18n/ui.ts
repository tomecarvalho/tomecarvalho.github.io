import type { LocaleKey } from "./config";

const en = {
  "nav.aboutMe": "About Me",
  "nav.projects": "Projects",

  "terms.softwareDeveloper": "Software Developer",
  "terms.portugal": "Portugal",
  "terms.universityCoursework": "University Coursework",
  "terms.year": "Year {year}",
  "terms.semesters.1": "1st Semester",
  "terms.semesters.2": "2nd Semester",

  "aboutMe.description.tomecarvalho":
    "I'm a computer science professional with a passion for exploring technologies that allow me to build clean solutions across the full stack: from robust back-end services to user-friendly interfaces, with DevOps practices and automation in mind to ensure reliability and efficiency.",

  "subjects.algorithmsAndDataStructures": "Algorithms and Data Structures",
  "subjects.networksAndServices": "Networks and Services",
  "subjects.operatingSystems": "Operating Systems",
  "subjects.probabilityMethodsForInformaticsEngineering":
    "Probability Methods for Informatics Engineering",
  "subjects.databases": "Databases",
  "subjects.distributedComputing": "Distributed Computing",
  "subjects.humanComputerInteraction": "Human-Computer Interaction",
  "subjects.advancedDatabases": "Advanced Databases",
  "subjects.introductionToSoftwareEngineering":
    "Introduction to Software Engineering",
  "subjects.informationAndOrganisationalSecurity":
    "Information and Organisational Security",
  "subjects.technologiesAndWebProgramming": "Technologies and Web Programming",
  "subjects.machineLearningTopics": "Machine Learning Topics",
  "subjects.projectInInformatics": "Project in Informatics",
  "subjects.professionalAndSocialAspectsOfComputerScience":
    "Professional and Social Aspects of Computer Science",
  "subjects.softwareTestingAndQualityControl":
    "Software Testing and Quality Control",

  "projects.generalisedWeightedJobSelectionProblem":
    "Generalised Weighted Job Selection Problem",
  "projects.sortingAlgorithms": "Sorting Algorithms",
  "projects.recursivelyDecodingANonInstantaneousBinaryCode":
    "Recursively Decoding a Non-instantaneous Binary Code",
  "projects.practicalClassesAndFinalProject":
    "Practical Classes and Final Project",
  "projects.bashLinuxProcessStatistics": "Bash: Linux Process Statistics",
  "projects.practicalClasses": "Practical Classes",
  "projects.tourSystem": "Tour System",
  "projects.loadBalancer": "Load Balancer",
  "projects.messageBroker": "Message Broker",
  "projects.chordDht": "CHORD (DHT)",
  "projects.distributedPasswordCracker": "Distributed Password Cracker",
  "projects.softcutsInvestigatingPerformanceAndUsageOfInputMethodsForSoftKeyboardHotkeys":
    "Softcuts - Investigating Performance and Usage of Input Methods for SoftKeyboardHotkeys",
  "projects.cookAndGo": "Cook and Go",
  "projects.netCafeWebApplicationForManagementOfAnInternetCafeFranchise":
    "NetCafe: Web application for management of an Internet Café franchise",
  "projects.weWereHacked": "We were Hacked",
  "projects.uapAuthentication": "UAP Authentication",
  "projects.vulnerableWebApp": "Vulnerable Web App",
  "projects.buyAndSellWebsite": "Buy & Sell Website",
  "projects.medicalInsuranceCostsForecastUsingLinearRegression":
    "Medical Insurance Costs Forecast using Linear Regression",
  "projects.faceRecognition": "Face Recognition",
  "projects.shopFloorCoLocatedCollaborativeTrainingUsingLargeDisplaysAndVirtualEnvironments":
    "Shop Floor Co-located Collaborative Training using Large Displays & Virtual Environments",
  "projects.analysisOfAnInternetServiceOrProductTwitter":
    "Analysis of an Internet Service or Product: Twitter",
  "projects.anatomyOfAWebConnectionABriefAnalysis":
    "Anatomy of a Web Connection: A Brief Analysis",
  "projects.analysisOfTheSignalProtocol": "Analysis of the Signal Protocol",
  "projects.digitalMarketplaceForLastMileDeliveries":
    "Digital Marketplace for Last-Mile Deliveries",

  "topics.c": "C",
  "topics.algorithms": "Algorithms",
  "topics.sorting": "Sorting",
  "topics.recursion": "Recursion",
  "topics.decoding": "Decoding",
  "topics.networks": "Networks",
  "topics.gns3": "GNS3",
  "topics.wireshark": "Wireshark",
  "topics.bash": "Bash",
  "topics.linux": "Linux",
  "topics.matlab": "MatLab",
  "topics.probabilities": "Probabilities",
  "topics.distributions": "Distributions",
  "topics.markovChains": "Markov chains",
  "topics.simulation": "Simulation",
  "topics.applicationsInCs": "Applications in CS",
  "topics.sql": "SQL",
  "topics.dbSchemes": "DB Schemes",
  "topics.normalization": "Normalization",
  "topics.ddl": "DDL",
  "topics.dml": "DML",
  "topics.python": "Python",
  "topics.sockets": "Sockets",
  "topics.selectors": "Selectors",
  "topics.pubSub": "Pub/Sub",
  "topics.chord": "Chord",
  "topics.p2p": "P2P",
  "topics.dht": "DHT",
  "topics.flask": "Flask",
  "topics.masterSlave": "Master/Slave",
  "topics.uiUx": "UI/UX",
  "topics.android": "Android",
  "topics.java": "Java",
  "topics.hci": "HCI",
  "topics.redis": "Redis",
  "topics.mongodb": "MongoDB",
  "topics.cassandra": "Cassandra",
  "topics.neo4j": "Neo4J",
  "topics.spring": "Spring",
  "topics.springBoot": "Spring Boot",
  "topics.rabbitmq": "RabbitMQ",
  "topics.docker": "Docker",
  "topics.javascript": "JavaScript",
  "topics.react": "React",
  "topics.cybersecurity": "Cybersecurity",
  "topics.cyberAttackAnalysis": "cyber-attack analysis",
  "topics.cryptography": "Cryptography",
  "topics.encryption": "Encryption",
  "topics.eChap": "E-CHAP",
  "topics.django": "Django",
  "topics.vulnerabilities": "Vulnerabilities",
  "topics.cwe": "CWE",
  "topics.drf": "DRF",
  "topics.angular": "Angular",
  "topics.jupyterNotebook": "Jupyter Notebook",
  "topics.ml": "ML",
  "topics.regression": "Regression",
  "topics.dataAnalysis": "Data Analysis",
  "topics.classification": "Classification",
  "topics.csharp": "C#",
  "topics.unity": "Unity",
  "topics.vr": "VR",
  "topics.steamvr": "SteamVR",
  "topics.writing": "Writing",
  "topics.analysis": "Analysis",
  "topics.socialImplications": "Social Implications",
  "topics.junit": "JUnit",
  "topics.selenium": "Selenium",
  "topics.cucumber": "Cucumber",
  "topics.sonarqube": "SonarQube",
};

type FullLocaleStrings = typeof en;

export type LocaleString = keyof FullLocaleStrings;

type PartialLocaleStrings = Partial<FullLocaleStrings>;

type NonDefaultLocaleKeys = Exclude<LocaleKey, "en">;

/**
 * `ui` requires all the locale strings for the default locale (English),
 * but not for the other locales.
 */
type Ui = {
  en: FullLocaleStrings;
} & Record<NonDefaultLocaleKeys, PartialLocaleStrings>;

const pt: PartialLocaleStrings = {
  "nav.aboutMe": "Sobre Mim",
  "nav.projects": "Projetos",

  "terms.softwareDeveloper": "Desenvolvedor de Software",
  "terms.portugal": "Portugal",
  "terms.universityCoursework": "Trabalhos Universitários",
  "terms.year": "{year}º Ano",
  "terms.semesters.1": "1º Semestre",
  "terms.semesters.2": "2º Semestre",

  "aboutMe.description.tomecarvalho":
    "Sou um profissional de engenharia informática com uma paixão por explorar tecnologias que me permitem construir soluções sólidas em toda a stack tecnológica: desde serviços de back-end robustos a interfaces intuitivas, tendo sempre em mente práticas de DevOps e automatização para garantir fiabilidade e eficiência.",

  "subjects.algorithmsAndDataStructures": "Algoritmos e Estruturas de Dados",
  "subjects.networksAndServices": "Redes e Serviços",
  "subjects.operatingSystems": "Sistemas Operativos",
  "subjects.probabilityMethodsForInformaticsEngineering":
    "Métodos Probabilísticos para Engenharia Informática",
  "subjects.databases": "Bases de Dados",
  "subjects.distributedComputing": "Computação Distribuída",
  "subjects.humanComputerInteraction": "Interação Humano-Computador",
  "subjects.advancedDatabases": "Complementos de Bases de Dados",
  "subjects.introductionToSoftwareEngineering":
    "Introdução à Engenharia de Software",
  "subjects.informationAndOrganisationalSecurity":
    "Segurança Informática e Nas Organizações",
  "subjects.technologiesAndWebProgramming": "Tecnologias e Programação Web",
  "subjects.machineLearningTopics": "Tópicos de Aprendizagem Automática",
  "subjects.projectInInformatics": "Projeto em Informática",
  "subjects.professionalAndSocialAspectsOfComputerScience":
    "Aspetos Profissionais e Sociais da Engenharia Informática",
  "subjects.softwareTestingAndQualityControl": "Teste e Qualidade de Software",

  "projects.generalisedWeightedJobSelectionProblem":
    "Problema Generalizado de Seleção de Trabalhos Ponderados",
  "projects.sortingAlgorithms": "Algoritmos de Ordenação",
  "projects.recursivelyDecodingANonInstantaneousBinaryCode":
    "Descodificação Recursiva de um Código Binário Não Instantâneo",
  "projects.practicalClassesAndFinalProject": "Aulas Práticas e Projeto Final",
  "projects.bashLinuxProcessStatistics":
    "Bash: Estatísticas de Processos Linux",
  "projects.practicalClasses": "Aulas Práticas",
  "projects.tourSystem": "Sistema de Tours",
  "projects.loadBalancer": "Balanceador de Carga",
  "projects.messageBroker": "Mediador de Mensagens",
  "projects.chordDht": "CHORD (DHT)",
  "projects.distributedPasswordCracker": "Quebra de Palavras-passe Distribuída",
  "projects.softcutsInvestigatingPerformanceAndUsageOfInputMethodsForSoftKeyboardHotkeys":
    "Softcuts - Investigação do Desempenho e Utilização de Métodos de Entrada para Atalhos de Teclado Virtual",
  "projects.cookAndGo": "Cook and Go",
  "projects.netCafeWebApplicationForManagementOfAnInternetCafeFranchise":
    "NetCafe: Aplicação web para gestão de uma franquia de cibercafé",
  "projects.weWereHacked": "Fomos Hacked",
  "projects.uapAuthentication": "Autenticação UAP",
  "projects.vulnerableWebApp": "Aplicação Web Vulnerável",
  "projects.buyAndSellWebsite": "Website de Compra e Venda",
  "projects.medicalInsuranceCostsForecastUsingLinearRegression":
    "Previsão de Custos de Seguro de Saúde com Regressão Linear",
  "projects.faceRecognition": "Reconhecimento Facial",
  "projects.shopFloorCoLocatedCollaborativeTrainingUsingLargeDisplaysAndVirtualEnvironments":
    "Formação Colaborativa em Chão de Fábrica com Ecrãs Grandes e Ambientes Virtuais",
  "projects.analysisOfAnInternetServiceOrProductTwitter":
    "Análise de um Serviço ou Produto de Internet: Twitter",
  "projects.anatomyOfAWebConnectionABriefAnalysis":
    "Anatomia de uma Ligação Web: Uma Breve Análise",
  "projects.analysisOfTheSignalProtocol": "Análise do Protocolo Signal",
  "projects.digitalMarketplaceForLastMileDeliveries":
    "Mercado Digital para Entregas de Último Quilómetro",

  "topics.c": "C",
  "topics.algorithms": "Algoritmos",
  "topics.sorting": "Ordenação",
  "topics.recursion": "Recursividade",
  "topics.decoding": "Descodificação",
  "topics.networks": "Redes",
  "topics.gns3": "GNS3",
  "topics.wireshark": "Wireshark",
  "topics.bash": "Bash",
  "topics.linux": "Linux",
  "topics.matlab": "MatLab",
  "topics.probabilities": "Probabilidades",
  "topics.distributions": "Distribuições",
  "topics.markovChains": "Cadeias de Markov",
  "topics.simulation": "Simulação",
  "topics.applicationsInCs": "Aplicações em Informática",
  "topics.sql": "SQL",
  "topics.dbSchemes": "Esquemas de BD",
  "topics.normalization": "Normalização",
  "topics.ddl": "DDL",
  "topics.dml": "DML",
  "topics.python": "Python",
  "topics.sockets": "Sockets",
  "topics.selectors": "Selectors",
  "topics.pubSub": "Pub/Sub",
  "topics.chord": "Chord",
  "topics.p2p": "P2P",
  "topics.dht": "DHT",
  "topics.flask": "Flask",
  "topics.masterSlave": "Mestre/Escravo",
  "topics.uiUx": "UI/UX",
  "topics.android": "Android",
  "topics.java": "Java",
  "topics.hci": "IPM",
  "topics.redis": "Redis",
  "topics.mongodb": "MongoDB",
  "topics.cassandra": "Cassandra",
  "topics.neo4j": "Neo4J",
  "topics.spring": "Spring",
  "topics.springBoot": "Spring Boot",
  "topics.rabbitmq": "RabbitMQ",
  "topics.docker": "Docker",
  "topics.javascript": "JavaScript",
  "topics.react": "React",
  "topics.cybersecurity": "Cibersegurança",
  "topics.cyberAttackAnalysis": "análise de ciberataques",
  "topics.cryptography": "Criptografia",
  "topics.encryption": "Encriptação",
  "topics.eChap": "E-CHAP",
  "topics.django": "Django",
  "topics.vulnerabilities": "Vulnerabilidades",
  "topics.cwe": "CWE",
  "topics.drf": "DRF",
  "topics.angular": "Angular",
  "topics.jupyterNotebook": "Jupyter Notebook",
  "topics.ml": "AA",
  "topics.regression": "Regressão",
  "topics.dataAnalysis": "Análise de Dados",
  "topics.classification": "Classificação",
  "topics.csharp": "C#",
  "topics.unity": "Unity",
  "topics.vr": "RV",
  "topics.steamvr": "SteamVR",
  "topics.writing": "Escrita",
  "topics.analysis": "Análise",
  "topics.socialImplications": "Implicações Sociais",
  "topics.junit": "JUnit",
  "topics.selenium": "Selenium",
  "topics.cucumber": "Cucumber",
  "topics.sonarqube": "SonarQube",
};

export const ui: Ui = { en, pt } as const;
