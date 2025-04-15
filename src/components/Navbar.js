import React from "react";
import Searchbar from "./Searchbar";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-text">Augur</span>
          <span className="logo-accent">Analytics</span>
        </div>
      </div>
      <div className="navbar-middle">
        <Searchbar />
      </div>
      <div className="navbar-right">
        <Notification />
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navbar;
