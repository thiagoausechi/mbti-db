"use client";

import { Sidebar } from "~/client/components/ui/sidebar";
import { NavbarContent } from "./content";
import { NavbarHeader } from "./header";

export function Navbar() {
  return (
    <Sidebar>
      <NavbarHeader />
      <NavbarContent />
    </Sidebar>
  );
}
