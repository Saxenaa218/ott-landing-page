import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";

import { pageDetailsAtom, searchTextAtom } from "@state";

const NavBar = () => {
  const [searchMode, setSearchMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [seachText, setSearchText] = useAtom(searchTextAtom);
  const pageDetailsValue = useAtomValue(pageDetailsAtom);

  useEffect(() => {
    if (searchMode) inputRef.current?.focus();
    else setSearchText("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMode]);

  return (
    <nav className="flex justify-between items-center pt-3 mb-5 mx-1">
      <div className="flex items-center gap-5">
        <img
          src="https://test.create.diagnal.com/images/Back.png"
          alt="back button"
          className="w-5 h-fit"
          onClick={() => searchMode && setSearchMode(false)}
        />
        {!searchMode && (
          <p className="text-2xl">{pageDetailsValue?.page?.title}</p>
        )}
      </div>
      {!searchMode && (
        <img
          src="https://test.create.diagnal.com/images/search.png"
          loading="lazy"
          alt="search button"
          className="w-5"
          onClick={() => setSearchMode(true)}
        />
      )}
      {searchMode && (
        <div className="flex flex-1">
          <input
            ref={inputRef}
            value={seachText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
            className="h-full w-full px-4 py-1 rounded-md bg-transparent focus:border-none ml-2"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
