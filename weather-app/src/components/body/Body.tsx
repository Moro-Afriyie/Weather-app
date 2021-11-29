import * as React from "react";
import "./body.scss";
import rainyIcon from "../../assets/Shower.png";
import ProgressBar from "../progressBar/ProgressBar";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBodyProps {}

const Body: React.FunctionComponent<IBodyProps> = (props) => {
  return (
    <div className="body">
      <div className="container">
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
        <div className="weekly__weather">
          {[1, 2, 3, 4, 5].map((card) => {
            return (
              <div className="weather__card" key={card}>
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
            );
          })}
        </div>
        <div className="weather__highlights">
          <p className="heading">Today&apos;s Highlights</p>
          <div className="card__container">
            <div className="card">
              <p className="title">Wind Status</p>
              <div className="quantity">
                <p>7</p>
                <span>mph</span>
              </div>
              <p className="icon">WSW</p>
            </div>
            <div className="card">
              <p className="title">Humidity</p>
              <div className="quantity">
                <p>84</p>
                <span>%</span>
              </div>
              <div className="progressbar">
                <ProgressBar humidity="80" />
              </div>
            </div>
            <div className="card2">
              <p className="title">visibility</p>
              <div className="quantity">
                <p>6,4</p>
                <span>miles</span>
              </div>
            </div>
            <div className="card2">
              <p className="title">Air Pressure</p>
              <div className="quantity">
                <p>998 </p>
                <span>mb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
