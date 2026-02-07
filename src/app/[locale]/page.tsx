import { useTranslations } from "next-intl";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/client/components/ui/card";

export default function HomePage() {
  const t = useTranslations("Pages.home");

  return (
    <main className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center space-y-surface">
      <Card className="max-w-md">
        <CardHeader className="text-center">
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("subtitle")}</CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
