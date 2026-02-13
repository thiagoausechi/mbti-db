import { ChevronRight, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import type { PropsWithChildren } from "react";
import { Button } from "~/client/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/client/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuItemLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/client/components/ui/sidebar";
import { Link, usePathname } from "~/i18n/navigation";

export function LinkEntry({
  label,
  icon: Icon,
  href,
  asSubitem = false,
}: {
  label: string;
  icon: LucideIcon;
  href: string;
  asSubitem?: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  const MenuItemComp = asSubitem ? SidebarMenuSubItem : SidebarMenuItem;
  const MenuButtonComp = asSubitem ? SidebarMenuSubButton : SidebarMenuButton;

  return (
    <MenuItemComp>
      <MenuButtonComp
        isActive={isActive}
        className="w-full"
        tooltip={label}
        render={
          <Link href={href}>
            <Button
              variant={isActive ? "active" : "secondary"}
              className="justify-start"
              full
            >
              <Icon />
              <SidebarMenuItemLabel>{label}</SidebarMenuItemLabel>
            </Button>
          </Link>
        }
      />
    </MenuItemComp>
  );
}

export function CategoryEntry({
  label,
  children,
}: PropsWithChildren<{ label: string }>) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{children}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function CollapsibleEntry({
  label,
  icon: Icon,
  children,
}: PropsWithChildren<{
  label: string;
  icon: LucideIcon;
}>) {
  return (
    <Collapsible className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger
          render={
            <SidebarMenuButton
              tooltip={label}
              render={
                <Button variant="secondary" className="justify-start" full>
                  <Icon />
                  <SidebarMenuItemLabel>{label}</SidebarMenuItemLabel>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                </Button>
              }
            />
          }
        />

        <CollapsibleContent>
          <SidebarMenuSub>{children}</SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

export function ThemeSwitcherEntry() {
  const t = useTranslations("Actions.theme");
  const { setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className="w-full"
        tooltip={t("toggle")}
        render={
          <Button
            onClick={toggleTheme}
            variant="secondary"
            className="justify-start"
            full
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />

            <SidebarMenuItemLabel>{t("toggle")}</SidebarMenuItemLabel>
          </Button>
        }
      />
    </SidebarMenuItem>
  );
}
