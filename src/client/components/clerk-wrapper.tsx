"use client";

import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { type ComponentProps } from "react";
import { clerkThemes } from "~/client/styles/clerk-theme";

export const ClerkWrapper = (props: ComponentProps<typeof ClerkProvider>) => {
  const { resolvedTheme } = useTheme();

  return (
    <ClerkProvider
      localization={ptBR}
      appearance={clerkThemes[resolvedTheme ?? "light"]}
      {...props}
    />
  );
};
