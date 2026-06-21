import type { Translations } from "../../../../i18n/types";

const terms = {
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
  gitHub: { en: "GitHub", pt: "GitHub" },
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

export default terms;
