import * as React from "react";
import "./body.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBodyProps {}

const Body: React.FunctionComponent<IBodyProps> = (props) => {
  return (
    <div className="body">
      <h1>Body</h1>
    </div>
  );
};

export default Body;
