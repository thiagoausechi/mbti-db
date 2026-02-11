import type { Locale } from "next-intl";
import { use } from "react";
import { redirect } from "~/i18n/navigation";

export default function RootPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  redirect({ href: "/home", locale: locale as Locale });
}
