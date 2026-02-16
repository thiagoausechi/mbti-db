"use client";

import { useTranslations } from "next-intl";
import { CategoryEntry } from "~/client/components/layout/navbar/entries";
import { Button } from "~/client/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuItemLabel,
} from "~/client/components/ui/sidebar";
import { merge } from "~/client/lib/merge-class-name";
import { Link, usePathname } from "~/i18n/navigation";
import {
  PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY,
  type PersonalityWithoutIdentity,
} from "~/shared/enums/mbti/personalities";
import { groupPersonalitiesByRole, type Role } from "~/shared/enums/mbti/roles";

const PERSONALITIES_GROUPED_BY_ROLE = groupPersonalitiesByRole([
  ...PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY,
]);
export function PersonalitiesListSidebar() {
  const tPageMetadata = useTranslations(
    "Pages.guidebook.personalities.metadata",
  );
  const tTheory = useTranslations("Theory.MBTI.roles");

  return (
    <Sidebar side="right" className="sticky top-0 hidden h-svh lg:flex">
      <SidebarHeader className="flex-row justify-between">
        <SidebarMenuItemLabel>
          <h3 className="text-center font-black text-shadow-neumorphic text-xl">
            {tPageMetadata("navigation")}
          </h3>
        </SidebarMenuItemLabel>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {Object.entries(PERSONALITIES_GROUPED_BY_ROLE).map(
              ([role, personalities]) => (
                <CategoryEntry key={role} label={tTheory(role as Role)}>
                  {personalities.map((personality) => (
                    <PersonalityButton
                      key={personality}
                      personality={personality}
                      role={role as Role}
                    />
                  ))}
                </CategoryEntry>
              ),
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

// TODO: refactor to use LinkEntry when possible, creating a wrapper if necessary to handle the active state and role-based styling
function PersonalityButton({
  personality,
  role,
}: {
  personality: PersonalityWithoutIdentity;
  role: Role;
}) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(personality);
  const t = useTranslations("Theory.MBTI.personalities");
  const mbti = personality.toUpperCase();
  const label = `${t(`${personality}.label.they`)} (${mbti})`;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={isActive}
        className="w-full"
        tooltip={label}
        render={
          <Link
            href={`/guidebook/personalities/${personality}`}
            aria-disabled={isActive}
            tabIndex={isActive ? 0 : -1}
            className={merge(isActive ? "pointer-events-none" : "")}
          >
            <Button
              variant={isActive ? "active" : "secondary"}
              className={merge(isActive && role)}
              full
            >
              <SidebarMenuItemLabel collapsedPlaceholder={mbti}>
                {label}
              </SidebarMenuItemLabel>
            </Button>
          </Link>
        }
      />
    </SidebarMenuItem>
  );
}
