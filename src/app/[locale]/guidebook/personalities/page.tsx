import type { Locale } from "next-intl";
import { use } from "react";
import { redirect } from "~/i18n/navigation";
import { PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY } from "~/shared/enums/mbti/personalities";

const FIRST_PERSONALITY = PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY[0];
export default function GuidebookPersonalitiesPage({
  params,
}: PageProps<"/[locale]/guidebook/personalities">) {
  const { locale } = use(params);

  redirect({
    href: `/guidebook/personalities/${FIRST_PERSONALITY}`,
    locale: locale as Locale,
  });
}
