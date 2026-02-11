import { ChevronRight, type LucideIcon } from "lucide-react";
import type { PropsWithChildren } from "react";
import { Button } from "~/client/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/client/components/ui/collapsible";
import {
  SidebarGroup,
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
  const isActive = pathname === href;
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
      <SidebarMenu>{children}</SidebarMenu>
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
