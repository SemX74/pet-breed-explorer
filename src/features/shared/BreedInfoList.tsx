import { TBreed } from "@/types/TBreed";
import { FC } from "react";

interface BreedInfoListProps {
  breed: TBreed;
}

const BreedInfoList: FC<BreedInfoListProps> = ({ breed }) => {
  const info = [
    { title: "Description", value: breed.description },
    { title: "Origin", value: breed.origin },
    { title: "Life span", value: breed.life_span },
    { title: "Temperament", value: breed.temperament },
  ];

  return (
    <>
      <h1 className="text-3xl text-start">
        <strong>Name: </strong>
        {breed.name}
      </h1>
      {info
        .filter((x) => !!x.value)
        .map((item) => (
          <p key={item.title}>
            <strong>{item.title}</strong>: {item.value}
          </p>
        ))}
    </>
  );
};

export default BreedInfoList;
