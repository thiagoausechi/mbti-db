import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";
import { SidebarProvider } from "~/client/components/ui/sidebar";
import { TooltipProvider } from "~/client/components/ui/tooltip";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </TooltipProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
