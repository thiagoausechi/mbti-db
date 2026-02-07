import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Open_Sans } from "next/font/google";
import { TooltipProvider } from "~/client/components/ui/tooltip";
import "../globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

interface MetadataProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata(
  props: MetadataProps,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    applicationName: "mbti-db",
    creator: "Thiago Ausechi",
    authors: [
      { name: "Thiago Ausechi", url: "https://github.com/thiagoausechi" },
    ],
    keywords: [
      "mbti",
      "Myers-Briggs Type Indicator",
      "database",
      "banco de dados",
      "collection",
      "acervo",
      "personalidades",
      "personalities",
      "rede social",
      "social network",
      "social",
    ],
  };
}

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <html>
      <body className={`${openSans.variable}`}>
        <NextIntlClientProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
