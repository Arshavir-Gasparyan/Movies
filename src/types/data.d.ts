import dayjs from "dayjs";

export interface IFeatured {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
}

export interface ITendingNow {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
}

export interface Idata {
  Featured: IFeatured;
  TendingNow: ITendingNow[];
}

export interface INormalizedData {
  id: number;
  title: string;
  coverImage: string;
  titleImage: string;
  date: dayjs.Dayjs;
  releaseYear: number;
  mpaRating: string;
  category: string;
  duration: number;
  videoUrl?: string;
  description: string;
}
