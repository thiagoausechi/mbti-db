"use client";

import { Sidebar } from "~/client/components/ui/sidebar";
import { NavbarContent } from "./content";
import { NavbarFooter } from "./footer";
import { NavbarHeader } from "./header";

export function Navbar() {
  return (
    <Sidebar>
      <NavbarHeader />
      <NavbarContent />
      <NavbarFooter />
    </Sidebar>
  );
}
