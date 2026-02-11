import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";
import { SidebarProvider } from "~/client/components/ui/sidebar";
import { TooltipProvider } from "~/client/components/ui/tooltip";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextIntlClientProvider>
      <TooltipProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </TooltipProvider>
    </NextIntlClientProvider>
  );
}
