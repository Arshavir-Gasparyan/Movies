import dayjs from "dayjs";
import { INormalizedData } from "../types/data";

const sortDataByDate = (data: INormalizedData[]) => {
  return data.sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1));
};

export const sortData = (data: INormalizedData[] = [], id: number) => {
  const newData = data;

  const selectedItem = data.find((item, index) => {
    if (item.id === id) {
      newData.splice(index, 1);
      return true;
    }
  });

  if (selectedItem) {
    return [selectedItem, ...sortDataByDate(newData)];
  }

  return data;
};
