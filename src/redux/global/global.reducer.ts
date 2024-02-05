import { Action } from "../interface";
import {
  API_FAILURE,
  HIDE_CITY,
  LOADING_API_DATA,
  RESET_ALL,
  RESET_API_DATA,
  SET_API_DATA,
  SET_FORMATTED_DATA,
  SET_SELECTED_CITY,
  SHOW_CITY,
  UNSET_ERROR,
} from "./global.types";

const INITIAL_STATE = {
  home: {
    status: "idle",
    loading: false,
    data: null,
    formattedData: null,
    selectedCityData: null,
    error: false,
    errorMessage: null,
  },
  userPreferences: {
    hiddenCities: [],
  },
};

const globalReducer = (state = INITIAL_STATE, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case RESET_ALL:
      return INITIAL_STATE;
    case RESET_API_DATA:
      return {
        ...state,
        home: INITIAL_STATE.home,
      };
    case LOADING_API_DATA:
      return {
        ...state,
        home: {
          ...state.home,
          loading: true,
          status: "loading",
        },
      };
    case SET_API_DATA:
      return {
        ...state,
        home: {
          ...state.home,
          loading: false,
          status:
            payload!.status !== undefined && payload!.status !== null
              ? payload!.status
              : "success",
          data: payload!.data,
        },
      };
    case SET_FORMATTED_DATA:
      return {
        ...state,
        home: {
          ...state.home,
          formattedData: payload!.data,
        },
      };
    case API_FAILURE:
      return {
        ...state,
        home: {
          ...state.home,
          loading: false,
          error: true,
          errorMessage: payload!.errorMessage,
        },
      };
    case HIDE_CITY:
      let currentHiddenCities: string[] = state.userPreferences.hiddenCities;
      if (Array.isArray(currentHiddenCities)) {
        currentHiddenCities = [...currentHiddenCities, payload?.data];
      }
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          hiddenCities: currentHiddenCities,
        },
      };
    case SHOW_CITY:
      let currHiddenCities: string[] = state.userPreferences.hiddenCities;
      if (Array.isArray(currHiddenCities)) {
        currHiddenCities = currHiddenCities.filter(
          (el) => el !== payload?.data
        );
      }
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          hiddenCities: currHiddenCities,
        },
      };
    case SET_SELECTED_CITY:
      return {
        ...state,
        home: {
          ...state.home,
          selectedCityData: payload!.data,
        },
      };
    case UNSET_ERROR:
      return {
        ...state,
        home: {
          ...state.home,
          error: false,
          errorMessage: null,
        },
      };
    default:
      return state;
  }
};

export default globalReducer;
