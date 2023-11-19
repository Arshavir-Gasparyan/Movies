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
    <div style={{ height: "25%" }}>
      <ul className={className}>
        {menuList.map((item) => {
          return (
            <li key={item}>
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
