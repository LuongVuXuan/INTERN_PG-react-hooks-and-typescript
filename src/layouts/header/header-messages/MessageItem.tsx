import React from "react";

interface IProps {
  title: string;
  time: string;
  content: string;
  displayPicture: string;
}

export default function MessageItem({
  title,
  time,
  content,
  displayPicture,
}: IProps) {
  return (
    <li>
      {/* start message */}
      <a href="#">
        <div className="pull-left">
          <img src={displayPicture} className="img-circle" alt="User" />
        </div>
        <h4>
          {title}
          <small>
            <i className="fa fa-clock-o"></i> {time}
          </small>
        </h4>
        <p>{content}</p>
      </a>
    </li>
  );
}
