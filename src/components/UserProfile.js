import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { users } from "../data/mockData";

const UserProfile = () => {
  const [username, setUsername] = useState("Admin");
  const [imageUrl, setImageUrl] = useState("/images/default.jpeg");

  const handleUserChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setImageUrl(users[newUsername]);
  };

  return (
    <div className="user-profile">
      <div className="avatar">
        {imageUrl ? (
          <img src={imageUrl} alt="User Avatar" className="avatar-image" />
        ) : (
          <RxAvatar />
        )}
      </div>
      <span className="username">{username}</span>

      <div className="user-select">
        <select value={username} onChange={handleUserChange}>
          <option value="Admin">Admin</option>
          <option value="User1">User1</option>
          <option value="User2">User2</option>
        </select>
      </div>
    </div>
  );
};

export default UserProfile;
