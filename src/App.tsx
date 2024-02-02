import { FC, useEffect } from "react";

import NavBar from "./components/NavBar";
import TileViewer from "./components/TileViewer";

import { getPageDetails } from "@api";
import { useSetAtom } from "jotai";
import { pageDetailsAtom } from "@state";

const App: FC = () => {
  const setPageDetails = useSetAtom(pageDetailsAtom);
  const fetchPageDetails = async () => {
    const response = await getPageDetails();
    setPageDetails(response);
  };
  useEffect(() => {
    fetchPageDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-3 pb-5">
      <NavBar />
      <TileViewer />
    </div>
  );
};

export default App;
