import Button from "@/shared/ui/Button";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="justify-between items-center w-full border-brown-dark px-10 bg-brown-grey mx-auto flex font-bold rounded-full border-4 my-2 py-2.5">
      <h1 className="text-3xl text-start ">
        Breeds website
      </h1>

      <Link href="/">
        <Button>Home</Button>
      </Link>
    </header>
  );
};

export default Header;
