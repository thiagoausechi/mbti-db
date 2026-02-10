import { useTranslations } from "next-intl";
import { Card, CardContent } from "~/client/components/ui/card";

export function AppFooter() {
  const t = useTranslations("Metadata");

  return (
    <footer className="px-surface">
      <Card className="rounded-b-none">
        <CardContent className="text-xs grid grid-cols-1 md:grid-cols-2 gap-surface">
          <div>
            <strong>{t("disclaimer.title")}</strong>
            <p className="text-justify">{t("disclaimer.description")}</p>
          </div>

          <div className="md:text-right">
            <strong>{t("author.title")}</strong>
            <p>{t("author.description")}</p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
