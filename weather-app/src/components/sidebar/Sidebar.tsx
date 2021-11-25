import * as React from "react";
import "./sidebar.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <button className="search__btn">search for places</button>
        <div className="gps">
          <span className="material-icons">gps_fixed</span>
        </div>
      </div>
      <div className="sidebar__cloud"></div>
    </div>
  );
};

export default SideBar;
