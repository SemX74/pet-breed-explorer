import { cn } from "@/shared/helpers/cn";
import { ComponentPropsWithoutRef, FC } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "px-5 py-2 rounded-full bg-brown-dark text-brown-grey",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
