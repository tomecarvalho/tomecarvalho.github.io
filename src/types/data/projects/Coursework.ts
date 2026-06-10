import type { LocaleString } from "../../../i18n/ui";

interface CourseworkProject {
  name: LocaleString;
  href: string;
  topics: LocaleString[];
}

interface CourseworkSubject {
  name: LocaleString;
  href: string;
  projects: CourseworkProject[];
}

interface CourseworkSemester {
  number: number;
  subjects: CourseworkSubject[];
}

interface CourseworkYear {
  year: number;
  semesters: CourseworkSemester[];
}

export type Coursework = CourseworkYear[];
