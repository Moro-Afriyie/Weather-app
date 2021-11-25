import * as React from "react";
import "./sidebar.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
    </div>
  );
};

export default SideBar;
