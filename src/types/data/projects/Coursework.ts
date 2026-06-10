import type { Translatable } from "../../../i18n/types";

interface CourseworkProject {
  name: Translatable;
  href: string;
  topics: Translatable[];
}

interface CourseworkSubject {
  name: Translatable;
  href: string;
  projects: CourseworkProject[];
}

interface CourseworkSemester {
  title: Translatable;
  subjects: CourseworkSubject[];
}

interface CourseworkYear {
  title: Translatable;
  semesters: CourseworkSemester[];
}

export type Coursework = CourseworkYear[];
