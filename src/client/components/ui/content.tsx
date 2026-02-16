import * as React from "react";
import { merge } from "~/client/lib/merge-class-name";
import { AppFooter } from "../layout/footer";

function Main({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <div className="@container/main flex flex-col justify-between w-full min-h-screen">
      <main
        data-slot="app-content"
        className={merge(
          "container mx-auto p-surface grid grid-cols-4 @2xl/main:grid-cols-8 @6xl/main:grid-cols-12 gap-surface items-start",
          className,
        )}
        {...props}
      />
      <AppFooter />
    </div>
  );
}

function FullColumnContent({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="full-column-content"
      className={merge(
        "col-span-4 @2xl/main:col-span-8 @6xl/main:col-span-12",
        className,
      )}
      {...props}
    />
  );
}

function HalfColumnContent({
  className,
  centered = false,
  ...props
}: React.ComponentProps<"div"> & {
  centered?: boolean;
}) {
  return (
    <div
      data-slot="half-column-content"
      data-centered={centered}
      className={merge(
        "col-span-4 @6xl/main:col-span-6 data-[centered=true]:@2xl/main:col-start-3 data-[centered=true]:@6xl/main:col-start-4",
        className,
      )}
      {...props}
    />
  );
}

function QuarterColumnContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="quarter-column-content"
      className={merge("col-span-4 @6xl/main:col-span-3", className)}
      {...props}
    />
  );
}

function PrimaryContent({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="primary-content"
      className={merge(
        "col-span-4 @2xl/main:col-span-8 @6xl/main:col-span-9",
        className,
      )}
      {...props}
    />
  );
}

function AsideContent({
  className,
  centered = false,
  ...props
}: React.ComponentProps<"aside"> & {
  centered?: boolean;
}) {
  return (
    <aside
      data-slot="aside-content"
      data-centered={centered}
      className={merge(
        "col-span-4 @2xl/main:col-span-8 @6xl/main:col-span-4 data-[centered=true]:@6xl/main:col-start-5",
        className,
      )}
      {...props}
    />
  );
}

export {
  AsideContent,
  FullColumnContent,
  HalfColumnContent,
  Main,
  PrimaryContent,
  QuarterColumnContent,
};
