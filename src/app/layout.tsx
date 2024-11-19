import "~/client/styles/globals.css";

import { type Metadata } from "next";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "~/client/components/theme-provider";
import { openSans } from "~/client/styles/fonts";
import { twx } from "~/client/utils";

export const metadata: Metadata = {
  title: "mbti db",
  applicationName: "mbti db",
  creator: "Thiago Ausechi",
  description: "Um acervo de personalidades com base no MBTI",
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
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "MBTI db",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon/favicon-96x96.png",
      sizes: "96x96",
    },
    { rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" },
    { rel: "shortcut", url: "/favicon/favicon.ico" },
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning className={openSans.variable}>
      <Body>
        <ThemeProvider>{children}</ThemeProvider>
      </Body>
    </html>
  );
}

const Body = twx.body`bg-background font-sans font-bold text-foreground antialiased`;
