"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenu } from "~/router/routes";
import { twx } from "../utils";
import { If } from "./if";

export function Navbar() {
  const currentPath = usePathname();

  return (
    <Wrapper>
      <List>
        {Object.values(navigationMenu).map(({ href, navigationLabel }) => (
          <If condition={!!navigationLabel} key={navigationLabel}>
            <Item>
              <Link
                href={href}
                className={
                  currentPath.includes(href) &&
                  "bg-background/50 rounded-md shadow-relief"
                }
              >
                {navigationLabel}
              </Link>
            </Item>
          </If>
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = twx.nav`flex items-center`;
const List = twx.ul`flex gap-3`;
const Item = twx.li``;
const Link = twx(NextLink)`p-2 transition-colors duration-500`;
