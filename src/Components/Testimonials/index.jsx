import React from "react";

import { Container, Title, CardsWrapper } from "./styles";

import emilyImg from "../../Assets/image-emily.jpg";
import thomasImg from "../../Assets/image-thomas.jpg";
import jennieImg from "../../Assets/image-jennie.jpg";
import Card from "../Card";

const Testimonials = () => {
  return (
    <Container>
      <Title>Client Testimonials</Title>

      <CardsWrapper>
        <Card
          image={emilyImg}
          description={
            "We put our trust in Sunnyside and they delivered, making sure our needswere met and deadlines were always hit."
          }
          name={"Emily R."}
          role={"Marketing Director"}
        />
        <Card
          image={thomasImg}
          description={
            "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience"
          }
          name={"Thomas S."}
          role={"Chief Operating Officer"}
        />
        <Card
          image={jennieImg}
          description={
            "Incredible end result! Our sale increased over 400% when we worked with Sunnyside. Highly recommended!"
          }
          name={"Jennie R."}
          role={"Business Owner"}
        />
      </CardsWrapper>
    </Container>
  );
};

export default Testimonials;
