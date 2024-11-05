"use client";
import { cn } from "@/shared/helpers/cn";
import { ComponentProps, FC, useState } from "react";
import { useClickOutside } from "../hooks/use-click-outside";

interface InputProps extends Omit<ComponentProps<"input">, "autoComplete"> {
  autocomplete?: {
    entries: string[];
    onClick: (entry: string) => void;
  };
  classNames?: {
    wrapper?: string;
    input?: string;
    autocomplete?: string;
  };
}

const Input: FC<InputProps> = ({
  autocomplete,
  classNames,
  className,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const ref = useClickOutside(() => setFocused(false));

  return (
    <fieldset ref={ref} onFocus={() => setFocused(true)} className="relative">
      <input
        className={cn(
          "rounded border-2 border-brown-dark px-5 py-2 focus:outline-offset-4 outline-none",
          className,
          classNames?.input,
          {
            "rounded-b-none": focused && autocomplete,
          }
        )}
        {...props}
      />
      {focused && !!autocomplete && (
        <menu className="absolute border-2 border-brown-dark border-t-0 top-full z-50 flex-col flex max-h-[200px] overflow-y-scroll w-full bg-brown-grey p-1 rounded-b">
          {!autocomplete?.entries.length ? (
            <span>No results found</span>
          ) : (
            autocomplete?.entries
              .toSorted((a, b) => a.localeCompare(b))
              .map((entry) => (
                <button
                  key={entry}
                  onClick={() => {
                    autocomplete.onClick?.(entry);
                    setFocused(false);
                  }}
                  className={cn(
                    "text-start hover:bg-brown p-1 rounded hover:text-white duration-150 cursor-pointer",
                    classNames?.autocomplete
                  )}
                >
                  {entry}
                </button>
              ))
          )}
        </menu>
      )}
    </fieldset>
  );
};

export default Input;
