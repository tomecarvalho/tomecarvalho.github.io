import type { SiteConfig } from "..";
import type { Translations } from "../../../i18n/types";

const topics = {
  algorithms: { en: "Algorithms", pt: "Algoritmos" },
  analysis: { en: "Analysis", pt: "Análise" },
  angular: { en: "Angular", pt: "Angular" },
  c: { en: "C", pt: "C" },
  cucumber: { en: "Cucumber", pt: "Cucumber" },
  dataAnalysis: { en: "Data Analysis", pt: "Análise de Dados" },
  django: { en: "Django", pt: "Django" },
  docker: { en: "Docker", pt: "Docker" },
  drf: { en: "DRF", pt: "DRF" },
  encryption: { en: "Encryption", pt: "Encriptação" },
  flask: { en: "Flask", pt: "Flask" },
  java: { en: "Java", pt: "Java" },
  javascript: { en: "JavaScript", pt: "JavaScript" },
  junit: { en: "JUnit", pt: "JUnit" },
  jupyterNotebook: { en: "Jupyter Notebook", pt: "Jupyter Notebook" },
  ml: { en: "ML", pt: "AA" },
  networks: { en: "Networks", pt: "Redes" },
  p2p: { en: "P2P", pt: "P2P" },
  python: { en: "Python", pt: "Python" },
  react: { en: "React", pt: "React" },
  selenium: { en: "Selenium", pt: "Selenium" },
  sonarqube: { en: "SonarQube", pt: "SonarQube" },
  spring: { en: "Spring", pt: "Spring" },
  springBoot: { en: "Spring Boot", pt: "Spring Boot" },
  uiUx: { en: "UI/UX", pt: "UI/UX" },
  writing: { en: "Writing", pt: "Escrita" },
} as const satisfies Record<string, Translations>;

