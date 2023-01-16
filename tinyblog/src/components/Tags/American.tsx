import React from "react";
import { Card } from "react-bootstrap";
import { SectionEnum } from "../../sections";
//we can check if tags matches and then post card here in the body
const American = () => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          height: "20rem",
          border: "solid",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {SectionEnum.American}
          </Card.Title>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default American;
