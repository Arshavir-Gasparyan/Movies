import { MoviePreview } from "../components/moviePreview/MoviePreview";
import { MovieList } from "../components/movieList/MovieList";
import { SideBar } from "../components/sideBar/SideBar";
import { useGetData } from "../hooks/useGetData";
import { INormalizedData } from "../types/data";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";

export const Home = () => {
  const { featuredData, mutateFeaturedData } = useGetData();
  const [videoVisible, setVideoVisible] = useState(false);

  const handleSelectMovie = (data: INormalizedData) => {
    mutateFeaturedData(data);
    sessionStorage.setItem("id", data.id.toString());
  };

  useEffect(() => {
    setVideoVisible(false);
    const timerId = setTimeout(() => {
      setVideoVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [featuredData.id, setVideoVisible]);

  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.main_block}>
        <MoviePreview videoVisible={videoVisible} data={featuredData} />
        <MovieList onMovieSelect={handleSelectMovie} />
      </div>
    </div>
  );
};
