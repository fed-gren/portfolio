import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import TitleDesc from "./TitleDesc";
import ContactIcon from "./ContactIcon";

const StyledTechStack = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const TechStack = () => {
  return (
    <>
      <StyledTechStack>
        <PageTitle title="Tech stack" />
        <TitleDesc titleDesc="This is my technology stack." />
        <ContactIcon />
      </StyledTechStack>
    </>
  );
};

export default TechStack;
