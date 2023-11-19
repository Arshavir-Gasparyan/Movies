import { useState } from "react";
import { MovieList } from "../components/movieList/MovieList";
import { SideBar } from "../components/sideBar/SideBar";
import { INormalizedTendingNowData } from "../types/data";

export const Home = () => {
  const [selectedMovie, setSelectedMovie] =
    useState<INormalizedTendingNowData>();

  const handleSelectMovie = (data: INormalizedTendingNowData) => {
    setSelectedMovie(data);
  };
  console.log(selectedMovie);
  return (
    <div className="home">
      <SideBar />
      <MovieList onMovieSelect={handleSelectMovie} />
    </div>
  );
};
