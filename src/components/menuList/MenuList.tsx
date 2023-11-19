import clsx from "clsx";
import { MenuTitles } from "../../constants/menuTitles";
import styles from "./MenuList.module.scss";

interface MenuListProps {
  menuList: { title: MenuTitles; icon: string }[];
  onMenuItemSelect: (item: MenuTitles) => void;
  selectedItem: MenuTitles;
  className?: string;
}

export const MenuList = ({
  menuList,
  onMenuItemSelect,
  className,
  selectedItem,
}: MenuListProps) => {
  return (
    <ul className={className}>
      {menuList.map((item) => {
        return (
          <li
            onClick={() => onMenuItemSelect(item.title)}
            key={item.title}
            className={clsx(selectedItem === item.title && styles.selected)}
          >
            <img alt={item.title} src={item.icon}></img>
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
};
