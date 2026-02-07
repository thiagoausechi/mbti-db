import { merge } from "~/client/lib/merge-class-name";

interface SkeletonProps<T> {
  data: T | null | undefined;
  placeholder: React.ReactNode;
  children: (data: T) => React.ReactNode;
}

function Skeleton<T>({ data, placeholder, children }: SkeletonProps<T>) {
  if (data === null || data === undefined) return placeholder;

  return children(data);
}

function Placeholder({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={merge("bg-border rounded-full animate-pulse", className)}
      {...props}
    />
  );
}

export { Placeholder, Skeleton };
