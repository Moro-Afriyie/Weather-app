import * as React from "react";

interface IProgressBarProps {
  humidity: string;
}

const ProgressBar: React.FunctionComponent<IProgressBarProps> = ({
  humidity,
}: IProgressBarProps) => {
  return (
    <div className="progress">
      <div
        className="progress-done"
        style={{
          opacity: 1,
          width: `${humidity}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
