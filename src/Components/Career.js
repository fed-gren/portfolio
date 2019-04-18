import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import TitleDesc from "./TitleDesc";
import ContactIcon from "./ContactIcon";

const StyledCareer = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const Career = () => {
  return (
    <>
      <StyledCareer>
        <PageTitle title="Career" />
        <TitleDesc titleDesc="My career!" />
        <ContactIcon />
      </StyledCareer>
    </>
  );
};

export default Career;
