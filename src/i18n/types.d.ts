import { formats } from "~/i18n/request";
import { routing } from "~/i18n/routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Formats: typeof formats;
    Messages: {
      Metadata: {
        title: string;
        description: string;
      };
      HomePage: {
        title: string;
        subtitle: string;
      };
    };
  }
}
