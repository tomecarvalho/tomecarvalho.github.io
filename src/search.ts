import type { CurrentLocale } from "./i18n/types";
import {
  getLocale,
  toLocalePath,
  translate,
  useTranslations,
} from "./i18n/utils";
import { navRoutes, navRoutesArray } from "./routes/nav-routes";
import siteConfig from "./site/config";
import type { TranslatedTool } from "./types/data/tools/Tool";

export type SearchEntry = {
  label: string;
  context: string;
  href: string;
  icon: string;
  keywords?: string;
};

export const projectTargetId = (categoryId: string, projectIndex: number) =>
  `project-${categoryId}-${projectIndex}`;

export const interestCardTargetId = (interestId: string, cardIndex: number) =>
  `interest-${interestId}-${cardIndex}`;

export const toolTargetId = (categoryId: string, path: number[]) =>
  `tool-${categoryId}-${path.join("-")}`;

export const courseworkTargetId = (...path: number[]) =>
  `coursework-${path.join("-")}`;

const windowTarget = (id: string) => `window-${id}-trigger`;

export const getSearchEntries = (
  currentLocale: CurrentLocale,
): SearchEntry[] => {
  const t = useTranslations(currentLocale);
  const locale = getLocale(currentLocale);
  const projectsPath = toLocalePath(locale, navRoutes.projects.path);
  const toolsPath = toLocalePath(locale, navRoutes.tools.path);
  const interestsPath = toLocalePath(locale, navRoutes.interests.path);
  const aboutPath = toLocalePath(locale, navRoutes.aboutMe.path);

  const projectsLabel = t("nav.projects", { capitalize: true });
  const toolsLabel = t("nav.tools", { capitalize: true });
  const interestsLabel = t("nav.interests", { capitalize: true });
  const aboutLabel = t("nav.aboutMe", { capitalize: true });
  /* The pages lead the results, so one prompt can reach anything on the site. */
  const entries: SearchEntry[] = navRoutesArray.map((route) => ({
    label: t(route.label, { capitalize: true }),
    context: t("launcher.prompt"),
    href: toLocalePath(locale, route.path),
    icon: route.icon,
    keywords: "description" in route ? t(route.description) : undefined,
  }));

  entries.push({
    label: siteConfig.name,
    context: aboutLabel,
    href: `${aboutPath}#${windowTarget("about-me")}`,
    icon: navRoutes.aboutMe.icon,
  });

  const projectCategories = translate(
    siteConfig.projectCategories,
    currentLocale,
  );
  for (const category of projectCategories) {
    entries.push({
      label: category.name,
      context: projectsLabel,
      href: `${projectsPath}#${windowTarget(category.id)}`,
      icon: category.icon,
    });

    category.projects.forEach((project, projectIndex) => {
      entries.push({
        label: project.name,
        context: `${projectsLabel} › ${category.name}`,
        href: `${projectsPath}#${projectTargetId(category.id, projectIndex)}`,
        icon: category.icon,
        keywords: project.links?.map(({ label }) => label).join(" "),
      });
    });
  }

  const coursework = translate(siteConfig.coursework, currentLocale);
  const courseworkLabel = t("projects.titles.universityCoursework");
  entries.push({
    label: courseworkLabel,
    context: projectsLabel,
    href: `${projectsPath}#${windowTarget("coursework")}`,
    icon: "mdi:university",
  });

  coursework.forEach((year, yearIndex) => {
    entries.push({
      label: year.title,
      context: `${projectsLabel} › ${courseworkLabel}`,
      href: `${projectsPath}#${courseworkTargetId(yearIndex)}`,
      icon: "mdi:university",
    });

    year.semesters.forEach((semester, semesterIndex) => {
      const semesterContext = `${projectsLabel} › ${courseworkLabel} › ${year.title}`;
      entries.push({
        label: semester.title,
        context: semesterContext,
        href: `${projectsPath}#${courseworkTargetId(yearIndex, semesterIndex)}`,
        icon: "mdi:university",
      });

      semester.subjects.forEach((subject, subjectIndex) => {
        const subjectPath = [yearIndex, semesterIndex, subjectIndex];
        entries.push({
          label: subject.name,
          context: `${semesterContext} › ${semester.title}`,
          href: `${projectsPath}#${courseworkTargetId(...subjectPath)}`,
          icon: "mdi:book-education",
        });

        subject.projects.forEach((project, projectIndex) => {
          entries.push({
            label: project.name,
            context: `${projectsLabel} › ${subject.name}`,
            href: `${projectsPath}#${courseworkTargetId(...subjectPath, projectIndex)}`,
            icon: "mdi:school",
            keywords: project.topics.join(" "),
          });
        });
      });
    });
  });

  const toolCategories = translate(siteConfig.toolCategories, currentLocale);
  const addTools = (
    tools: TranslatedTool[],
    categoryId: string,
    icon: string,
    parents: string[],
    path: number[] = [],
  ) => {
    tools.forEach((tool, index) => {
      const toolPath = [...path, index];
      entries.push({
        label: tool.name,
        context: [toolsLabel, ...parents].join(" › "),
        href: `${toolsPath}#${toolTargetId(categoryId, toolPath)}`,
        icon,
        keywords: tool.type,
      });

      if (tool.children)
        addTools(
          tool.children,
          categoryId,
          icon,
          [...parents, tool.name],
          toolPath,
        );
    });
  };

  for (const category of toolCategories) {
    entries.push({
      label: category.name,
      context: toolsLabel,
      href: `${toolsPath}#${windowTarget(category.id)}`,
      icon: navRoutes.tools.icon,
    });
    addTools(category.tools, category.id, navRoutes.tools.icon, [
      category.name,
    ]);
  }

  const interests = translate(siteConfig.interests, currentLocale);
  for (const interest of interests) {
    entries.push({
      label: interest.name,
      context: interestsLabel,
      href: `${interestsPath}#${windowTarget(interest.id)}`,
      icon: interest.icon,
    });

    interest.cards?.forEach((card, cardIndex) => {
      if (!card.text.primary) return;

      entries.push({
        label: card.text.primary,
        context: `${interestsLabel} › ${interest.name}`,
        href: `${interestsPath}#${interestCardTargetId(interest.id, cardIndex)}`,
        icon: interest.icon,
        keywords: [
          card.text.secondary,
          "tertiary" in card.text ? card.text.tertiary : undefined,
        ]
          .filter(Boolean)
          .join(" "),
      });
    });
  }

  return entries;
};
