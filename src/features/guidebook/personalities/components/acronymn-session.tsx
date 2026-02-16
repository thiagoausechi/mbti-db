import { useTranslations } from "next-intl";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  LeafCard,
} from "~/client/components/ui/card";
import { QuarterColumnContent } from "~/client/components/ui/content";
import {
  preferences as PREFERENCES,
  type PersonalityPreferences,
  type Preference,
} from "~/shared/enums/mbti/preferences";
import type { Role } from "~/shared/enums/mbti/roles";
import { SectionHeader } from "./section-header";

export function AcronymSession({
  role,
  preferences,
}: {
  role: Role;
  preferences: PersonalityPreferences;
}) {
  const t = useTranslations("Miscs.AcronymMeaning");
  return (
    <>
      <SectionHeader role={role}>{t("title")}</SectionHeader>

      {PREFERENCES.map((preference, index) => (
        <PreferenceCard
          key={preference}
          {...{ index, preference, preferences }}
        />
      ))}
    </>
  );
}

function PreferenceCard({
  preference,
  preferences,
  index,
}: {
  preference: Preference;
  preferences: PersonalityPreferences;
  index: number;
}) {
  const t = useTranslations("Theory.MBTI");
  const acronym = preferences[preference];

  return (
    <QuarterColumnContent>
      <LeafCard index={index} className="h-full">
        <CardHeader>
          <CardDescription>
            {t(`preferences.${preference}.title`)}
          </CardDescription>
          <CardTitle className="text-lg">
            {t(`preferences.${preference}.${acronym}.label.they` as any)} (
            {acronym.toUpperCase()})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {t(`preferences.${preference}.${acronym}.description` as any)}
        </CardContent>
      </LeafCard>
    </QuarterColumnContent>
  );
}
