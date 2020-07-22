import React, { useState } from "react";
import NotificationItem from "./NotificationItem";

export default function HeaderNotifications() {
  const [notifications, setNotifications] = useState([
    {
      content: "5 new members joined today",
      theme: "fa fa-users text-aqua",
    },
    {
      content:
        "Very long description here that may not fit into the page and may cause design problems",
      theme: "fa fa-warning text-yellow",
    },
    {
      content: "5 new members joined",
      theme: "fa fa-users text-red",
    },
    {
      content: "25 sales made",
      theme: "fa fa-shopping-cart text-green",
    },
    {
      content: "You changed your username",
      className: "fa fa-user text-red",
    },
  ]);

  let notificationList = notifications.map((notificationDetails, iterator) => {
    return (
      <NotificationItem
        key={iterator}
        theme={notificationDetails.theme}
        content={notificationDetails.content}
      />
    );
  });

  return (
    <li className="dropdown notifications-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-bell-o"></i>
        <span className="label label-warning">{notifications.length}</span>
      </a>

      <ul className="dropdown-menu">
        <li className="header">
          You have {notifications.length} notifications
        </li>
        <li>
          {/* inner menu: contains the actual data */}
          <div className="slimScrollDiv">
            <ul className="menu">{notificationList}</ul>

            <div className="slimScrollBar"></div>
            <div className="slimScrollRail"></div>
          </div>
        </li>
        <li className="footer">
          <a href="#">View all</a>
        </li>
      </ul>
    </li>
  );
}
