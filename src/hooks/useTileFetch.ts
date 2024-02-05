import { getPageDetails } from "@api";
import { pageDetailsAtom } from "@state";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

const useTileFetch = (pageNumber: number) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const setPageDetails = useSetAtom(pageDetailsAtom);

  useEffect(() => {
    async function fetchPages() {
      setLoading(true);

      try {
        const newPageDetails = await getPageDetails(pageNumber);
        if (newPageDetails.page["content-items"].content.length > 0) {
          setPageDetails((prevPageDetails) => {
            if (!prevPageDetails?.page?.["content-items"])
              return newPageDetails;
            const tempPageDetails = { ...prevPageDetails };
            tempPageDetails.page["content-items"].content = [
              ...tempPageDetails.page["content-items"].content,
              ...newPageDetails.page["content-items"].content,
            ];
            if (
              tempPageDetails.page["content-items"].content.length ===
              parseInt(tempPageDetails.page["total-content-items"])
            ) {
              setHasMore(false);
            }
            return tempPageDetails;
          });
        } else {
          setHasMore(false);
        }
      } catch (e) {
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }

    fetchPages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return { loading, hasMore };
};

export default useTileFetch;
