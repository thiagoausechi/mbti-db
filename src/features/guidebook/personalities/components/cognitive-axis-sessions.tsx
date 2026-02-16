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
  axisRoles,
  getPersonalityAxes,
  type AxisInfo,
  type AxisRole,
  type CognitiveStack,
} from "~/shared/enums/mbti/cognitive-functions";
import type { Role } from "~/shared/enums/mbti/roles";
import { SectionHeader } from "./section-header";

export function CognitiveAxisSession({
  role,
  cognitiveStack,
}: {
  role: Role;
  cognitiveStack: CognitiveStack;
}) {
  const t = useTranslations("Theory.CognitiveFunctions.Axes");
  const personalityAxes = getPersonalityAxes(cognitiveStack);

  return (
    <>
      <SectionHeader role={role}>{t("title")}</SectionHeader>

      {axisRoles.map((axisRole) => (
        <AxisCard
          key={axisRole}
          {...{ axisRole, info: personalityAxes[axisRole] }}
        />
      ))}
    </>
  );
}

function AxisCard({ axisRole, info }: { axisRole: AxisRole; info: AxisInfo }) {
  const t = useTranslations("Theory.CognitiveFunctions.Axes");
  const { macro, pair } = info;

  return (
    <HalfColumnContent>
      <Card className="h-full">
        <CardHeader>
          <CardDescription>{t(`roles.${axisRole}.title`)}</CardDescription>
          <CardTitle className="text-lg">
            {t(`macros.${macro}`)} ({pair})
          </CardTitle>
          <CardDescription>"{t(`pairs.${pair}.concept`)}"</CardDescription>
        </CardHeader>
        <CardContent>{t(`pairs.${pair}.${axisRole}`)}</CardContent>
      </Card>
    </HalfColumnContent>
  );
}
