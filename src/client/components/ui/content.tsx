import * as React from "react";
import { merge } from "~/client/lib/merge-class-name";

function Main({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="app-content"
      className={merge(
        "container mx-auto p-surface min-h-screen grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-surface items-start",
        className,
      )}
      {...props}
    />
  );
}

function FullColumnContent({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="full-column-content"
      className={merge("col-span-4 md:col-span-8 lg:col-span-12", className)}
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
        "col-span-4 lg:col-span-6 data-[centered=true]:md:col-start-3 data-[centered=true]:lg:col-start-4",
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
      className={merge("col-span-4 lg:col-span-3", className)}
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
      className={merge("col-span-4 md:col-span-8 lg:col-span-9", className)}
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
        "col-span-4 md:col-span-8 lg:col-span-4 data-[centered=true]:lg:col-start-5",
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
