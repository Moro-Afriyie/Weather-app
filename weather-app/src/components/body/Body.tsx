import * as React from "react";
import "./body.scss";
import rainyIcon from "../../assets/Shower.png";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBodyProps {}

const Body: React.FunctionComponent<IBodyProps> = (props) => {
  return (
    <div className="body">
      <header className="header">
        <div className="celcius active">
          <sup>
            <span>&#176;</span>
          </sup>
          <p>C</p>
        </div>
        <div className="farenheit">
          <sup>
            <span>&#176;</span>
          </sup>
          <p>F</p>
        </div>
      </header>
      <div className="week__weather">
        {/* {[1, 2, 3, 4, 5].map((card) => {
          return (
            <div className="weather__card" key={card}>
              <p className="day">Sun, 7 Jun</p>
              <div className="weather__icon">
                <img src={rainyIcon} alt="rainy" />
              </div>
              <div className="temperature">
                <div className="max">
                  <p>16</p>
                  <span>&#8451;</span>
                </div>
                <div className="min">
                  <p>16</p>
                  <span>&#8451;</span>
                </div>
              </div>
            </div>
          );
        })} */}
        <div className="weather__card">
          <p className="day">Sun, 7 Jun</p>
          <div className="weather__icon">
            <img src={rainyIcon} alt="rainy" />
          </div>
          <div className="temperature">
            <div className="max">
              <p>16</p>
              <sup>
                <span>&#176;</span>
              </sup>
              <p>C</p>
            </div>
            <div className="min">
              <p>11</p>
              <sup>
                <span>&#176;</span>
              </sup>
              <p>C</p>
            </div>
          </div>
        </div>
      </div>
      <div className="weather__highlights">
        <p className="heading">Today&apos;s Highlights</p>
        <div className="card">
          <p className="title">Wind Status</p>
          <div className="quantity">
            <p>7</p>
            <span>mph</span>
          </div>
          <p className="icon">7mph</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
