"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twx } from "~/client/utils";
import { home } from "~/router/routes";

const MIN_SCROLL_DISTANCE_FROM_TOP_IN_PX = 0;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > MIN_SCROLL_DISTANCE_FROM_TOP_IN_PX);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Wrapper>
      <Content className={scrolled && "bg-white/70 dark:bg-black/90"}>
        <LeftSide className="flex gap-6">
          <Link href={home.href}>
            <Image
              src="/assets/mbti-db-logo.svg"
              width={60}
              height={60}
              className="drop-shadow-relief"
              alt="Website logo"
            />
          </Link>
        </LeftSide>
      </Content>
    </Wrapper>
  );
}

const Wrapper = twx.header`md:container sticky top-0 z-50 flex md:pt-8`;
const Content = twx.div`grid flex-grow grid-cols-2 items-center rounded-b-2xl p-6 backdrop-blur-lg transition-colors duration-500 md:rounded-2xl`;
const LeftSide = twx.div`flex gap-6`;
