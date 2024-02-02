import { useAtomValue } from "jotai";
import { pageDetailsAtom } from "@state";
import Tile from "@components/Tile";

const TileViewer = () => {
  const pageDetails = useAtomValue(pageDetailsAtom);
  const tiles = pageDetails?.page["content-items"].content;

  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-6">
      {tiles?.map((tile) => (
        <Tile name={tile.name} poster-image={tile["poster-image"]} />
      ))}
    </div>
  );
};

export default TileViewer;
