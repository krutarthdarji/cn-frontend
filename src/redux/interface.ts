export interface Action {
  type: string;
  payload?: {
    status?: string | null;
    data?: any;
    error?: boolean;
    errorMessage?: string | null;
  };
}
export type CityData = {
  date: string;
  city: {
    name: string;
    picture: string;
  };
  tempType: string;
  temp: number;
};
export type TemperatureData = {
  date: string;
  temp: number;
};
export type FormattedCityData = {
  name: string;
  picture: string;
  data: TemperatureData[];
};
export type Home = {
  status: string;
  loading: boolean;
  data: null | CityData[];
  formattedData: null | FormattedCityData[];
  selectedCityData: null | FormattedCityData;
  error: false;
  errorMessage: null;
};
export type UserPrefData = {
  hiddenCities: string[];
};
export type DefaultState = {
  global: {
    home: Home;
    userPreferences: UserPrefData;
  };
};
