"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import * as React from "react";
import { merge } from "~/client/lib/merge-class-name";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={merge(
        "shadow-depth-neumorphic bg-light-tone file:bg-light-tone file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive font-bold h-8 rounded-layout px-2.5 py-1 transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm w-full min-w-0 outline-none file:inline-flex file:border-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
