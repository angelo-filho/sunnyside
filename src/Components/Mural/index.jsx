import React from "react";

import { Container, Image } from "./styles";

import coneImg from "../../Assets/Sections/image-gallery-cone.jpg";
import milkImg from "../../Assets/Sections/image-gallery-milkbottles.jpg";
import orangeImg from "../../Assets/Sections/image-gallery-orange.jpg";
import sugarImg from "../../Assets/Sections/image-gallery-sugarcubes.jpg";

const Mural = () => {
  return (
    <Container>
      <Image areaName={"a"} src={milkImg} />
      <Image areaName={"b"} src={orangeImg} />
      <Image areaName={"c"} src={coneImg} />
      <Image areaName={"d"} src={sugarImg} />
    </Container>
  );
};

export default Mural;
