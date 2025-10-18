import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-black text-md sm:text-4xl text-center">
        {t("title")}
      </h1>
      <p className="text-center">{t("subtitle")}</p>
    </main>
  );
}
