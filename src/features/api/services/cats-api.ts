import { TCatBreed } from "@/types/TBreed";
import { apiRequest } from "../requests/api-request";
import { TImage } from "@/types/TImage";

export const catsApi = {
  getBreeds: async () => {
    return (await apiRequest().get(`cats/breeds`)) as Promise<TCatBreed[]>;
  },
  getBreed: async (id: string) => {
    return (await apiRequest().get(`cats/breeds/${id}`)) as Promise<TCatBreed>;
  },
  getBreedImage: async (id: string | undefined) => {
    if (!id) return null;
    return (await apiRequest().get(`cats/images/${id}`)) as Promise<
      TImage & { breeds: TCatBreed[] }
    >;
  },
};
