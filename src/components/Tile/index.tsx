import { FC } from "react";

import { BASE_URL } from "@common";
import { TileType } from "src/api/types";
import ImageWrapper from "@components/Image";

const Tile: FC<Omit<TileType, "id">> = ({
  "poster-image": posterImage,
  name,
  ...props
}) => {
  const imageUrl = `${BASE_URL}/images/${posterImage}`;
  const fallbackImageUrl =
    BASE_URL + "/images/placeholder_for_missing_posters.png";
  return (
    <>
      <ImageWrapper
        src={imageUrl}
        alt={name}
        className="w-full"
        fallbackSrc={fallbackImageUrl}
        {...props}
      />
      <p className="mt-1">{name}</p>
    </>
  );
};

export default Tile;
