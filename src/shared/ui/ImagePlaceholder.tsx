import { FC } from "react";
import { cn } from "../helpers/cn";

interface ImagePlaceholderProps {
  className?: string;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({ className }) => {
  return (
    <figure
      className={cn(
        "rounded border-2 text-brown-grey text-6xl flex items-center justify-center border-brown-dark bg-brown-dark",
        className
      )}
    >
      ?
    </figure>
  );
};

export default ImagePlaceholder;
