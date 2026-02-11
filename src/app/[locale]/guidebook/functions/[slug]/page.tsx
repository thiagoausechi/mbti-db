import { notFound } from "next/navigation";
import { use } from "react";
import { FullColumnContent } from "~/client/components/ui/content";
import { EnergyCard } from "~/features/guidebook/cognitive-functions/components/energy-card";
import { SummaryCard } from "~/features/guidebook/cognitive-functions/components/summary-card";
import type { CognitiveFunction } from "~/shared/enums/mbti/cognitive-functions";
import { cognitiveFunctions } from "~/shared/enums/mbti/cognitive-functions";

export async function generateStaticParams() {
  return cognitiveFunctions.map((slug) => ({ slug }));
}

export default function GuidebookFunctionPage({
  params,
}: PageProps<"/[locale]/guidebook/functions/[slug]">) {
  const { slug } = use(params);

  const cognitiveFunction = slug as CognitiveFunction;
  if (!cognitiveFunctions.includes(cognitiveFunction)) return notFound();

  return (
    <>
      <FullColumnContent>
        <SummaryCard cognitiveFunction={cognitiveFunction} />
      </FullColumnContent>
      <FullColumnContent>
        <div className="grid gap-surface grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto_auto_auto]">
          <EnergyCard
            cognitiveFunction={cognitiveFunction}
            energy="extraverted"
          />
          <EnergyCard
            cognitiveFunction={cognitiveFunction}
            energy="introverted"
          />
        </div>
      </FullColumnContent>
    </>
  );
}
