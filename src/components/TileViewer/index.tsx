import { useCallback, useRef, useState } from "react";
import { useAtomValue } from "jotai";

import { pageDetailsAtom, searchTextAtom } from "@state";
import Tile from "@components/Tile";
import useTileFetch from "@hooks/useTileFetch";

const TileViewer = () => {
  const pageDetails = useAtomValue(pageDetailsAtom);
  const seachText = useAtomValue(searchTextAtom);
  const tiles = pageDetails?.page["content-items"].content.filter((itm) =>
    itm.name.toLowerCase().includes(seachText.toLowerCase())
  );

  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  const { loading, hasMore } = useTileFetch(pageNumber);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-6 tiles-view">
      {tiles?.map((tile, index) =>
        index === tiles.length - 1 ? (
          <div ref={lastElementRef}>
            <Tile name={tile.name} poster-image={tile["poster-image"]} />
          </div>
        ) : (
          <div>
            <Tile name={tile.name} poster-image={tile["poster-image"]} />
          </div>
        )
      )}
    </div>
  );
};

export default TileViewer;
