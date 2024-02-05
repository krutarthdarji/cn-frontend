import React, { FC } from "react";
import { Accordion, Badge, CloseButton, Stack } from "react-bootstrap";
import { BiSolidShow } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { DefaultState } from "../../redux/interface";
import { SHOW_CITY } from "../../redux/global/global.types";

const HiddenCities: FC = () => {
  const {
    userPreferences: { hiddenCities },
  } = useSelector((x: DefaultState) => x.global);
  const dispatch = useDispatch();

  return (
    <Accordion defaultActiveKey="0" className="mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <BiSolidShow size={22} />
          &nbsp; Hidden Cities
        </Accordion.Header>
        <Accordion.Body>
          <Stack direction="horizontal" gap={2}>
            {hiddenCities.map((el, index) => {
              return (
                <div key={index}>
                  <Badge bg="light" text="dark" className="p-2">
                    {el} &nbsp;{" "}
                    <CloseButton
                      onClick={() => {
                        dispatch({ type: SHOW_CITY, payload: { data: el } });
                      }}
                    />
                  </Badge>
                </div>
              );
            })}
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default HiddenCities;
