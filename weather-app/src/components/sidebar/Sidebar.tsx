import * as React from "react";
import "./sidebar.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <button className="search__btn">Search for places</button>
        <div className="gps">
          <span className="material-icons">gps_fixed</span>
        </div>
      </div>
      <div className="sidebar__details"></div>
      <div className="sidebar__date">
        <p>Today</p> . <p>Fri, 5 Jun</p>
      </div>
      <div className="sidebar__location">
        <span className="material-icons">place</span>
        <p>Helsinki</p>
      </div>
    </div>
  );
};

export default SideBar;
