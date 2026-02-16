import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/client/components/ui/card";
import { FullColumnContent } from "~/client/components/ui/content";
import type { PersonalityWithoutIdentity } from "~/shared/enums/mbti/personalities";
import type { Role } from "~/shared/enums/mbti/roles";

export function PersonalityHeader({
  personality,
  role,
}: {
  personality: PersonalityWithoutIdentity;
  role: Role;
}) {
  const t = useTranslations("Theory.MBTI.personalities");

  return (
    <FullColumnContent className={role}>
      <header>
        <Card className="text-center">
          <CardHeader className="flex flex-row gap-layout items-center justify-center">
            <div className="flex flex-col">
              <CardTitle>
                <h1>
                  {t(`${personality}.label.they`)} ({personality.toUpperCase()})
                </h1>
              </CardTitle>
              <CardDescription>"{t(`${personality}.motto`)}"</CardDescription>
            </div>
          </CardHeader>

          <CardContent className="flex flex-row gap-layout items-center justify-center">
            <p>{t(`${personality}.snippet`)}</p>
          </CardContent>
        </Card>
      </header>
    </FullColumnContent>
  );
}
