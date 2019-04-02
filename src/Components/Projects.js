import React from 'react';
import PageTitle from './PageTitle';
import TitleDesc from "./TitleDesc";
import ContactIcon from "./ContactIcon";

const Projects = () => {
  return (
    <>
      <PageTitle title="Projects"></PageTitle>
      <TitleDesc titleDesc="These are the projects that I've developed or I've been working on." />
      <ContactIcon />
    </>
  );
}

export default Projects;