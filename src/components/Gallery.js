import "../styles/gallery.scss";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default () => {
  const [projects, setProjects] = useState([]);
  const callApi = () => {
    return fetch("https://gren-apis.herokuapp.com/api/projects")
      .then(response => response.json())
      .then(json => json)
      .catch(err => console.log(err));
  };

  const getProjects = async () => {
    const temp = await callApi();
    //_callApi() 실행완료 전까지 아래 코드는 실행되지 않음 -> ?
    setProjects(temp);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const renderProjects = () => {
    const temp = projects.map((project, index) => {
      return <Card
        title={project.title}
        thumb={project.thumb}
        key={index}
      />
    })
    return temp;
  }

  return (
    <div className="gallery">
      {projects.length === 0 ? 'Loading' : renderProjects()}
    </div>
  );
};
