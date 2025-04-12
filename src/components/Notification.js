import React from "react";
import { IoNotifications } from "react-icons/io5";

const Notification = () => {
  return (
    <div>
      <button className="icon-button">
        <IoNotifications />
        <span className="notification-badge">3</span>
      </button>
    </div>
  );
};

export default Notification;
