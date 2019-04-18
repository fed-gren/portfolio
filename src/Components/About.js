import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import TitleDesc from "./TitleDesc";
import ContactIcon from "./ContactIcon";
import Background from "./../images/asia_neon_city.jpg";

const StyledAbout = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: inline-block;
  // background-image: url(${Background});
  // background-size: cover;
  // background-attachment: fixed;
`;

const About = () => {
  return (
    <>
      <StyledAbout>
        <PageTitle title="About" />
        <TitleDesc titleDesc="Web Front-end Developer!" />
        <ContactIcon />
      </StyledAbout>
    </>
  );
};

export default About;
