import type { Metadata } from "next";
import { Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Open_Sans } from "next/font/google";
import "../globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

interface MetadataProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata(
  props: MetadataProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <html>
      <body className={`${openSans.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
