import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/client/components/ui/card";
import {
  CognitiveFunction,
  cognitiveFunctionIconMap,
} from "~/shared/enums/mbti/cognitive-functions";

export function SummaryCard({
  cognitiveFunction,
}: {
  cognitiveFunction: CognitiveFunction;
}) {
  const t = useTranslations(`Theory.CognitiveFunctions.${cognitiveFunction}`);
  const TitleIcon = cognitiveFunctionIconMap[cognitiveFunction].default;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="flex gap-layout items-center">
            <TitleIcon className="drop-shadow-neumorphic" size={40} />
            {t("title")}
          </h1>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>{t("description")}</p>
      </CardContent>
    </Card>
  );
}
