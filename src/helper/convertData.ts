import dayjs from "dayjs";
import { Idata, INormalizedData } from "../types/data";

export const getNormalizedTendingNowData = ({
  TendingNow,
}: Idata): INormalizedData[] => {
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
