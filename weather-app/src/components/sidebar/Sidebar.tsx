import * as React from "react";
import Search from "../search/Search";
import SideBarInfo from "../sidebarinfo/sideBarInfo";
import "./sidebar.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <div className="sidebar">
      {/* <SideBarInfo /> */}
      <Search />
    </div>
  );
};

export default SideBar;
