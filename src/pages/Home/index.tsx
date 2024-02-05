import React, { FC, useEffect } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { DefaultState } from "../../redux/interface";
import { fetchWeatherData } from "../../redux/global/global.action";
import CityCard from "../../components/CityCard";
import HiddenCities from "../../components/HiddenCities";

const Home: FC = () => {
  const {
    home,
    userPreferences: { hiddenCities },
  } = useSelector((x: DefaultState) => x.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (home.error) {
    return (
      <Container data-testid="home-error" className="mt-3 text-center">
        <h4>Some Error Occurred. Please try again later.</h4>
      </Container>
    );
  }

  return (
    <Container className="mt-3">
      {home.loading ? (
        <div data-testid="home-loading" className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <div className="mb-3" style={{ textAlign: "right" }}>
            <Button
              onClick={() => {
                dispatch(fetchWeatherData());
              }}
            >
              Refresh
            </Button>
          </div>
          <Row className="g-4">
            {home.formattedData?.length &&
              home.formattedData?.length > 0 &&
              home.formattedData?.filter(
                (el) => !hiddenCities.includes(el.name)
              ).length === 0 && (
                <h4>
                  You have hidden all the cities. Please unhide cities to see
                  the data.
                </h4>
              )}
            {home.formattedData
              ?.filter((el) => !hiddenCities.includes(el.name))
              .map((cityData, index) => (
                <CityCard
                  key={index}
                  image={cityData.picture}
                  name={cityData.name}
                  temperatureData={cityData.data}
                  isHomePage={true}
                />
              ))}
          </Row>
          {hiddenCities.length > 0 && <HiddenCities />}
        </div>
      )}
    </Container>
  );
};

export default Home;
