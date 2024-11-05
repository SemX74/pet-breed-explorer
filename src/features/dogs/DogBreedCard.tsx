import { FC } from "react";
import BreedCard from "../../entities/breeds/BreedCard";
import { TDogBreed } from "@/types/TBreed";
import Link from "next/link";
import Button from "../../shared/ui/Button";

interface CatBreedCardProps {
  breed: TDogBreed;
}

const DogBreedCard: FC<CatBreedCardProps> = ({ breed }) => {
  const traits = breed.temperament?.split(",") || [];

  const displayableTraits = traits.length > 3 ? traits.slice(0, 3) : traits;

  return (
    <BreedCard type="dogs">
      <BreedCard.Image image={breed.image} />
      <BreedCard.Title>{breed.name}</BreedCard.Title>
      <BreedCard.Description>
        {breed.description || breed.bred_for}
      </BreedCard.Description>
      <div className="w-full flex mt-auto flex-wrap gap-y-2.5 mb-2.5 items-center">
        {displayableTraits.map((temperament, index) => (
          <span
            key={index}
            className="text-xs flex-1 text-center px-1 whitespace-nowrap text-brown-grey p-0.5 bg-brown rounded-md mr-1"
          >
            {temperament}
          </span>
        ))}
        {traits.length > 3 && (
          <span className="text-xs flex-1 text-center px-1 whitespace-nowrap text-brown-grey p-0.5 bg-brown rounded-md mr-1">
            + {traits.length - 3} more...
          </span>
        )}
      </div>
      <Link href={`dogs/breeds/${breed.id}`}>
        <Button className="w-full">See more</Button>
      </Link>
    </BreedCard>
  );
};

export default DogBreedCard;
