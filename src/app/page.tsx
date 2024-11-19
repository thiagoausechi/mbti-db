import { home } from "~/router/routes";
import { redirectTo } from "~/router/utils";

export default function IndexPage() {
  return redirectTo(home);
}
