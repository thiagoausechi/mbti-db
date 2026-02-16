import type { formats } from "~/i18n/request";
import type { routing } from "~/i18n/routing";
import type {
  CognitiveFunction,
  StackType,
} from "~/shared/enums/mbti/cognitive-functions";
import type {
  CommunicationStyle,
  ReasoningStyle,
} from "~/shared/enums/mbti/extras/styles";
import type { PersonalityWithoutIdentity } from "~/shared/enums/mbti/personalities";
import type {
  Energy,
  EnergyMeaning,
} from "~/shared/enums/mbti/preferences/energy";
import type { Identity } from "~/shared/enums/mbti/preferences/identity";
import type { Mind } from "~/shared/enums/mbti/preferences/mind";
import type { Nature } from "~/shared/enums/mbti/preferences/nature";
import type { Tactic } from "~/shared/enums/mbti/preferences/tactics";
import type { Role } from "~/shared/enums/mbti/roles";
import type { Gender } from "~/shared/enums/profile/genders";
import type { Pronoun } from "~/shared/enums/profile/pronouns";
import type { Visibility } from "~/shared/enums/profile/visibilities";

type Titled = { title: string };
type Descriptive = Titled & {
  description: string;
};

type Stack = Record<StackType, string>;

type CognitiveFunctionInfo = Descriptive &
  Record<
    EnergyMeaning,
    Descriptive & { codename: string; snippet: string; stack: Stack }
  >;

type PronounSensitive<T = string> = Record<Pronoun, T>;

type Page<T> = {
  metadata: { slug: string; navigation: string };
} & T;

type PreferencesInfo<T extends string> = Descriptive & {
  summary: string;
} & Record<
    T,
    {
      label: PronounSensitive;
      description: string;
    }
  >;

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Formats: typeof formats;
    Messages: {
      Metadata: Descriptive & {
        disclaimer: Descriptive;
        author: Descriptive;
      };

      Actions: {
        sidebar: {
          open: string;
          close: string;
          toggle: string;
        };
        theme: {
          toggle: string;
          light: string;
          dark: string;
        };
      };

      Pages: {
        home: Page<{
          title: string;
          subtitle: string;
        }>;

        guidebook: Page<{}>;
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
          personalities: Record<
            PersonalityWithoutIdentity,
            {
              label: PronounSensitive;
              motto: string;
              snippet: string;
            }
          >;
          preferences: {
            energy: PreferencesInfo<Energy>;
            mind: PreferencesInfo<Mind>;
            nature: PreferencesInfo<Nature>;
            tactic: PreferencesInfo<Tactic>;
            identity: PreferencesInfo<Identity>;
          };
        };

        CognitiveFunctions: {
          stack: Stack;
          perceiving: string;
          judging: string;
        } & Titled &
          Record<CognitiveFunction, CognitiveFunctionInfo>;

        Extras: {
          styles: Titled & {
            communication: Titled & Record<CommunicationStyle, Descriptive>;
            reasoning: Titled & Record<ReasoningStyle, Descriptive>;
          };
        };
      };

      Miscs: {
        ScreenReader: {
          open: string;
          close: string;
          sidebar: {
            mobile: Descriptive;
          };
        };

        AcronymMeaning: {
          title: string;
          MBTI: string;
        };
      };
    };
  }
}
