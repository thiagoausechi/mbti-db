import { merge } from "~/client/lib/merge-class-name";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={merge("bg-border rounded-md animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
