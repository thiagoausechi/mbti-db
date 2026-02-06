import type { formats } from "~/i18n/request";
import type { routing } from "~/i18n/routing";
import type { CognitiveFunction } from "~/shared/enums/mbti/cognitive-functions";
import type { StackType } from "~/shared/enums/mbti/cognitive-functions/stack";
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

type Descriptive = {
  title: string;
  description: string;
};

type Stack = Record<StackType, string>;

type CognitiveFunctionInfo = Descriptive &
  Record<EnergyMeaning, Descriptive & { stack: Stack }>;

type PronounSensitive<T = string> = Record<Pronoun, T>;

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
          personalities: Record<PersonalityWithoutIdentity, PronounSensitive>;
          preferences: {
            energy: Record<Energy, PronounSensitive> & Descriptive;
            mind: Record<Mind, PronounSensitive> & Descriptive;
            nature: Record<Nature, PronounSensitive> & Descriptive;
            tactic: Record<Tactic, PronounSensitive> & Descriptive;
            identity: Record<Identity, PronounSensitive> & Descriptive;
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
