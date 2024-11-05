import { catsApi } from "@/features/api/services/cats-api";
import { dogsApi } from "@/features/api/services/dogs-api";
import { mergeBreeds } from "@/widgets/breeds/helpers/merge-breeds";
import BreedList from "@/widgets/breeds/ui/BreedList";
import SearchBreedForm from "@/widgets/breeds/ui/SearchBreedForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

  const catBreeds = await catsApi.getBreeds();
  const dogBreeds = await dogsApi.getBreeds();

  const mergedBreeds = mergeBreeds({
    cats: catBreeds,
    dogs: dogBreeds,
  }).toSorted(() => Math.random() - 0.5);

  const breedNames = mergedBreeds.map((breed) => breed.name);

  const filteredBreeds = mergedBreeds.filter(
    (breed) => !query || breed.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBreedForm breeds={breedNames} />
      <BreedList breeds={filteredBreeds} />
    </>
  );
}
