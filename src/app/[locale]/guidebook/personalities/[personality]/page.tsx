import { notFound } from "next/navigation";
import { use } from "react";
import { Main } from "~/client/components/ui/content";
import {
  AcronymSession,
  CognitiveAxisSession,
  CognitiveFunctionSession,
  PersonalitiesListSidebar,
  PersonalityHeader,
  StylesSessions,
} from "~/features/guidebook/personalities/components";
import { parsePersonalityCognitiveStack } from "~/shared/enums/mbti/cognitive-functions";
import {
  isValidPersonality,
  PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY,
  removeIdentity,
} from "~/shared/enums/mbti/personalities";
import { parsePersonalityPreferences } from "~/shared/enums/mbti/preferences";
import { parseRoleFromPersonality } from "~/shared/enums/mbti/roles";

export async function generateStaticParams() {
  return PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY.map((personality) => ({
    personality,
  }));
}

export default function GuidebookPersonalitiesPage({
  params,
}: PageProps<"/[locale]/guidebook/personalities/[personality]">) {
  const { personality } = use(params);

  if (!isValidPersonality(personality)) return notFound();

  const preferences = parsePersonalityPreferences(personality);

  const props = {
    personality: removeIdentity(personality),
    role: parseRoleFromPersonality(personality),
    cognitiveStack: parsePersonalityCognitiveStack(preferences),
    preferences,
  };

  return (
    <>
      <Main className="items-stretch">
        <PersonalityHeader {...props} />
        <AcronymSession {...props} />
        <CognitiveFunctionSession {...props} />
        <CognitiveAxisSession {...props} />
        <StylesSessions {...props} />
      </Main>
      <PersonalitiesListSidebar />
    </>
  );
}
