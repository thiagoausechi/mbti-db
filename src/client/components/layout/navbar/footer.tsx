import { SidebarFooter } from "~/client/components/ui/sidebar";
import { CategoryEntry, ThemeSwitcherEntry } from "./entries";

export function NavbarFooter() {
  return (
    <SidebarFooter>
      <CategoryEntry label={""}>
        <ThemeSwitcherEntry />
      </CategoryEntry>
    </SidebarFooter>
  );
}
