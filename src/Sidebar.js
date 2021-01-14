import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQEChNfW7ayN3Q/profile-displaybackgroundimage-shrink_200_800/0/1590748143390?e=1614816000&v=beta&t=BSthvtAzYn7Ubuko8-6KlVLr4aU-N9UvBA7c5KzrI70"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your video</p>
          <p className="sidebar__statNumber">1200</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwaredevelopment")}
        {recentItem("redux")}
        {recentItem("javascript")}
      </div>
    </div>
  );
}

export default Sidebar;
