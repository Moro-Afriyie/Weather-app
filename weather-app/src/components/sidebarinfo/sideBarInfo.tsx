import * as React from "react";
import { useDispatch } from "react-redux";
import rainyIcon from "../../assets/Shower.png";
import { toggleSearch } from "../../store/actions/toggleSearchActions";
import "./sideBarInfo.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISideBarInfoProps {}

const SideBarInfo: React.FunctionComponent<ISideBarInfoProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar__info">
      <div className="sidebar__search">
        <button
          className="search__btn"
          onClick={() => dispatch(toggleSearch())}
        >
          Search for places
        </button>
        <div className="gps">
          <span className="material-icons">gps_fixed</span>
        </div>
      </div>
      <div className="sidebar__details">
        <div className="weather__icon">
          <img src={rainyIcon} alt="rainy" />
        </div>
        <div className="weather__temperature">
          <p className="temperature">15</p>
          <span className="degreecelcius">&#8451;</span>
          {/* <span className="degreefarenheit">&#8457;</span> */}
        </div>
        <div className="weather__description">
          <p>Shower</p>
        </div>
      </div>
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

export default SideBarInfo;
