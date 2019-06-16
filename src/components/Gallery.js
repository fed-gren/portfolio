import "../styles/gallery.scss";
import React from "react";
import Card from "../components/Card";

export default () => {
  const projects = [
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=1"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=2"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=3"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=4"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=5"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=1"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=2"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=3"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=4"
    },
    {
      title: "dummy",
      thumb: "https://via.placeholder.com/150?text=5"
    }
  ];

  return (
    <div className="gallery">
      {projects.map((project, index) => {
        return <Card title={project.title} thumb={project.thumb} key={index} />;
      })}
    </div>
  );
};
