import { useTranslations } from "next-intl";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  LeafCard,
} from "~/client/components/ui/card";
import { QuarterColumnContent } from "~/client/components/ui/content";
import { merge } from "~/client/lib/merge-class-name";
import {
  cognitiveFunctionIconMap,
  stackTypes,
  type CognitiveStack,
  type StackType,
} from "~/shared/enums/mbti/cognitive-functions";
import { energyToMeaningMap } from "~/shared/enums/mbti/preferences/energy";
import type { Role } from "~/shared/enums/mbti/roles";
import { SectionHeader } from "./section-header";

export function CognitiveFunctionSession({
  role,
  cognitiveStack,
}: {
  role: Role;
  cognitiveStack: CognitiveStack;
}) {
  const t = useTranslations("Theory.CognitiveFunctions");
  return (
    <>
      <SectionHeader role={role}>{t("title")}</SectionHeader>

      {stackTypes.map((stackType, index) => (
        <CognitiveFunctionCard
          key={stackType}
          {...{ index, stackType, cognitiveStack }}
        />
      ))}
    </>
  );
}

function CognitiveFunctionCard({
  stackType,
  cognitiveStack,
  index,
}: {
  stackType: StackType;
  cognitiveStack: CognitiveStack;
  index: number;
}) {
  const t = useTranslations("Theory.CognitiveFunctions");
  const { function: cognitiveFunction, attitude } = cognitiveStack[stackType];
  const attitudeMeaning = energyToMeaningMap[attitude];
  const Icon = cognitiveFunctionIconMap[cognitiveFunction][attitudeMeaning];
  return (
    <QuarterColumnContent>
      <LeafCard index={index} className={merge("h-full")}>
        <CardHeader className="text-center">
          <CardTitle className="text-lg flex flex-col items-center">
            <Icon className="drop-shadow-neumorphic" size={32} />
            {t(`${cognitiveFunction}.${attitudeMeaning}.title`)}
          </CardTitle>
          <CardDescription>{t(`stack.${stackType}`)}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {t(`${cognitiveFunction}.${attitudeMeaning}.stack.${stackType}`)}
        </CardContent>
      </LeafCard>
    </QuarterColumnContent>
  );
}
