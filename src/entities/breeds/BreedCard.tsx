import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import type { TImage } from "@/types/TImage";
import ImagePlaceholder from "@/shared/ui/ImagePlaceholder";

interface BreedCardProps extends PropsWithChildren {
  type: "cats" | "dogs";
}

const BreedCardComponent: FC<BreedCardProps> = ({ children, type }) => {
  return (
    <div className="bg-brown-grey flex flex-col relative border-brown-dark p-5 rounded-lg border-2">
      <span className="absolute -top-3 -right-3 text-3xl scale-110">
        {type === "cats" ? "🐈" : "🐶"}
      </span>
      {children}
    </div>
  );
};

const BreedImage = ({ image }: { image: TImage | undefined }) => {
  return image ? (
    <Image
      className="rounded border-2 bg-brown-dark p-1 border-brown-dark w-full h-40 object-contain"
      alt="Breed image"
      src={image?.url}
      width={image?.width}
      height={image?.height}
    />
  ) : (
    <ImagePlaceholder className="w-full h-40" />
  );
};

const BreedTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="text-brown-dark text-lg mt-2.5 font-bold">{children}</h2>
  );
};
const BreedDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-brown-dark mb-5 text-sm line-clamp-3">{children}</p>
  );
};

const BreedCard = Object.assign(BreedCardComponent, {
  Image: BreedImage,
  Title: BreedTitle,
  Description: BreedDescription,
});

export default BreedCard;
