import React from "react";

interface IProps {
  theme: string | undefined;
  content: string;
}

export default function NotificationItem({ theme, content }: IProps) {
  return (
    <li key={"header-notification-item"}>
      <a href="#">
        <i className={theme}></i> {content}
      </a>
    </li>
  );
}
