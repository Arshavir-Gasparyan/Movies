import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { Idata, INormalizedTendingNowData } from "../types/data";

export const useGetData = (data: Idata) => {
  const [tendingNowData, setTendingNowData] =
    useState<INormalizedTendingNowData[]>();

  const getTendingNowData = useCallback(() => {
    const normalizedTEndingNowData = data.TendingNow.map((item) => {
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
  }, [data.TendingNow]);

  useEffect(() => {
    getTendingNowData();
  }, [getTendingNowData]);

  return { tendingNowData };
};
