import * as React from "react";
import "./sidebar.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return <div className="sidebar"></div>;
};

export default SideBar;
