import { getWeatherData } from "../../apis";
import { structureApiData } from "../../utils";
import { AppDispatch, RootState } from "../store";
import { DefaultState, FormattedCityData } from "../interface";
import {
  API_FAILURE,
  LOADING_API_DATA,
  RESET_API_DATA,
  SET_API_DATA,
  SET_FORMATTED_DATA,
  SET_SELECTED_CITY,
  UNSET_ERROR,
} from "./global.types";

let fetchWeatherData =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch({ type: RESET_API_DATA });
      dispatch({
        type: LOADING_API_DATA,
      });
      const response = await getWeatherData();
      const data = response.data;
      if (data === null || data === undefined) {
        dispatch({
          type: SET_API_DATA,
          payload: {
            data: [],
          },
        });
      } else {
        const structuredData = structureApiData(data);
        dispatch({
          type: SET_FORMATTED_DATA,
          payload: {
            data: structuredData,
          },
        });
        dispatch({
          type: SET_API_DATA,
          payload: {
            data: data,
          },
        });
      }
    } catch (error: any) {
      dispatch({
        type: API_FAILURE,
        payload: {
          errorMessage: error.message,
        },
      });
    }
  };

let fetchCityData =
  (cityName: string | null) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const {
      global: { home },
    }: DefaultState = getState();
    try {
      if (!cityName) {
        dispatch({
          type: API_FAILURE,
          payload: {
            errorMessage: "City doesn't exit",
          },
        });
      } else {
        if (home.formattedData !== null && home.formattedData.length > 0) {
          let currentCityData: FormattedCityData[] = home.formattedData.filter(
            (el) => el.name === cityName
          );
          if (currentCityData.length > 0) {
            dispatch({ type: UNSET_ERROR });
            dispatch({
              type: SET_SELECTED_CITY,
              payload: { data: currentCityData[0] },
            });
          } else {
            dispatch({
              type: API_FAILURE,
              payload: {
                errorMessage: "City doesn't exit",
              },
            });
          }
        } else {
          dispatch({ type: RESET_API_DATA });
          dispatch({
            type: LOADING_API_DATA,
          });
          const response = await getWeatherData();
          const data = response.data;
          if (data === null || data === undefined) {
            dispatch({
              type: SET_API_DATA,
              payload: {
                data: [],
              },
            });
          } else {
            const structuredData = structureApiData(data);
            dispatch({
              type: SET_FORMATTED_DATA,
              payload: {
                data: structuredData,
              },
            });
            if (cityName !== null && cityName !== undefined) {
              let currentCityData: FormattedCityData[] = structuredData.filter(
                (el) => el.name === cityName
              );
              if (currentCityData.length > 0) {
                dispatch({
                  type: SET_SELECTED_CITY,
                  payload: { data: currentCityData[0] },
                });
              } else {
                dispatch({
                  type: API_FAILURE,
                  payload: {
                    errorMessage: "City doesn't exit",
                  },
                });
              }
            }
            dispatch({
              type: SET_API_DATA,
              payload: {
                data: data,
              },
            });
          }
        }
      }
    } catch (error: any) {
      dispatch({
        type: API_FAILURE,
        payload: {
          errorMessage: error.message,
        },
      });
    }
  };

export { fetchCityData, fetchWeatherData };
