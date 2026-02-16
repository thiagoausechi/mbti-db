import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/client/components/ui/card";
import { HalfColumnContent } from "~/client/components/ui/content";
import {
  communicationStyleAcronymMap,
  parsePersonalityStyles,
  reasoningStyleAcronymMap,
} from "~/shared/enums/mbti/extras/styles";
import type { PersonalityPreferences } from "~/shared/enums/mbti/preferences";
import type { Role } from "~/shared/enums/mbti/roles";
import { SectionHeader } from "./section-header";

export function StylesSessions({
  role,
  preferences,
}: {
  role: Role;
  preferences: PersonalityPreferences;
}) {
  const t = useTranslations("Theory.Extras.styles");
  const { communication, reasoning } = parsePersonalityStyles(preferences);

  return (
    <>
      <SectionHeader role={role}>{t("title")}</SectionHeader>

      <HalfColumnContent>
        <Card className="h-full">
          <CardHeader>
            <CardDescription>{t("communication.title")}</CardDescription>
            <CardTitle className="text-lg">
              {t(`communication.${communication}.title`)} (
              {communicationStyleAcronymMap[communication]})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {t(`communication.${communication}.description`)}
          </CardContent>
        </Card>
      </HalfColumnContent>

      <HalfColumnContent>
        <Card className="h-full">
          <CardHeader>
            <CardDescription>{t("reasoning.title")}</CardDescription>
            <CardTitle className="text-lg">
              {t(`reasoning.${reasoning}.title`)} (
              {reasoningStyleAcronymMap[reasoning]})
            </CardTitle>
          </CardHeader>
          <CardContent>{t(`reasoning.${reasoning}.description`)}</CardContent>
        </Card>
      </HalfColumnContent>
    </>
  );
}
