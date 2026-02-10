import { Home } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
} from "~/client/components/ui/sidebar";
import { LinkEntry } from "./entries";

export function NavbarContent() {
  const t = useTranslations();

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <LinkEntry
            label={t("Pages.home.metadata.navigation")}
            icon={Home}
            href="/"
          />
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}
