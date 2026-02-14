import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Navbar } from "~/client/components/layout/navbar";
import { Providers } from "~/client/components/providers";
import { routing } from "~/i18n/routing";
import "../globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
    applicationName: t("title"),
    creator: t("author.description"),
    authors: [
      {
        name: t("author.description"),
        url: "https://github.com/thiagoausechi",
      },
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

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${openSans.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
