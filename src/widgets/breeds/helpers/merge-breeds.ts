import { BreedWithType } from "../types";

export const mergeBreeds = <T extends Record<string, Record<string, any>[]>>(
  breeds: T
) => {
  const result = Object.entries(breeds).flatMap(([type, breedArray]) =>
    breedArray.map((breed) => ({ ...breed, type }))
  );

  return result as {
    [K in keyof T]: BreedWithType<T[K][number], K>;
  }[keyof T][];
};
