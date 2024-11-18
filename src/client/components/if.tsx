import type { PropsWithChildren } from "react";

interface IfProps extends PropsWithChildren {
  condition: boolean;
}

export function If({ condition, children }: IfProps) {
  return condition ? children : null;
}
