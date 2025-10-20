import type { formats } from "~/i18n/request";
import type { routing } from "~/i18n/routing";
import type { CognitiveFunction } from "~/shared/enums/mbti/cognitive-functions";
import type { Personality } from "~/shared/enums/mbti/personalities";
import type {
  Energy,
  Identity,
  Mind,
  Nature,
  Tactic,
} from "~/shared/enums/mbti/preferences";
import type { Role } from "~/shared/enums/mbti/roles";
import type { Gender } from "~/shared/enums/profile/genders";
import type { Pronoun } from "~/shared/enums/profile/pronouns";
import type { Visibility } from "~/shared/enums/profile/visibilities";

type Descriptive = {
  title: string;
  description: string;
};

type Stack = {
  dominant: string;
  auxiliary: string;
  tertiary: string;
  inferior: string;
};

type Attitude = {
  name: string;
  description: string;
  stack: Stack;
};

type CognitiveFunctionInfo = {
  name: string;
  description: string;
  extraverted: Attitude;
  introverted: Attitude;
};

type DifferByPronoun = Record<Pronoun, string>;

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Formats: typeof formats;
    Messages: {
      Metadata: Descriptive;

      HomePage: {
        title: string;
        subtitle: string;
      };

      Profile: {
        firstName: string;
        lastName: string;
        gender: Record<Gender, string>;
        pronoun: Record<Pronoun, string>;
        visibility: Record<Visibility, string>;
      };

      Theory: {
        MBTI: {
          roles: Record<Role, string>;
          personalities: Record<Personality, DifferByPronoun>;
          preferences: {
            energy: Record<Energy, DifferByPronoun> & Descriptive;
            mind: Record<Mind, DifferByPronoun> & Descriptive;
            nature: Record<Nature, DifferByPronoun> & Descriptive;
            tactic: Record<Tactic, DifferByPronoun> & Descriptive;
            identity: Record<Identity, DifferByPronoun> & Descriptive;
          };
        };

        CognitiveFunctions: {
          stack: Stack;
          percieving: string;
          judging: string;
        } & Record<CognitiveFunction, CognitiveFunctionInfo>;
      };
    };
  }
}
