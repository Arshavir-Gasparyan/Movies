import { AdditionalMenuTitles } from "../../constants/menuTitles";

interface AdditionalMenuListProps {
  menuList: AdditionalMenuTitles[];
  className?: string;
}

export const AdditionalMenuList = ({
  menuList,
  className,
}: AdditionalMenuListProps) => {
  return (
    <ul className={className}>
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
