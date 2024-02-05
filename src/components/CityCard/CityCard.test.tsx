import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import axios from "axios";
import CityCard from ".";
jest.mock("axios");

const dummyResp = [
  {
    date: "2024-02-06T16:00:00+00:00",
    city: {
      name: "Amsterdam",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
    },
    tempType: "F",
    temp: 77.3,
  },
  {
    date: "2024-02-06T04:00:00+00:00",
    city: {
      name: "Budapest",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/budapest.jpg?alt=media&token=d2bff16e-6e11-433c-89ee-3481043636b5",
    },
    tempType: "C",
    temp: 21.11,
  },
  {
    date: "2024-02-06T00:00:00+00:00",
    city: {
      name: "Barcelona",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
    },
    tempType: "F",
    temp: 74.2,
  },
  {
    date: "2024-02-06T12:00:00+00:00",
    city: {
      name: "San Francisco",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
    },
    tempType: "K",
    temp: 302.79,
  },
  {
    date: "2024-02-06T16:00:00+00:00",
    city: {
      name: "Budapest",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/budapest.jpg?alt=media&token=d2bff16e-6e11-433c-89ee-3481043636b5",
    },
    tempType: "C",
    temp: 24.83,
  },
  {
    date: "2024-02-06T04:00:00+00:00",
    city: {
      name: "Barcelona",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
    },
    tempType: "K",
    temp: 298.76,
  },
  {
    date: "2024-02-06T12:00:00+00:00",
    city: {
      name: "Amsterdam",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
    },
    tempType: "K",
    temp: 302.68,
  },
  {
    date: "2024-02-06T20:00:00+00:00",
    city: {
      name: "Budapest",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/budapest.jpg?alt=media&token=d2bff16e-6e11-433c-89ee-3481043636b5",
    },
    tempType: "F",
    temp: 79.71,
  },
  {
    date: "2024-02-06T04:00:00+00:00",
    city: {
      name: "Hong Kong",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
    },
    tempType: "K",
    temp: 302.58,
  },
  {
    date: "2024-02-06T04:00:00+00:00",
    city: {
      name: "Amsterdam",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
    },
    tempType: "F",
    temp: 72.34,
  },
  {
    date: "2024-02-06T00:00:00+00:00",
    city: {
      name: "Amsterdam",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
    },
    tempType: "C",
    temp: 27.77,
  },
  {
    date: "2024-02-06T16:00:00+00:00",
    city: {
      name: "Hong Kong",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
    },
    tempType: "K",
    temp: 294.53,
  },
  {
    date: "2024-02-06T08:00:00+00:00",
    city: {
      name: "Amsterdam",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
    },
    tempType: "C",
    temp: 23.08,
  },
  {
    date: "2024-02-06T08:00:00+00:00",
    city: {
      name: "Hong Kong",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
    },
    tempType: "F",
    temp: 70.39,
  },
  {
    date: "2024-02-06T20:00:00+00:00",
    city: {
      name: "Amsterdam",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508",
    },
    tempType: "F",
    temp: 74.41,
  },
  {
    date: "2024-02-06T00:00:00+00:00",
    city: {
      name: "Tokyo",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/tokyo.jpg?alt=media&token=1ebb10df-b39a-4657-a00c-99219ea28d10",
    },
    tempType: "F",
    temp: 80.28,
  },
  {
    date: "2024-02-06T08:00:00+00:00",
    city: {
      name: "Tokyo",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/tokyo.jpg?alt=media&token=1ebb10df-b39a-4657-a00c-99219ea28d10",
    },
    tempType: "K",
    temp: 302.26,
  },
  {
    date: "2024-02-06T12:00:00+00:00",
    city: {
      name: "Barcelona",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
    },
    tempType: "K",
    temp: 293.7,
  },
  {
    date: "2024-02-06T12:00:00+00:00",
    city: {
      name: "Tokyo",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/tokyo.jpg?alt=media&token=1ebb10df-b39a-4657-a00c-99219ea28d10",
    },
    tempType: "F",
    temp: 84.5,
  },
  {
    date: "2024-02-06T00:00:00+00:00",
    city: {
      name: "Budapest",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/budapest.jpg?alt=media&token=d2bff16e-6e11-433c-89ee-3481043636b5",
    },
    tempType: "K",
    temp: 295.87,
  },
  {
    date: "2024-02-06T12:00:00+00:00",
    city: {
      name: "Hong Kong",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
    },
    tempType: "F",
    temp: 85.01,
  },
  {
    date: "2024-02-06T00:00:00+00:00",
    city: {
      name: "San Francisco",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
    },
    tempType: "C",
    temp: 24.82,
  },
  {
    date: "2024-02-06T16:00:00+00:00",
    city: {
      name: "Barcelona",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
    },
    tempType: "K",
    temp: 302.24,
  },
  {
    date: "2024-02-06T08:00:00+00:00",
    city: {
      name: "Budapest",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/budapest.jpg?alt=media&token=d2bff16e-6e11-433c-89ee-3481043636b5",
    },
    tempType: "C",
    temp: 23.66,
  },
  {
    date: "2024-02-06T04:00:00+00:00",
    city: {
      name: "San Francisco",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
    },
    tempType: "C",
    temp: 22.97,
  },
  {
    date: "2024-02-06T00:00:00+00:00",
    city: {
      name: "Hong Kong",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
    },
    tempType: "F",
    temp: 81.91,
  },
  {
    date: "2024-02-06T12:00:00+00:00",
    city: {
      name: "Budapest",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/budapest.jpg?alt=media&token=d2bff16e-6e11-433c-89ee-3481043636b5",
    },
    tempType: "F",
    temp: 71.81,
  },
  {
    date: "2024-02-06T20:00:00+00:00",
    city: {
      name: "Tokyo",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/tokyo.jpg?alt=media&token=1ebb10df-b39a-4657-a00c-99219ea28d10",
    },
    tempType: "C",
    temp: 28.36,
  },
  {
    date: "2024-02-06T20:00:00+00:00",
    city: {
      name: "San Francisco",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
    },
    tempType: "F",
    temp: 68.5,
  },
  {
    date: "2024-02-06T08:00:00+00:00",
    city: {
      name: "Barcelona",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
    },
    tempType: "F",
    temp: 77.11,
  },
  {
    date: "2024-02-06T16:00:00+00:00",
    city: {
      name: "San Francisco",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
    },
    tempType: "K",
    temp: 296.49,
  },
  {
    date: "2024-02-06T08:00:00+00:00",
    city: {
      name: "San Francisco",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/san_francisco.jpg?alt=media&token=3192e915-9a72-4342-b247-072b11ca4a10",
    },
    tempType: "K",
    temp: 293.87,
  },
  {
    date: "2024-02-06T20:00:00+00:00",
    city: {
      name: "Hong Kong",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/hong_kong.jpg?alt=media&token=dd206090-d3a8-4338-b57b-6d6df37cdd6f",
    },
    tempType: "F",
    temp: 79.41,
  },
  {
    date: "2024-02-06T04:00:00+00:00",
    city: {
      name: "Tokyo",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/tokyo.jpg?alt=media&token=1ebb10df-b39a-4657-a00c-99219ea28d10",
    },
    tempType: "K",
    temp: 294.17,
  },
  {
    date: "2024-02-06T16:00:00+00:00",
    city: {
      name: "Tokyo",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/tokyo.jpg?alt=media&token=1ebb10df-b39a-4657-a00c-99219ea28d10",
    },
    tempType: "C",
    temp: 21.12,
  },
  {
    date: "2024-02-06T20:00:00+00:00",
    city: {
      name: "Barcelona",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13",
    },
    tempType: "K",
    temp: 298.14,
  },
];

