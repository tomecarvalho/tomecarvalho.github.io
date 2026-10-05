import type { CurrentLocale } from "../i18n/types";
import {
  getLocale,
  toLocalePath,
  translate,
  useTranslations,
} from "../i18n/utils";
import { navRoutes, navRoutesArray } from "../routes/nav-routes";
import siteConfig from "../site/config";
import type { TranslatedTool } from "../types/data/tools/Tool";
import type { SearchEntry } from "./types";

export const projectTargetId = (categoryId: string, projectIndex: number) =>
  `project-${categoryId}-${projectIndex}`;

export const interestCardTargetId = (interestId: string, cardIndex: number) =>
  `interest-${interestId}-${cardIndex}`;

export const toolTargetId = (categoryId: string, path: number[]) =>
  `tool-${categoryId}-${path.join("-")}`;

export const courseworkTargetId = (...path: number[]) =>
  `coursework-${path.join("-")}`;

const windowTarget = (id: string) => `window-${id}-trigger`;

export const getContactEntries = (
  currentLocale: CurrentLocale,
): SearchEntry[] => {
  const t = useTranslations(currentLocale);
  const contactsLabel = t("launcher.modes.contacts");

  return siteConfig.contacts.map(({ label, value, href, icon }) => ({
    label,
    context: contactsLabel,
    href,
    icon,
    value: value || href,
    keywords: [value, href].filter(Boolean).join(" ") || undefined,
  }));
};

export const getSearchEntries = (
  currentLocale: CurrentLocale,
): SearchEntry[] => {
  const t = useTranslations(currentLocale);

  const locale = getLocale(currentLocale);
  const projectsPath = toLocalePath(locale, navRoutes.projects.path);
  const toolsPath = toLocalePath(locale, navRoutes.tools.path);
  const interestsPath = toLocalePath(locale, navRoutes.interests.path);

  const projectsLabel = t("nav.projects", { capitalize: true });
  const toolsLabel = t("nav.tools", { capitalize: true });
  const interestsLabel = t("nav.interests", { capitalize: true });

  const projectCategories = translate(
    siteConfig.projectCategories,
    currentLocale,
  );

  const coursework = translate(siteConfig.coursework, currentLocale);
  const courseworkLabel = t("projects.titles.universityCoursework");

  const toolCategories = translate(siteConfig.toolCategories, currentLocale);
  const interests = translate(siteConfig.interests, currentLocale);

  const toolEntries = (
    tools: TranslatedTool[],
    categoryId: string,
    parents: string[],
    path: number[] = [],
  ): SearchEntry[] =>
    tools.flatMap((tool, index) => {
      const toolPath = [...path, index];

      return [
        {
          label: tool.name,
          context: [toolsLabel, ...parents].join(" > "),
          href: `${toolsPath}#${toolTargetId(categoryId, toolPath)}`,
          icon: navRoutes.tools.icon,
          keywords: tool.type,
        },
        ...(tool.children
          ? toolEntries(
              tool.children,
              categoryId,
              [...parents, tool.name],
              toolPath,
            )
          : []),
      ];
    });

  const getRouteEntries = (): SearchEntry[] =>
    navRoutesArray.map((route) => ({
      label: t(route.label, { capitalize: true }),
      context: t("launcher.modes.routes"),
      href: toLocalePath(locale, route.path),
      icon: route.icon,
      keywords: "description" in route ? t(route.description) : undefined,
    }));

  const getProjectEntries = (): SearchEntry[] =>
    projectCategories.flatMap((category) => [
      {
        label: category.name,
        context: projectsLabel,
        href: `${projectsPath}#${windowTarget(category.id)}`,
        icon: category.icon,
      },
      ...category.projects.map((project, projectIndex) => ({
        label: project.name,
        context: `${projectsLabel} > ${category.name}`,
        href: `${projectsPath}#${projectTargetId(category.id, projectIndex)}`,
        icon: category.icon,
        keywords: project.links?.map(({ label }) => label).join(" "),
      })),
    ]);

  const getCourseworkEntries = (): SearchEntry[] => [
    {
      label: courseworkLabel,
      context: projectsLabel,
      href: `${projectsPath}#${windowTarget("coursework")}`,
      icon: "mdi:university",
    },
    ...coursework.flatMap((year, yearIndex) => [
      {
        label: year.title,
        context: `${projectsLabel} > ${courseworkLabel}`,
        href: `${projectsPath}#${courseworkTargetId(yearIndex)}`,
        icon: "mdi:university",
      },
      ...year.semesters.flatMap((semester, semesterIndex) => [
        {
          label: semester.title,
          context: `${projectsLabel} > ${courseworkLabel} > ${year.title}`,
          href: `${projectsPath}#${courseworkTargetId(yearIndex, semesterIndex)}`,
          icon: "mdi:university",
        },
        ...semester.subjects.flatMap((subject, subjectIndex) => {
          const subjectPath = [yearIndex, semesterIndex, subjectIndex];

          return [
            {
              label: subject.name,
              context: `${projectsLabel} > ${courseworkLabel} > ${year.title} > ${semester.title}`,
              href: `${projectsPath}#${courseworkTargetId(...subjectPath)}`,
              icon: "mdi:book-education",
            },
            ...subject.projects.map((project, projectIndex) => ({
              label: project.name,
              context: `${projectsLabel} > ${courseworkLabel} > ${year.title} > ${semester.title} > ${subject.name}`,
              href: `${projectsPath}#${courseworkTargetId(
                ...subjectPath,
                projectIndex,
              )}`,
              icon: "mdi:school",
              keywords: project.topics.join(" "),
            })),
          ];
        }),
      ]),
    ]),
  ];

  const getToolCategoryEntries = (): SearchEntry[] =>
    toolCategories.flatMap((category) => [
      {
        label: category.name,
        context: toolsLabel,
        href: `${toolsPath}#${windowTarget(category.id)}`,
        icon: navRoutes.tools.icon,
      },
      ...toolEntries(category.tools, category.id, [category.name]),
    ]);

  const getInterestEntries = (): SearchEntry[] =>
    interests.flatMap((interest) => [
      {
        label: interest.name,
        context: interestsLabel,
        href: `${interestsPath}#${windowTarget(interest.id)}`,
        icon: interest.icon,
      },
      ...(interest.cards?.flatMap((card, cardIndex) => {
        if (!card.text.primary) return [];

        return [
          {
            label: card.text.primary,
            context: `${interestsLabel} > ${interest.name}`,
            href: `${interestsPath}#${interestCardTargetId(interest.id, cardIndex)}`,
            icon: interest.icon,
            keywords: [
              card.text.secondary,
              "tertiary" in card.text ? card.text.tertiary : undefined,
            ]
              .filter(Boolean)
              .join(" "),
          },
        ];
      }) ?? []),
    ]);

  const entries: SearchEntry[] = [
    ...getRouteEntries(),
    ...getContactEntries(currentLocale),
    ...getProjectEntries(),
    ...getCourseworkEntries(),
    ...getToolCategoryEntries(),
    ...getInterestEntries(),
  ];

  return entries;
};
