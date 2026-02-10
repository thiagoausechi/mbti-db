import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "~/client/components/ui/button";
import {
  SidebarHeader,
  SidebarMenuItemLabel,
  useSidebar,
} from "~/client/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/client/components/ui/tooltip";
import { merge } from "~/client/lib/merge-class-name";

export function NavbarHeader() {
  const { open, setOpen } = useSidebar();
  const t = useTranslations();

  return (
    <SidebarHeader className="flex-row justify-between">
      <SidebarMenuItemLabel>
        <h3 className="text-center font-black text-shadow-neumorphic text-xl">
          {t("Metadata.title")}
        </h3>
      </SidebarMenuItemLabel>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="secondary" onClick={() => setOpen(!open)}>
              <PanelRightOpen className={merge({ hidden: !open })} />
              <PanelRightClose className={merge({ hidden: open })} />
            </Button>
          }
        />
        <TooltipContent side="right">
          {open ? t("Actions.sidebar.close") : t("Actions.sidebar.open")}
        </TooltipContent>
      </Tooltip>
    </SidebarHeader>
  );
}
