import { catsApi } from "@/features/api/services/cats-api";
import BreedInfoList from "@/features/shared/BreedInfoList";
import ImagePlaceholder from "@/shared/ui/ImagePlaceholder";
import Image from "next/image";

export default async function CatsBreedPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const breed = await catsApi.getBreed(id);
  const image = await catsApi.getBreedImage(breed.reference_image_id);

  return (
    <div className="flex gap-12 mt-12">
      <figure className="h-96 w-1/3 bg-brown-dark rounded-md border-2 border-brown-dark">
        {image?.url ? (
          <Image
            alt=""
            className="object-contain h-full w-full"
            src={image.url}
            width={image.width}
            height={image.height}
          />
        ) : (
          <ImagePlaceholder className="w-full h-full" />
        )}
      </figure>
      <section className="flex w-2/3 flex-col gap-5 text-xl">
        <BreedInfoList breed={breed} />
      </section>
    </div>
  );
}
