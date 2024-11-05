import { TDogBreed } from "@/types/TBreed";
import { apiRequest } from "../requests/api-request";
import { TImage } from "@/types/TImage";

export const dogsApi = {
  getBreeds: async () => {
    return (await apiRequest().get(`dogs/breeds`)) as Promise<TDogBreed[]>;
  },
  getBreed: async (id: string) => {
    return (await apiRequest().get(`dogs/breeds/${id}`)) as Promise<TDogBreed>;
  },
  getBreedImage: async (id: string | undefined) => {
    if (!id) return null;

    return (await apiRequest().get(`dogs/images/${id}`)) as Promise<
      TImage & { breeds: TDogBreed[] }
    >;
  },
};
