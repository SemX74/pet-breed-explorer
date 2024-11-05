"use client";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback, useState } from "react";

interface SearchBreedForm {
  breeds: string[];
}

const SearchBreedForm: FC<SearchBreedForm> = ({ breeds }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [search, setSearch] = useState<string>(query);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const applyQuery = useCallback(
    (key: string, value: string) =>
      router.push(pathname + "?" + createQueryString(key, value)),
    [createQueryString, pathname, router]
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleReset = () => {
    router.push(pathname);
    setSearch("");
  };

  const filteredBreeds = breeds.filter((breed) =>
    breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex mx-auto w-fit gap-2.5 items-center">
      <Input
        autocomplete={{
          entries: filteredBreeds,
          onClick: (entry) => {
            applyQuery("query", entry);
            setSearch(entry);
          },
        }}
        value={search}
        onChange={handleChange}
        placeholder="Search breed..."
      />
      {query && (
        <Button className="gap-5" onClick={handleReset}>
          Clear search
        </Button>
      )}
    </div>
  );
};

export default SearchBreedForm;