const tomecarvalho = {
  site: "https://tomecarvalho.github.io",
  handle: "tomecarvalho",
  name: "Tomé Carvalho",
  contacts: [
    {
      id: "email",
      icon: "mdi:email",
      label: "Email",
      value: "tomecarvalho01@gmail.com",
      href: "mailto:tomecarvalho01@gmail.com",
    },
    {
      id: "github",
      icon: "mdi:github",
      label: "GitHub",
      value: "",
      href: "https://github.com/tomecarvalho",
    },
    {
      id: "linkedin",
      icon: "mdi:linkedin",
      label: "LinkedIn",
      value: "",
      href: "https://www.linkedin.com/in/tomecarvalho",
    },
  ],
  i18n: {
    role: { en: "Software Developer", pt: "Desenvolvedor de Software" },
    location: { en: "Portugal", pt: "Portugal" },
    aboutMeDescription: {
      en: `Hi, I'm Tomé.

I love gaming, resistance training, reading, and listening to metal, but you're probably here for something else!

Professionally, I'm a full-stack developer who likes his code clean, solutions robust, and pipelines automated: the proactive, reliable kind of guy who knows there's nothing more permanent than a temporary solution.

In my spare time, I also like to dabble in personal projects and contribute to open-source tools that improve my workflow—and hopefully other users' too—and provide new learning opportunities through the process.

Feel free to poke around! Check out my projects or hobbies, and don't hesitate to get in touch.`,
      pt: `Olá, sou o Tomé.

Adoro gaming, treino de resistência, ler e ouvir metal, mas provavelmente está aqui por outro motivo!

Profissionalmente, sou um desenvolvedor full stack que gosta do código limpo, soluções robustas e fluxos automatizados: o tipo de pessoa proativa e fiável que sabe bem que não há nada mais permanente que uma solução temporária.

No meu tempo livre, também gosto de dedicar-me a projetos pessoais e contribuições para ferramentas de código aberto que melhoram o meu fluxo de trabalho — e, espero eu, o de outros também — e que me proporcionam novas oportunidades de aprendizagem ao longo do processo.

Fique à vontade para dar uma vista de olhos! Veja os meus projetos ou passatempos, e não hesite em entrar em contacto.`,
    },
  },
  coursework: [
    {
      title: { en: "Year 2", pt: "2º Ano" },
      semesters: [
        {
          title: { en: "1st Semester", pt: "1º Semestre" },
          subjects: [
            {
              name: {
                en: "Algorithms and Data Structures",
                pt: "Algoritmos e Estruturas de Dados",
              },
              href: "https://www.ua.pt/en/uc/12281",
              projects: [
                {
                  name: {
                    en: "Generalised Weighted Job Selection Problem",
                    pt: "Problema Generalizado de Seleção de Trabalhos Ponderados",
                  },
                  href: "https://github.com/tomecarvalho/AED_97939/blob/main/AED_T1",
                  topics: [topics.c, topics.algorithms],
                },
                {
                  name: {
                    en: "Sorting Algorithms",
                    pt: "Algoritmos de Ordenação",
                  },
                  href: "https://github.com/tomecarvalho/AED_97939/tree/main/AED_T2",
                  topics: [
                    topics.algorithms,
                    { en: "Sorting", pt: "Ordenação" },
                  ],
                },
                {
                  name: {
                    en: "Recursively Decoding a Non-instantaneous Binary Code",
                    pt: "Descodificação Recursiva de um Código Binário Não Instantâneo",
                  },
                  href: "https://github.com/tomecarvalho/AED_97939/tree/main/AED_T3",
                  topics: [
                    topics.c,
                    topics.algorithms,
                    { en: "Recursion", pt: "Recursividade" },
                    { en: "Decoding", pt: "Descodificação" },
                  ],
                },
              ],
            },
            {
              name: { en: "Networks and Services", pt: "Redes e Serviços" },
              href: "https://www.ua.pt/en/uc/14818",
              projects: [
                {
                  name: {
                    en: "Practical Classes and Final Project",
                    pt: "Aulas Práticas e Projeto Final",
                  },
                  href: "https://github.com/tomecarvalho/RS_97939",
                  topics: [
                    topics.networks,
                    { en: "GNS3", pt: "GNS3" },
                    { en: "Wireshark", pt: "Wireshark" },
                  ],
                },
              ],
            },
            {
              name: { en: "Operating Systems", pt: "Sistemas Operativos" },
              href: "https://www.ua.pt/en/uc/12293",
              projects: [
                {
                  name: {
                    en: "Bash: Linux Process Statistics",
                    pt: "Bash: Estatísticas de Processos Linux",
                  },
                  href: "https://github.com/tomecarvalho/SO_97939/tree/main/Projeto%20SO",
                  topics: [
                    { en: "Bash", pt: "Bash" },
                    { en: "Linux", pt: "Linux" },
                  ],
                },
              ],
            },
            {
              name: {
                en: "Probability Methods for Informatics Engineering",
                pt: "Métodos Probabilísticos para Engenharia Informática",
              },
              href: "https://www.ua.pt/en/uc/12182",
              projects: [
                {
                  name: { en: "Practical Classes", pt: "Aulas Práticas" },
                  href: "https://github.com/tomecarvalho/MPEI_97939",
                  topics: [
                    { en: "MatLab", pt: "MatLab" },
                    { en: "Probabilities", pt: "Probabilidades" },
                    { en: "Distributions", pt: "Distribuições" },
                    { en: "Markov chains", pt: "Cadeias de Markov" },
                    { en: "Simulation", pt: "Simulação" },
                    {
                      en: "Applications in CS",
                      pt: "Aplicações em Informática",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: { en: "2nd Semester", pt: "2º Semestre" },
          subjects: [
            {
              name: { en: "Databases", pt: "Bases de Dados" },
              href: "https://www.ua.pt/en/uc/2238",
              projects: [
                {
                  name: { en: "Tour System", pt: "Sistema de Tours" },
                  href: "https://github.com/tomecarvalho/BD_Project",
                  topics: [
                    { en: "SQL", pt: "SQL" },
                    { en: "DB Schemes", pt: "Esquemas de BD" },
                    { en: "Normalization", pt: "Normalização" },
                    { en: "DDL", pt: "DDL" },
                    { en: "DML", pt: "DML" },
                  ],
                },
              ],
            },
            {
              name: {
                en: "Distributed Computing",
                pt: "Computação Distribuída",
              },
              href: "https://www.ua.pt/en/uc/12273",
              projects: [
                {
                  name: { en: "Load Balancer", pt: "Balanceador de Carga" },
                  href: "https://github.com/tomecarvalho/CD_P4",
                  topics: [
                    topics.python,
                    { en: "Sockets", pt: "Sockets" },
                    { en: "Selectors", pt: "Selectors" },
                  ],
                },
                {
                  name: { en: "Message Broker", pt: "Mediador de Mensagens" },
                  href: "https://github.com/tomecarvalho/CD_P3",
                  topics: [topics.python, { en: "Pub/Sub", pt: "Pub/Sub" }],
                },
                {
                  name: { en: "CHORD (DHT)", pt: "CHORD (DHT)" },
                  href: "https://github.com/tomecarvalho/CD_P2",
                  topics: [
                    topics.python,
                    { en: "Chord", pt: "Chord" },
                    topics.p2p,
                    { en: "DHT", pt: "DHT" },
                  ],
                },
                {
                  name: {
                    en: "Distributed Password Cracker",
                    pt: "Quebra de Palavras-passe Distribuída",
                  },
                  href: "https://github.com/tomecarvalho/CD_Final",
                  topics: [
                    topics.python,
                    topics.flask,
                    topics.p2p,
                    { en: "Master/Slave", pt: "Mestre/Escravo" },
                  ],
                },
              ],
            },
            {
              name: {
                en: "Human-Computer Interaction",
                pt: "Interação Humano-Computador",
              },
              href: "https://www.ua.pt/en/uc/2484",
              projects: [
                {
                  name: {
                    en: "Softcuts - Investigating Performance and Usage of Input Methods for SoftKeyboardHotkeys",
                    pt: "Softcuts - Investigação do Desempenho e Utilização de Métodos de Entrada para Atalhos de Teclado Virtual",
                  },
                  href: "https://github.com/tomecarvalho/IHC_97939/blob/main/IHC%20Softcuts.pdf",
                  topics: [topics.uiUx],
                },
                {
                  name: { en: "Cook and Go", pt: "Cook and Go" },
                  href: "https://github.com/tomecarvalho/ihc-cookandgo",
                  topics: [{ en: "Android", pt: "Android" }, topics.java],
                },
                {
                  name: { en: "Practical Classes", pt: "Aulas Práticas" },
                  href: "https://github.com/tomecarvalho/IHC_97939",
                  topics: [{ en: "HCI", pt: "IPM" }, topics.uiUx],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: { en: "Year 3", pt: "3º Ano" },
      semesters: [
        {
          title: { en: "1st Semester", pt: "1º Semestre" },
          subjects: [
            {
              name: {
                en: "Advanced Databases",
                pt: "Complementos de Bases de Dados",
              },
              href: "https://www.ua.pt/en/uc/12282",
              projects: [
                {
                  name: { en: "Practical Classes", pt: "Aulas Práticas" },
                  href: "https://github.com/tomecarvalho/CBD_97939",
                  topics: [
                    { en: "Redis", pt: "Redis" },
                    { en: "MongoDB", pt: "MongoDB" },
                    { en: "Cassandra", pt: "Cassandra" },
                    { en: "Neo4J", pt: "Neo4J" },
                  ],
                },
              ],
            },
            {
              name: {
                en: "Introduction to Software Engineering",
                pt: "Introdução à Engenharia de Software",
              },
              href: "https://www.ua.pt/en/uc/12288",
              projects: [
                {
                  name: {
                    en: "NetCafe: Web application for management of an Internet Café franchise",
                    pt: "NetCafe: Aplicação web para gestão de uma franquia de cibercafé",
                  },
                  href: "https://github.com/tomecarvalho/IES_NetCafe",
                  topics: [
                    topics.java,
                    topics.spring,
                    topics.springBoot,
                    { en: "RabbitMQ", pt: "RabbitMQ" },
                    topics.docker,
                    topics.javascript,
                    topics.react,
                  ],
                },
                {
                  name: { en: "Practical Classes", pt: "Aulas Práticas" },
                  href: "https://github.com/tomecarvalho/IES_97939",
                  topics: [
                    topics.java,
                    topics.spring,
                    topics.springBoot,
                    topics.docker,
                  ],
                },
              ],
            },
            {
              name: {
                en: "Information and Organisational Security",
                pt: "Segurança Informática e Nas Organizações",
              },
              href: "https://www.ua.pt/en/uc/4143",
              projects: [
                {
                  name: { en: "We were Hacked", pt: "Fomos Hacked" },
                  href: "https://github.com/tomecarvalho/SIO_P3",
                  topics: [
                    { en: "Cybersecurity", pt: "Cibersegurança" },
                    {
                      en: "cyber-attack analysis",
                      pt: "análise de ciberataques",
                    },
                  ],
                },
                {
                  name: { en: "UAP Authentication", pt: "Autenticação UAP" },
                  href: "https://github.com/tomecarvalho/SIO_P2",
                  topics: [
                    { en: "Cryptography", pt: "Criptografia" },
                    topics.encryption,
                    { en: "E-CHAP", pt: "E-CHAP" },
                  ],
                },
                {
                  name: {
                    en: "Vulnerable Web App",
                    pt: "Aplicação Web Vulnerável",
                  },
                  href: "https://github.com/tomecarvalho/SIO_P1",
                  topics: [
                    topics.python,
                    topics.django,
                    topics.flask,
                    { en: "Vulnerabilities", pt: "Vulnerabilidades" },
                    { en: "CWE", pt: "CWE" },
                  ],
                },
              ],
            },
            {
              name: {
                en: "Technologies and Web Programming",
                pt: "Tecnologias e Programação Web",
              },
              href: "https://www.ua.pt/en/uc/12841",
              projects: [
                {
                  name: {
                    en: "Buy & Sell Website",
                    pt: "Website de Compra e Venda",
                  },
                  href: "https://github.com/tomecarvalho/TPW_T2",
                  topics: [
                    topics.python,
                    topics.django,
                    topics.drf,
                    topics.javascript,
                    topics.angular,
                  ],
                },
                {
                  name: { en: "Practical Classes", pt: "Aulas Práticas" },
                  href: "https://github.com/tomecarvalho/TPW_97939",
                  topics: [
                    topics.python,
                    topics.django,
                    topics.drf,
                    topics.javascript,
                    topics.angular,
                  ],
                },
              ],
            },
          ],
        },
        {
          title: { en: "2nd Semester", pt: "2º Semestre" },
          subjects: [
            {
              name: {
                en: "Machine Learning Topics",
                pt: "Tópicos de Aprendizagem Automática",
              },
              href: "https://www.ua.pt/en/uc/12832",
              projects: [
                {
                  name: {
                    en: "Medical Insurance Costs Forecast using Linear Regression",
                    pt: "Previsão de Custos de Seguro de Saúde com Regressão Linear",
                  },
                  href: "https://github.com/tomecarvalho/TAA_P1",
                  topics: [
                    topics.python,
                    topics.jupyterNotebook,
                    topics.ml,
                    { en: "Regression", pt: "Regressão" },
                    topics.dataAnalysis,
                  ],
                },
                {
                  name: { en: "Face Recognition", pt: "Reconhecimento Facial" },
                  href: "https://github.com/tomecarvalho/TAA_P2",
                  topics: [
                    topics.python,
                    topics.jupyterNotebook,
                    topics.ml,
                    { en: "Classification", pt: "Classificação" },
                    topics.dataAnalysis,
                  ],
                },
              ],
            },
            {
              name: {
                en: "Project in Informatics",
                pt: "Projeto em Informática",
              },
              href: "https://www.ua.pt/en/uc/17477",
              projects: [
                {
                  name: {
                    en: "Shop Floor Co-located Collaborative Training using Large Displays & Virtual Environments",
                    pt: "Formação Colaborativa em Chão de Fábrica com Ecrãs Grandes e Ambientes Virtuais",
                  },
                  href: "https://github.com/tomecarvalho/PI_Theia",
                  topics: [
                    { en: "C#", pt: "C#" },
                    { en: "Unity", pt: "Unity" },
                    { en: "VR", pt: "RV" },
                    { en: "SteamVR", pt: "SteamVR" },
                  ],
                },
              ],
            },
            {
              name: {
                en: "Professional and Social Aspects of Computer Science",
                pt: "Aspetos Profissionais e Sociais da Engenharia Informática",
              },
              href: "https://www.ua.pt/en/uc/12271",
              projects: [
                {
                  name: {
                    en: "Analysis of an Internet Service or Product: Twitter",
                    pt: "Análise de um Serviço ou Produto de Internet: Twitter",
                  },
                  href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/97880_97606_93343_96123_97939_assign2_report_APSEI_2021-22.pdf",
                  topics: [
                    topics.writing,
                    topics.analysis,
                    { en: "Social Implications", pt: "Implicações Sociais" },
                  ],
                },
                {
                  name: {
                    en: "Anatomy of a Web Connection: A Brief Analysis",
                    pt: "Anatomia de uma Ligação Web: Uma Breve Análise",
                  },
                  href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/97939_assign1_APSEI_2022.pdf",
                  topics: [topics.networks, topics.writing, topics.analysis],
                },
                {
                  name: {
                    en: "Analysis of the Signal Protocol",
                    pt: "Análise do Protocolo Signal",
                  },
                  href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/Assign3_report_APSEI_21-22.pdf",
                  topics: [topics.writing, topics.analysis, topics.encryption],
                },
              ],
            },
            {
              name: {
                en: "Software Testing and Quality Control",
                pt: "Teste e Qualidade de Software",
              },
              href: "https://www.ua.pt/en/uc/8109",
              projects: [
                {
                  name: { en: "Practical Classes", pt: "Aulas Práticas" },
                  href: "https://github.com/tomecarvalho/tqs_97939",
                  topics: [
                    topics.java,
                    topics.spring,
                    topics.springBoot,
                    topics.junit,
                    topics.docker,
                    topics.react,
                    topics.selenium,
                    topics.cucumber,
                    topics.sonarqube,
                  ],
                },
                {
                  name: {
                    en: "Digital Marketplace for Last-Mile Deliveries",
                    pt: "Mercado Digital para Entregas de Último Quilómetro",
                  },
                  href: "https://github.com/TQS-G11",
                  topics: [
                    topics.java,
                    topics.spring,
                    topics.springBoot,
                    topics.junit,
                    topics.docker,
                    topics.react,
                    topics.selenium,
                    topics.cucumber,
                    topics.sonarqube,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "miscellaneous",
      name: { en: "Miscellaneous", pt: "Diversos" },
      icon: "mdi:file-code",
      projects: [
        {
          name: { en: "US-PT Keyboard Layout", pt: "Layout de Teclado US-PT" },
          description: {
            en: `A convenient superset of the US keyboard layout created for lusophones.
            
In contrast to alternatives like the "US International" layout, it retains all the original keybindings of the US keyboard layout, expanding upon it exclusively through AltGr keybindings.

Additionally, it includes shortcuts for accented vowels, handy symbols—like the em dash—and shortcuts for 60% keyboards.
            
Includes Linux (XKB) and Windows (MSKLC) versions.`,
            pt: `Um superset conveniente do layout de teclado US criado para lusófonos.
            
Ao contrário de alternativas como o layout "US International", retém todo o mapeamento original do layout US, expandindo-o exclusivamente através de novos mapeamentos com a tecla AltGr.

Em adição, inclui atalhos para vogais acentuadas, símbolos úteis — como o travessão — e atalhos para teclados 60%.
            
Inclui versões para Linux (XKB) e Windows (MSKLC).`,
          },
          href: "https://github.com/tomecarvalho/us-pt-keyboard-layout",
          imageUrl:
            "https://github.com/tomecarvalho/us-pt-keyboard-layout/raw/main/docs/layout.jpg",
        },
      ],
    },
    {
      id: "gnome-shell-extensions",
      name: { en: "GNOME Shell Extensions", pt: "Extensões GNOME Shell" },
      icon: "mdi:gnome",
      projects: [
        {
          name: {
            en: "Centre Mouse Shortcuts",
            pt: "Atalhos de Centrar o Rato",
          },
          description: {
            en: `A simple extension that adds two configurable keyboard shortcuts to centre the mouse pointer on the focused window or display, similar to KDE Plasma's built-in shortcuts.
            
Useful when the mouse pointer finds itself inconveniently far from the window you have focused.`,
            pt: `Uma extensão simples que adiciona atalhos de teclado para centrar o ponteiro do rato na janela ou ecrã em foco, semelhante aos atalhos built-in do KDE Plasma.
            
Útil quando o ponteiro do rato se encontra inconvenientemente longe da janela em foco.`,
          },
          href: "https://github.com/tomecarvalho/gnome-extension-center-mouse-shortcuts",
        },
      ],
    },
  ],
} as const satisfies SiteConfig;

export default tomecarvalho;
