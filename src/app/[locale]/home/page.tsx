import { useTranslations, type Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/client/components/ui/card";
import { HalfColumnContent, Main } from "~/client/components/ui/content";

export default function HomePage({ params }: PageProps<"/[locale]/home">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations("Pages.home");

  return (
    <Main>
      <HalfColumnContent className="my-auto" centered>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>{t("subtitle")}</CardDescription>
          </CardHeader>
        </Card>
      </HalfColumnContent>
    </Main>
  );
}
