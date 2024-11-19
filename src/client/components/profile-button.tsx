"use client";

import { SignedIn, useClerk, useUser } from "@clerk/nextjs";
import { cn, twx } from "../utils";
import { Avatar } from "./avatar";
import { If } from "./if";

export function ProfileButton() {
  const clerk = useClerk();
  const { user, isLoaded, isSignedIn } = useUser();

  const handleClick = () => isSignedIn && clerk.openUserProfile();
  const handleLogout = () => clerk.signOut();

  return (
    <Wrapper>
      <SignedIn>
        <UserInfo>
          <If condition={!isLoaded}>
            <div className="h-6 w-32 animate-pulse rounded bg-black/50" />
          </If>

          <button onClick={handleClick}>{user?.fullName}</button>
          <button
            onClick={handleLogout}
            className="font-normal hover:underline"
          >
            Sair
          </button>
        </UserInfo>
      </SignedIn>

      <Avatar
        onClick={handleClick}
        imageSrc={user?.imageUrl}
        className={cn("bg-background/50", isSignedIn && "cursor-pointer")}
      />
    </Wrapper>
  );
}

const Wrapper = twx.div`flex gap-6`;
const UserInfo = twx.div`flex flex-col items-end justify-center`;
