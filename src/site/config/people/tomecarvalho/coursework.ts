import type { SiteConfig } from "../..";
import terms from "./terms";

const coursework = [
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
                topics: [terms.c, terms.algorithms],
              },
              {
                name: {
                  en: "Sorting Algorithms",
                  pt: "Algoritmos de Ordenação",
                },
                href: "https://github.com/tomecarvalho/AED_97939/tree/main/AED_T2",
                topics: [terms.algorithms, { en: "Sorting", pt: "Ordenação" }],
              },
              {
                name: {
                  en: "Recursively Decoding a Non-instantaneous Binary Code",
                  pt: "Descodificação Recursiva de um Código Binário Não Instantâneo",
                },
                href: "https://github.com/tomecarvalho/AED_97939/tree/main/AED_T3",
                topics: [
                  terms.c,
                  terms.algorithms,
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
                  terms.networks,
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
                  terms.python,
                  { en: "Sockets", pt: "Sockets" },
                  { en: "Selectors", pt: "Selectors" },
                ],
              },
              {
                name: { en: "Message Broker", pt: "Mediador de Mensagens" },
                href: "https://github.com/tomecarvalho/CD_P3",
                topics: [terms.python, { en: "Pub/Sub", pt: "Pub/Sub" }],
              },
              {
                name: { en: "CHORD (DHT)", pt: "CHORD (DHT)" },
                href: "https://github.com/tomecarvalho/CD_P2",
                topics: [
                  terms.python,
                  { en: "Chord", pt: "Chord" },
                  terms.p2p,
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
                  terms.python,
                  terms.flask,
                  terms.p2p,
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
                topics: [terms.uiUx],
              },
              {
                name: { en: "Cook and Go", pt: "Cook and Go" },
                href: "https://github.com/tomecarvalho/ihc-cookandgo",
                topics: [{ en: "Android", pt: "Android" }, terms.java],
              },
              {
                name: { en: "Practical Classes", pt: "Aulas Práticas" },
                href: "https://github.com/tomecarvalho/IHC_97939",
                topics: [{ en: "HCI", pt: "IPM" }, terms.uiUx],
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
                  terms.java,
                  terms.spring,
                  terms.springBoot,
                  { en: "RabbitMQ", pt: "RabbitMQ" },
                  terms.docker,
                  terms.javascript,
                  terms.react,
                ],
              },
              {
                name: { en: "Practical Classes", pt: "Aulas Práticas" },
                href: "https://github.com/tomecarvalho/IES_97939",
                topics: [
                  terms.java,
                  terms.spring,
                  terms.springBoot,
                  terms.docker,
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
                  terms.encryption,
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
                  terms.python,
                  terms.django,
                  terms.flask,
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
                  terms.python,
                  terms.django,
                  terms.drf,
                  terms.javascript,
                  terms.angular,
                ],
              },
              {
                name: { en: "Practical Classes", pt: "Aulas Práticas" },
                href: "https://github.com/tomecarvalho/TPW_97939",
                topics: [
                  terms.python,
                  terms.django,
                  terms.drf,
                  terms.javascript,
                  terms.angular,
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
                  terms.python,
                  terms.jupyterNotebook,
                  terms.ml,
                  { en: "Regression", pt: "Regressão" },
                  terms.dataAnalysis,
                ],
              },
              {
                name: { en: "Face Recognition", pt: "Reconhecimento Facial" },
                href: "https://github.com/tomecarvalho/TAA_P2",
                topics: [
                  terms.python,
                  terms.jupyterNotebook,
                  terms.ml,
                  { en: "Classification", pt: "Classificação" },
                  terms.dataAnalysis,
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
                  terms.writing,
                  terms.analysis,
                  { en: "Social Implications", pt: "Implicações Sociais" },
                ],
              },
              {
                name: {
                  en: "Anatomy of a Web Connection: A Brief Analysis",
                  pt: "Anatomia de uma Ligação Web: Uma Breve Análise",
                },
                href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/97939_assign1_APSEI_2022.pdf",
                topics: [terms.networks, terms.writing, terms.analysis],
              },
              {
                name: {
                  en: "Analysis of the Signal Protocol",
                  pt: "Análise do Protocolo Signal",
                },
                href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/Assign3_report_APSEI_21-22.pdf",
                topics: [terms.writing, terms.analysis, terms.encryption],
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
                  terms.java,
                  terms.spring,
                  terms.springBoot,
                  terms.junit,
                  terms.docker,
                  terms.react,
                  terms.selenium,
                  terms.cucumber,
                  terms.sonarqube,
                ],
              },
              {
                name: {
                  en: "Digital Marketplace for Last-Mile Deliveries",
                  pt: "Mercado Digital para Entregas de Último Quilómetro",
                },
                href: "https://github.com/TQS-G11",
                topics: [
                  terms.java,
                  terms.spring,
                  terms.springBoot,
                  terms.junit,
                  terms.docker,
                  terms.react,
                  terms.selenium,
                  terms.cucumber,
                  terms.sonarqube,
                ],
              },
            ],
          },
        ],
      },
    ],
  },
] as const satisfies SiteConfig["coursework"];

export default coursework;
