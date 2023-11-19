import clsx from "clsx";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  name: string;
  imageSrc?: string;
  className?: string;
}

export const Avatar = ({ imageSrc, name, className }: AvatarProps) => {
  return (
    <div className={clsx(styles.avatar, className)}>
      <img alt="name" src={imageSrc} />
      <span>{name}</span>
    </div>
  );
};
