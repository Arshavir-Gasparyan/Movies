import clsx from "clsx";
import { AdditionalMenuTitles } from "../../constants/menuTitles";
import styles from "./AdditionalMenuList.module.scss";

interface AdditionalMenuListProps {
  menuList: AdditionalMenuTitles[];
  className?: string;
}

export const AdditionalMenuList = ({
  menuList,
  className,
}: AdditionalMenuListProps) => {
  return (
    <ul className={clsx(className, styles.additional_menu_list)}>
      {menuList.map((item) => {
        return (
          <li key={item}>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};
