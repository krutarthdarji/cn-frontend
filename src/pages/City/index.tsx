import React, { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { DefaultState } from "../../redux/interface";
import { fetchCityData } from "../../redux/global/global.action";
import CityCard from "../../components/CityCard";

interface Params {
  cityName: string;
}

/**
 * The above function is a React component that displays city data based on the city name provided in
 * the URL parameters.
 * @returns The component is returning either a message indicating that the city was not found and
 * providing a link to the home page, or a loading spinner if the data is still being fetched, or a
 * CityCard component with the city's name, image, temperature data, and a flag indicating that it is
 * not the home page.
 */
const City: FC = () => {
  let { cityName } = useParams<Params>();
  const dispatch = useDispatch();
  const { home } = useSelector((x: DefaultState) => x.global);
  useEffect(() => {
    dispatch(fetchCityData(cityName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (home.error || !cityName) {
    return (
      <Container className="mt-3 text-center">
        <h4>
          City not found. Please navigate to home page from{" "}
          <Link to="/">here</Link>.
        </h4>
      </Container>
    );
  }
  return (
    <Container className="mt-3">
      {home.loading || !home.selectedCityData ? (
        <Container className="mt-3 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <CityCard
          name={home.selectedCityData.name}
          key={home.selectedCityData.name}
          image={home.selectedCityData.picture}
          temperatureData={home.selectedCityData.data}
          isHomePage={false}
        />
      )}
    </Container>
  );
};

export default City;
