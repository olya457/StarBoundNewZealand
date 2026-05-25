import type {ImageSourcePropType} from 'react-native';

export type CategoryId = 'dark' | 'mountain' | 'lake' | 'coast';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Place = {
  id: string;
  name: string;
  categoryId: CategoryId;
  categoryLabel: string;
  shortDescription: string;
  longDescription: string;
  address: string;
  coordinates: Coordinates;
  image: ImageSourcePropType;
  bestTime: string;
  travelTip: string;
  safetyNote: string;
};

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
};
