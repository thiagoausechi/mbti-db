import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Open_Sans } from "next/font/google";
import { AppFooter } from "~/client/components/layout/footer";
import { Navbar } from "~/client/components/layout/navbar";
import { SidebarProvider } from "~/client/components/ui/sidebar";
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

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <html>
      <body className={`${openSans.variable}`}>
        <NextIntlClientProvider>
          <TooltipProvider>
            <SidebarProvider>
              <Navbar />
              <div className="w-full min-h-screen">
                {children}
                <AppFooter />
              </div>
            </SidebarProvider>
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
