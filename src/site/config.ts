import type { LocaleString } from "../i18n/ui";
import type { Contact } from "../types/data/about-me/Contact";
import type { Coursework } from "../types/data/projects/Coursework";
import type { RecursiveObject } from "../types/util/RecursiveObject";

/**
 * Enforce type safety for `i18n` key-value pairs.
 * For non-translatable strings, any string is allowed.
 */
type SiteConfig = {
  i18n: RecursiveObject<LocaleString>;
  contacts: Contact[];
  coursework: Coursework;
} & Record<string, unknown>;

/** Site configuration (personal information, URLs, etc.). */
const siteConfig = {
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
    role: "terms.softwareDeveloper",
    location: "terms.portugal",
    aboutMeDescription: "aboutMe.description.tomecarvalho",
  },
  coursework: [
    {
      year: 2,
      semesters: [
        {
          number: 1,
          subjects: [
            {
              name: "subjects.algorithmsAndDataStructures",
              href: "https://www.ua.pt/en/uc/12281",
              projects: [
                {
                  name: "projects.generalisedWeightedJobSelectionProblem",
                  href: "https://github.com/tomecarvalho/AED_97939/blob/main/AED_T1",
                  topics: ["topics.c", "topics.algorithms"],
                },
                {
                  name: "projects.sortingAlgorithms",
                  href: "https://github.com/tomecarvalho/AED_97939/tree/main/AED_T2",
                  topics: ["topics.algorithms", "topics.sorting"],
                },
                {
                  name: "projects.recursivelyDecodingANonInstantaneousBinaryCode",
                  href: "https://github.com/tomecarvalho/AED_97939/tree/main/AED_T3",
                  topics: [
                    "topics.c",
                    "topics.algorithms",
                    "topics.recursion",
                    "topics.decoding",
                  ],
                },
              ],
            },
            {
              name: "subjects.networksAndServices",
              href: "https://www.ua.pt/en/uc/14818",
              projects: [
                {
                  name: "projects.practicalClassesAndFinalProject",
                  href: "https://github.com/tomecarvalho/RS_97939",
                  topics: [
                    "topics.networks",
                    "topics.gns3",
                    "topics.wireshark",
                  ],
                },
              ],
            },
            {
              name: "subjects.operatingSystems",
              href: "https://www.ua.pt/en/uc/12293",
              projects: [
                {
                  name: "projects.bashLinuxProcessStatistics",
                  href: "https://github.com/tomecarvalho/SO_97939/tree/main/Projeto%20SO",
                  topics: ["topics.bash", "topics.linux"],
                },
              ],
            },
            {
              name: "subjects.probabilityMethodsForInformaticsEngineering",
              href: "https://www.ua.pt/en/uc/12182",
              projects: [
                {
                  name: "projects.practicalClasses",
                  href: "https://github.com/tomecarvalho/MPEI_97939",
                  topics: [
                    "topics.matlab",
                    "topics.probabilities",
                    "topics.distributions",
                    "topics.markovChains",
                    "topics.simulation",
                    "topics.applicationsInCs",
                  ],
                },
              ],
            },
          ],
        },
        {
          number: 2,
          subjects: [
            {
              name: "subjects.databases",
              href: "https://www.ua.pt/en/uc/2238",
              projects: [
                {
                  name: "projects.tourSystem",
                  href: "https://github.com/tomecarvalho/BD_Project",
                  topics: [
                    "topics.sql",
                    "topics.dbSchemes",
                    "topics.normalization",
                    "topics.ddl",
                    "topics.dml",
                  ],
                },
              ],
            },
            {
              name: "subjects.distributedComputing",
              href: "https://www.ua.pt/en/uc/12273",
              projects: [
                {
                  name: "projects.loadBalancer",
                  href: "https://github.com/tomecarvalho/CD_P4",
                  topics: [
                    "topics.python",
                    "topics.sockets",
                    "topics.selectors",
                  ],
                },
                {
                  name: "projects.messageBroker",
                  href: "https://github.com/tomecarvalho/CD_P3",
                  topics: ["topics.python", "topics.pubSub"],
                },
                {
                  name: "projects.chordDht",
                  href: "https://github.com/tomecarvalho/CD_P2",
                  topics: [
                    "topics.python",
                    "topics.chord",
                    "topics.p2p",
                    "topics.dht",
                  ],
                },
                {
                  name: "projects.distributedPasswordCracker",
                  href: "https://github.com/tomecarvalho/CD_Final",
                  topics: [
                    "topics.python",
                    "topics.flask",
                    "topics.p2p",
                    "topics.masterSlave",
                  ],
                },
              ],
            },
            {
              name: "subjects.humanComputerInteraction",
              href: "https://www.ua.pt/en/uc/2484",
              projects: [
                {
                  name: "projects.softcutsInvestigatingPerformanceAndUsageOfInputMethodsForSoftKeyboardHotkeys",
                  href: "https://github.com/tomecarvalho/IHC_97939/blob/main/IHC%20Softcuts.pdf",
                  topics: ["topics.uiUx"],
                },
                {
                  name: "projects.cookAndGo",
                  href: "https://github.com/tomecarvalho/ihc-cookandgo",
                  topics: ["topics.android", "topics.java"],
                },
                {
                  name: "projects.practicalClasses",
                  href: "https://github.com/tomecarvalho/IHC_97939",
                  topics: ["topics.hci", "topics.uiUx"],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      year: 3,
      semesters: [
        {
          number: 1,
          subjects: [
            {
              name: "subjects.advancedDatabases",
              href: "https://www.ua.pt/en/uc/12282",
              projects: [
                {
                  name: "projects.practicalClasses",
                  href: "https://github.com/tomecarvalho/CBD_97939",
                  topics: [
                    "topics.redis",
                    "topics.mongodb",
                    "topics.cassandra",
                    "topics.neo4j",
                  ],
                },
              ],
            },
            {
              name: "subjects.introductionToSoftwareEngineering",
              href: "https://www.ua.pt/en/uc/12288",
              projects: [
                {
                  name: "projects.netCafeWebApplicationForManagementOfAnInternetCafeFranchise",
                  href: "https://github.com/tomecarvalho/IES_NetCafe",
                  topics: [
                    "topics.java",
                    "topics.spring",
                    "topics.springBoot",
                    "topics.rabbitmq",
                    "topics.docker",
                    "topics.javascript",
                    "topics.react",
                  ],
                },
                {
                  name: "projects.practicalClasses",
                  href: "https://github.com/tomecarvalho/IES_97939",
                  topics: [
                    "topics.java",
                    "topics.spring",
                    "topics.springBoot",
                    "topics.docker",
                  ],
                },
              ],
            },
            {
              name: "subjects.informationAndOrganisationalSecurity",
              href: "https://www.ua.pt/en/uc/4143",
              projects: [
                {
                  name: "projects.weWereHacked",
                  href: "https://github.com/tomecarvalho/SIO_P3",
                  topics: [
                    "topics.cybersecurity",
                    "topics.cyberAttackAnalysis",
                  ],
                },
                {
                  name: "projects.uapAuthentication",
                  href: "https://github.com/tomecarvalho/SIO_P2",
                  topics: [
                    "topics.cryptography",
                    "topics.encryption",
                    "topics.eChap",
                  ],
                },
                {
                  name: "projects.vulnerableWebApp",
                  href: "https://github.com/tomecarvalho/SIO_P1",
                  topics: [
                    "topics.python",
                    "topics.django",
                    "topics.flask",
                    "topics.vulnerabilities",
                    "topics.cwe",
                  ],
                },
              ],
            },
            {
              name: "subjects.technologiesAndWebProgramming",
              href: "https://www.ua.pt/en/uc/12841",
              projects: [
                {
                  name: "projects.buyAndSellWebsite",
                  href: "https://github.com/tomecarvalho/TPW_T2",
                  topics: [
                    "topics.python",
                    "topics.django",
                    "topics.drf",
                    "topics.javascript",
                    "topics.angular",
                  ],
                },
                {
                  name: "projects.practicalClasses",
                  href: "https://github.com/tomecarvalho/TPW_97939",
                  topics: [
                    "topics.python",
                    "topics.django",
                    "topics.drf",
                    "topics.javascript",
                    "topics.angular",
                  ],
                },
              ],
            },
          ],
        },
        {
          number: 2,
          subjects: [
            {
              name: "subjects.machineLearningTopics",
              href: "https://www.ua.pt/en/uc/12832",
              projects: [
                {
                  name: "projects.medicalInsuranceCostsForecastUsingLinearRegression",
                  href: "https://github.com/tomecarvalho/TAA_P1",
                  topics: [
                    "topics.python",
                    "topics.jupyterNotebook",
                    "topics.ml",
                    "topics.regression",
                    "topics.dataAnalysis",
                  ],
                },
                {
                  name: "projects.faceRecognition",
                  href: "https://github.com/tomecarvalho/TAA_P2",
                  topics: [
                    "topics.python",
                    "topics.jupyterNotebook",
                    "topics.ml",
                    "topics.classification",
                    "topics.dataAnalysis",
                  ],
                },
              ],
            },
            {
              name: "subjects.projectInInformatics",
              href: "https://www.ua.pt/en/uc/17477",
              projects: [
                {
                  name: "projects.shopFloorCoLocatedCollaborativeTrainingUsingLargeDisplaysAndVirtualEnvironments",
                  href: "https://github.com/tomecarvalho/PI_Theia",
                  topics: [
                    "topics.csharp",
                    "topics.unity",
                    "topics.vr",
                    "topics.steamvr",
                  ],
                },
              ],
            },
            {
              name: "subjects.professionalAndSocialAspectsOfComputerScience",
              href: "https://www.ua.pt/en/uc/12271",
              projects: [
                {
                  name: "projects.analysisOfAnInternetServiceOrProductTwitter",
                  href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/97880_97606_93343_96123_97939_assign2_report_APSEI_2021-22.pdf",
                  topics: [
                    "topics.writing",
                    "topics.analysis",
                    "topics.socialImplications",
                  ],
                },
                {
                  name: "projects.anatomyOfAWebConnectionABriefAnalysis",
                  href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/97939_assign1_APSEI_2022.pdf",
                  topics: [
                    "topics.networks",
                    "topics.writing",
                    "topics.analysis",
                  ],
                },
                {
                  name: "projects.analysisOfTheSignalProtocol",
                  href: "https://github.com/tomecarvalho/APSEI_97939/blob/master/Assignments/Assign3_report_APSEI_21-22.pdf",
                  topics: [
                    "topics.writing",
                    "topics.analysis",
                    "topics.encryption",
                  ],
                },
              ],
            },
            {
              name: "subjects.softwareTestingAndQualityControl",
              href: "https://www.ua.pt/en/uc/8109",
              projects: [
                {
                  name: "projects.practicalClasses",
                  href: "https://github.com/tomecarvalho/tqs_97939",
                  topics: [
                    "topics.java",
                    "topics.spring",
                    "topics.springBoot",
                    "topics.junit",
                    "topics.docker",
                    "topics.react",
                    "topics.selenium",
                    "topics.cucumber",
                    "topics.sonarqube",
                  ],
                },
                {
                  name: "projects.digitalMarketplaceForLastMileDeliveries",
                  href: "https://github.com/TQS-G11",
                  topics: [
                    "topics.java",
                    "topics.spring",
                    "topics.springBoot",
                    "topics.junit",
                    "topics.docker",
                    "topics.react",
                    "topics.selenium",
                    "topics.cucumber",
                    "topics.sonarqube",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} as const satisfies SiteConfig;

export default siteConfig;
