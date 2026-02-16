import { BookMarked, Drama, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
} from "~/client/components/ui/sidebar";
import { cognitiveFunctionIconMap } from "~/shared/enums/mbti/cognitive-functions";
import { CategoryEntry, CollapsibleEntry, LinkEntry } from "./entries";

export function NavbarContent() {
  const t = useTranslations();

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <LinkEntry
            label={t("Pages.home.metadata.navigation")}
            icon={Home}
            href="/home"
          />

          <CollapsibleEntry
            label={t("Pages.guidebook.metadata.navigation")}
            icon={BookMarked}
          >
            <LinkEntry
              label={t("Pages.guidebook.personalities.metadata.navigation")}
              icon={Drama}
              href="/guidebook/personalities"
              asSubitem
            />

            <CategoryEntry label={t("Theory.CognitiveFunctions.perceiving")}>
              <LinkEntry
                label={t("Theory.CognitiveFunctions.sensing.title")}
                icon={cognitiveFunctionIconMap["sensing"].default}
                href="/guidebook/functions/sensing"
                asSubitem
              />
              <LinkEntry
                label={t("Theory.CognitiveFunctions.intuition.title")}
                icon={cognitiveFunctionIconMap["intuition"].default}
                href="/guidebook/functions/intuition"
                asSubitem
              />
            </CategoryEntry>
            <CategoryEntry label={t("Theory.CognitiveFunctions.judging")}>
              <LinkEntry
                label={t("Theory.CognitiveFunctions.thinking.title")}
                icon={cognitiveFunctionIconMap["thinking"].default}
                href="/guidebook/functions/thinking"
                asSubitem
              />
              <LinkEntry
                label={t("Theory.CognitiveFunctions.feeling.title")}
                icon={cognitiveFunctionIconMap["feeling"].default}
                href="/guidebook/functions/feeling"
                asSubitem
              />
            </CategoryEntry>
          </CollapsibleEntry>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}
