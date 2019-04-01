import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import TitleDesc from "./TitleDesc";
import ContactIcon from "./ContactIcon";

const About = () => {
  return (
    <>
      <PageTitle title="About" />
      <TitleDesc titleDesc="Web Front-end Developer!" />
      <ContactIcon />
    </>
  );
};

export default About;
