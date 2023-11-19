import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import styles from "./MovieList.module.scss";
import data from "../../data.json";
import { useGetData } from "../../hooks/useGetData";
import { INormalizedTendingNowData } from "../../types/data";

interface MovieListProps {
  onMovieSelect: (data: INormalizedTendingNowData) => void;
}

export const MovieList = ({ onMovieSelect }: MovieListProps) => {
  const { tendingNowData } = useGetData(data);
  console.log(tendingNowData);
  return (
    <ScrollContainer className={styles.movies_container}>
      {tendingNowData &&
        tendingNowData.map((item) => (
          <img
            onClick={() => onMovieSelect(item)}
            className={styles.image}
            key={item.id}
            alt={item.title}
            src={item.coverImage}
          />
        ))}
    </ScrollContainer>
  );
};
