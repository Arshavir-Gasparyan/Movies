import styles from "./SideBar.module.scss";

import Search from "../../icons/Search.png";
import Home from "../../icons/Home.png";
import TVShows from "../../icons/TVShows.png";
import Movies from "../../icons/Movies.png";
import Genres from "../../icons/Genres.png";
import WatchLater from "../../icons/WatchLater.png";
import AvatarIcon from "../../icons/avatar.png";
import { useState } from "react";
import { Avatar } from "../avatar/Avatar";
import { MenuList } from "../menuList/MenuList";
import { AdditionalMenuTitles, MenuTitles } from "../../constants/menuTitles";
import { AdditionalMenuList } from "../additionalMenuList/AdditionalMenuList";

const SideBarMenuListMap = [
  { title: MenuTitles.SEARCH, icon: Search },
  { title: MenuTitles.HOME, icon: Home },
  { title: MenuTitles.TVSHOWS, icon: TVShows },
  { title: MenuTitles.MOVIES, icon: Movies },
  { title: MenuTitles.GENRES, icon: Genres },
  { title: MenuTitles.WATCHLATER, icon: WatchLater },
];

const SideBarAdditionalMenuListMap = [
  AdditionalMenuTitles.LANGUAGE,
  AdditionalMenuTitles.GETHELP,
  AdditionalMenuTitles.EXIT,
];

export const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState<MenuTitles>(MenuTitles.HOME);
  return (
    <div className={styles.side_bar_container}>
      <Avatar name="Daniel" imageSrc={AvatarIcon} className={styles.avatar} />
      <MenuList
        menuList={SideBarMenuListMap}
        onMenuItemSelect={setSelectedItem}
        selectedItem={selectedItem}
        className={styles.menu_list}
      />
      <AdditionalMenuList
        className={styles.additional_menu_list}
        menuList={SideBarAdditionalMenuListMap}
      />
    </div>
  );
};
