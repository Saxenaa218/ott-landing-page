import { pageDetailsAtom } from "@state";
import { useAtomValue } from "jotai";

const NavBar = () => {
  const pageDetailsValue = useAtomValue(pageDetailsAtom);
  return (
    <nav className="flex justify-between items-center mt-3 mb-5 mx-1">
      <div className="flex items-center gap-5">
        <img
          src="https://test.create.diagnal.com/images/Back.png"
          loading="lazy"
          alt="back button"
          className="w-5 h-fit"
        />
        <p className="text-2xl">{pageDetailsValue?.page?.title}</p>
      </div>
      <img
        src="https://test.create.diagnal.com/images/search.png"
        loading="lazy"
        alt="search button"
        className="w-5"
      />
    </nav>
  );
};

export default NavBar;
