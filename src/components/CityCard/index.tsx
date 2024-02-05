import React, { FC } from "react";
import { Card, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BiSolidHide, BiSolidCity } from "react-icons/bi";
import { IoIosTime } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { HIDE_CITY } from "../../redux/global/global.types";
import { useHistory } from "react-router-dom";
import "./citycard.scss";

interface CityCardProps {
  image: string;
  name: string;
  temperatureData: { date: string; temp: number }[];
  isHomePage: boolean;
}

const CityCard: FC<CityCardProps> = ({
  image,
  name,
  temperatureData,
  isHomePage,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Hide this city.
    </Tooltip>
  );
  return (
    <Col sm={12} md={isHomePage ? 6 : 12} className="mb-3">
      <Card data-testid="citycard" className="citycard__card">
        <Card.Header>
          <div className="citycard__cardHeader">
            <div>
              <h4 className="m-0" data-testid="city-name">
                <BiSolidCity size={25} />
                &nbsp; {name}
              </h4>
            </div>
            {isHomePage && (
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <div>
                  <BiSolidHide
                    onClick={() => {
                      dispatch({ type: HIDE_CITY, payload: { data: name } });
                    }}
                    className="citycard__hideIcon"
                  />
                </div>
              </OverlayTrigger>
            )}
          </div>
        </Card.Header>
        <div
          className={`${isHomePage && "citycard__body"}`}
          onClick={() => isHomePage && history.push(`/city/${name}`)}
        >
          <Card.Img
            data-testid="card-image"
            variant="top"
            className="citycard__cardImg"
            src={image}
          />
          <Card.Body className="citycard__cardBody">
            <Row className="g-4">
              {temperatureData.map((el, index) => {
                return (
                  <Col
                    lg={isHomePage ? 4 : 2}
                    md={isHomePage ? 6 : 4}
                    xs={6}
                    key={index}
                  >
                    <Card
                      data-testid="city-temperature-data"
                      className="p-2 citycard__cardData"
                    >
                      <Card.Text data-testid={`city-time-${index}`}>
                        <IoIosTime size={20} /> {el.date}
                      </Card.Text>
                      <Card.Text data-testid={`city-temperature-${index}`}>
                        <FaCloud size={20} /> {el.temp}°C
                      </Card.Text>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default CityCard;
