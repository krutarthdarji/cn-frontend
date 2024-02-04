// This function is used to convert the temperature in degree celcius.
export const convertTemperature = (temperature: number, unit: string = "C") => {
  if (unit === "F") {
    return ((temperature - 32) / 1.8).toFixed(2);
  } else if (unit === "K") {
    return (temperature - 273.15).toFixed(2);
  }
  return temperature.toFixed(2);
};
