import styles from "./SideBar.module.scss";

import Search from "../../icons/Search.png";
import Home from "../../icons/Home.png";
import TVShows from "../../icons/TVShows.png";
import Movies from "../../icons/Movies.png";
import Genres from "../../icons/Genres.png";
import WatchLater from "../../icons/WatchLater.png";
import AvatarIcon from "../../icons/avatar.png";
import { useState } from "react";
import clsx from "clsx";
import { Avatar } from "../avatar/Avatar";

const SideBarChildrenMap = [
  { title: "Search", icon: Search },
  { title: "Home", icon: Home },
  { title: "TV Shows", icon: TVShows },
  { title: "Movies", icon: Movies },
  { title: "Genres", icon: Genres },
  { title: "Watch Later", icon: WatchLater },
];

export const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  return (
    <div className={styles.side_bar_container}>
      <Avatar name="Daniel" imageSrc={AvatarIcon} className={styles.avatar} />
      <ul>
        {SideBarChildrenMap.map((item) => {
          return (
            <li
              onClick={() => setSelectedItem(item.title)}
              key={item.title}
              className={clsx(selectedItem === item.title && styles.selected)}
            >
              <img alt={item.title} src={item.icon}></img>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
