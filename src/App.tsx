import { FC } from "react";

import NavBar from "./components/NavBar";
import TileViewer from "./components/TileViewer";

const App: FC = () => {
  return (
    <div className="px-3 pb-5 font-titillium bg-black text-white">
      <NavBar />
      <TileViewer />
    </div>
  );
};

export default App;
