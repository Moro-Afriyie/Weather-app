import * as React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/rootReducer";
import Search from "../search/Search";
import SideBarInfo from "../sidebarinfo/sideBarInfo";
import "./sidebar.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  const toggleSearch = useSelector(
    (state: IRootState) => state.toggleSearch.toggleSearch
  );

  return (
    <div className="sidebar">{toggleSearch ? <Search /> : <SideBarInfo />}</div>
  );
};

export default SideBar;
