"use client";

import { Sidebar } from "~/client/components/ui/sidebar";
import { NavbarHeader } from "./header";

export function Navbar() {
  return (
    <Sidebar>
      <NavbarHeader />
    </Sidebar>
  );
}
