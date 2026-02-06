import createI18nMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createI18nMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // 1) if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // 2) the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
