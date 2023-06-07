import type { HTMLAttributes } from "react";

export function Button({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`${
        className ? className : ""
      } bg-gray-300 border-none py-[0.5em] px-[1em] hover:shadow-lg focus-visible:shadow-lg focus-visible:outline focus-visible:outline-orange-600 focus-visible:outline-offset-1 cursor-pointer rounded-md`}
    >
      {children}
    </button>
  );
}
