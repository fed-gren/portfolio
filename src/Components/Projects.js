import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import TitleDesc from "./TitleDesc";
import ContactIcon from "./ContactIcon";

const StyledProjects = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const Projects = () => {
  return (
    <>
      <StyledProjects>
        <PageTitle title="Projects" />
        <TitleDesc titleDesc="These are the projects that I've developed or I've been working on." />
        <ContactIcon />
      </StyledProjects>
    </>
  );
};

export default Projects;
