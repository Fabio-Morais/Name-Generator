import { fakeDataset } from '../fakeData/dataset';

export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomArrayPick = (gender: string): string[] => {
  const datasetFilter = fakeDataset.filter((array) => {
    return array[1] === gender;
  });

  const randomIndex = random(0, datasetFilter.length - 1);

  return datasetFilter[randomIndex];
};
