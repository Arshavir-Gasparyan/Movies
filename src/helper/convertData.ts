import dayjs from "dayjs";
import { Idata, INormalizedTendingNowData } from "../types/data";

export const getNormalizedTendingNowData = ({
  TendingNow,
}: Idata): INormalizedTendingNowData[] => {
  return TendingNow.map((item) => {
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
};