test("Should contain image and temperature data for the city card", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: dummyResp });
  const img =
    "https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508";
  const name = "Amsterdam";
  const temperatureData = [
    {
      date: "02/06/2024 00:00",
      temp: 24.44,
    },
    {
      date: "02/06/2024 04:00",
      temp: 26.19,
    },
    {
      date: "02/06/2024 08:00",
      temp: 28.15,
    },
    {
      date: "02/06/2024 12:00",
      temp: 22.98,
    },
    {
      date: "02/06/2024 16:00",
      temp: 21.12,
    },
    {
      date: "02/06/2024 20:00",
      temp: 27.77,
    },
  ];
  render(
    <Provider store={store}>
      <CityCard
        image={img}
        name={name}
        temperatureData={temperatureData}
        isHomePage={true}
      />
    </Provider>
  );
  const cityCard = await waitFor(() => screen.findByTestId("citycard"));
  expect(cityCard).toBeTruthy();

  const cityName = await waitFor(() => screen.findByTestId("city-name"));
  expect(cityName.textContent).toContain("Amsterdam");

  const cityTemperatureData = await waitFor(() =>
    screen.findAllByTestId("city-temperature-data")
  );
  expect(cityTemperatureData).toHaveLength(6);

  const time = await waitFor(() => screen.findByTestId("city-time-0"));
  expect(time.textContent).toContain(temperatureData[0].date);

  const temp = await waitFor(() => screen.findByTestId("city-temperature-0"));
  expect(temp.textContent).toContain(`${temperatureData[0].temp}°C`);
});
