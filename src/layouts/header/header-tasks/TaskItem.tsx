import React from "react";

interface IProps {
  percentage: number;
  content: string;
  theme: string;
}

export default function TaskItem({ percentage, content, theme }: IProps) {
  let stylePercentage = { width: percentage + "%" };

  return (
    <li>
      <a href="#">
        <h3>
          {content}
          <small className="pull-right">{percentage + "%"}</small>
        </h3>
        <div className="progress xs">
          <div className={"progress-bar " + theme} style={stylePercentage}>
            <span className="sr-only">{percentage + "% Complete"} </span>
          </div>
        </div>
      </a>
    </li>
  );
}
