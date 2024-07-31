export type TileType = {
  name: string;
  "poster-image": string;
};

export type PageContent = {
  title: string;
  "total-content-items": string;
  "page-num-requested": string;
  "page-size-requested": string;
  "page-size-returned": string;
  "content-items": {
    content: TileType[];
  };
};

export type PageDetails = {
  page: PageContent;
};
