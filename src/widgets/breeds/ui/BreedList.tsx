import { TCatBreed, TDogBreed } from "@/types/TBreed";
import { FC } from "react";
import CatBreedCard from "@/features/cats/CatBreedCard";
import DogBreedCard from "@/features/dogs/DogBreedCard";
import { BreedWithType } from "../types";

interface BreedListProps {
  breeds: (
    | BreedWithType<TCatBreed, "cats">
    | BreedWithType<TDogBreed, "dogs">
  )[];
}

const BreedList: FC<BreedListProps> = ({ breeds }) => {
  return (
    <section className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-12">
      {breeds.map((breed) =>
        breed.type === "cats" ? (
          <CatBreedCard breed={breed} key={breed.id} />
        ) : (
          <DogBreedCard breed={breed} key={breed.id} />
        )
      )}
    </section>
  );
};

export default BreedList;
