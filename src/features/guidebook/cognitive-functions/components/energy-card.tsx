import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/client/components/ui/card";
import {
  type CognitiveFunction,
  cognitiveFunctionIconMap,
  stackTypes,
} from "~/shared/enums/mbti/cognitive-functions";
import type { EnergyMeaning } from "~/shared/enums/mbti/preferences/energy";

export function EnergyCard({
  cognitiveFunction,
  energy,
}: {
  cognitiveFunction: CognitiveFunction;
  energy: EnergyMeaning;
}) {
  const tEnergy = useTranslations(
    `Theory.CognitiveFunctions.${cognitiveFunction}.${energy}`,
  );
  const tStack = useTranslations("Theory.CognitiveFunctions.stack");
  const TitleIcon = cognitiveFunctionIconMap[cognitiveFunction][energy];

  return (
    <Card className="grid grid-rows-subgrid row-span-6">
      <CardHeader>
        <CardTitle>
          <h2 className="flex gap-layout items-center text-2xl">
            <TitleIcon className="drop-shadow-neumorphic" size={32} />
            {tEnergy("title")} - "{tEnergy("codename")}"
          </h2>
        </CardTitle>
        <CardDescription>{tEnergy("snippet")}</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-rows-subgrid row-span-5 gap-y-layout">
        <p>{tEnergy("description")}</p>

        {stackTypes.map((type) => (
          <li key={type}>
            <strong>{tStack(type)}:</strong> {tEnergy(`stack.${type}`)}
          </li>
        ))}
      </CardContent>
    </Card>
  );
}
