import { FC } from "react";
import BreedCard from "../../entities/breeds/BreedCard";
import { TCatBreed } from "@/types/TBreed";
import Link from "next/link";
import Button from "../../shared/ui/Button";

interface CatBreedCardProps {
  breed: TCatBreed;
}

const CatBreedCard: FC<CatBreedCardProps> = ({ breed }) => {
  return (
    <BreedCard type="cats">
      <BreedCard.Image image={breed.image} />
      <BreedCard.Title>{breed.name}</BreedCard.Title>
      <BreedCard.Description>{breed.description}</BreedCard.Description>
      <Link className="mt-auto" href={`cats/breeds/${breed.id}`}>
        <Button className="w-full">See more</Button>
      </Link>
    </BreedCard>
  );
};

export default CatBreedCard;
