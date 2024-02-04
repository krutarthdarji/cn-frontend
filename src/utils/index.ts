import { CityData, FormattedCityData } from "../redux/interface";

// This function is used to convert the temperature in degree celcius.
const convertTemperature = (temperature: number, unit: string = "C") => {
  if (unit === "F") {
    return Number(((temperature - 32) / 1.8).toFixed(2));
  } else if (unit === "K") {
    return Number((temperature - 273.15).toFixed(2));
  }
  return Number(temperature.toFixed(2));
};

export function structureApiData(data: CityData[]) {
  const resultArray: FormattedCityData[] = [];
  data.forEach((entry) => {
    const cityName = entry.city.name;
    const existingEntryIndex = resultArray.findIndex(
      (item) => item.name === cityName
    );
    let celciusTemperature = convertTemperature(entry.temp, entry.tempType);
    // Format date without adjusting for the timezone
    const dateObject = new Date(entry.date);
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getUTCDate()).padStart(2, "0");
    const year = dateObject.getUTCFullYear();
    const hours = String(dateObject.getUTCHours()).padStart(2, "0");
    const minutes = String(dateObject.getUTCMinutes()).padStart(2, "0");
    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
    if (existingEntryIndex === -1) {
      // If the city does not exist in resultArray, create a new entry
      resultArray.push({
        name: cityName,
        picture: entry.city.picture,
        data: [{ date: formattedDate, temp: celciusTemperature }],
      });
    } else {
      // If the city already exists in resultArray, add a new date and temperature entry
      resultArray[existingEntryIndex].data.push({
        date: formattedDate,
        temp: celciusTemperature,
      });
      // Sort the data array in ascending order by date
      resultArray[existingEntryIndex].data.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
  });
  // Sort the array alphabetically by city name
  resultArray.sort((a, b) => a.name.localeCompare(b.name));
  return resultArray;
}
