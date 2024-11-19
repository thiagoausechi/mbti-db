import { type RedirectType, redirect } from "next/navigation";

export type Route = {
  href: string;
  navigationLabel: string;
};

export function createRoute(href: string, navigationLabel: string) {
  return {
    href,
    navigationLabel,
  };
}

export function redirectTo({ href }: Route, type?: RedirectType) {
  return redirect(href, type);
}
