import { TImage } from "./TImage";

export type TWeight = {
  imperial: string;
  metric: string;
};

export type THeight = TWeight;

export interface TBreed {
  id: string | number;
  name: string;
  weight: TWeight;
  life_span: string;
  temperament?: string;
  origin?: string;
  country_code?: string;
  reference_image_id?: string;
  image?: TImage;
  description?: string;
}

export type TCatBreed = TBreed & {
  country_codes: string;
  indoor: number;
  lap?: number;
  alt_names?: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url?: string;
  hypoallergenic: number;
  cat_friendly?: number;
  bidability?: number;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
}

export type TDogBreed = TBreed & {
  height: THeight;
  bred_for?: string;
  breed_group?: string;
  history?: string;
}
