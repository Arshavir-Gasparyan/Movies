import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { Idata, INormalizedData } from "../types/data";
import data from "../data.json";

export const useGetData = () => {
  const { Featured, TendingNow }: Idata = data;

  const [tendingNowData, setTendingNowData] = useState<INormalizedData[]>();
  const [featuredData, setFeaturedData] = useState<INormalizedData>({
    id: Number(Featured.Id),
    title: Featured.Title,
    coverImage: Featured.CoverImage,
    titleImage: Featured.TitleImage,
    date: dayjs(Featured.Date),
    releaseYear: Number(Featured.ReleaseYear),
    mpaRating: Featured.MpaRating,
    category: Featured.Category,
    duration: Number(Featured.Duration),
    description: Featured.Description,
  });

  const getTendingNowData = useCallback(() => {
    const normalizedTEndingNowData = TendingNow.map((item) => {
      return {
        id: Number(item.Id),
        title: item.Title,
        coverImage: item.CoverImage,
        titleImage: item.TitleImage,
        date: dayjs(item.Date),
        releaseYear: Number(item.ReleaseYear),
        mpaRating: item.MpaRating,
        category: item.Category,
        duration: Number(item.Duration),
        videoUrl: item.VideoUrl,
        description: item.Description,
      };
    });

    setTendingNowData(normalizedTEndingNowData);
  }, [TendingNow]);

  const mutateFeaturedData = (data: INormalizedData) => {
    setFeaturedData(data);
  };

  useEffect(() => {
    getTendingNowData();
  }, [getTendingNowData]);

  return { tendingNowData, featuredData, mutateFeaturedData };
};
