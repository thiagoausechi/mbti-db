import type { PropsWithChildren } from "react";
import { FullColumnContent } from "~/client/components/ui/content";
import { merge } from "~/client/lib/merge-class-name";
import type { Role } from "~/shared/enums/mbti/roles";

export function SectionHeader({
  role,
  children,
}: PropsWithChildren<{ role: Role }>) {
  return (
    <FullColumnContent className="border-border border-b-2 pb-layout">
      <h2
        className={merge(
          "text-center font-bold text-xl mt-surface text-dark-tone",
          role,
        )}
      >
        {children}
      </h2>
    </FullColumnContent>
  );
}
