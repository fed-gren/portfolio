import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <NavLink to="/">About</NavLink>
      <NavLink to="/Career">Career</NavLink>
      <NavLink to="/TechStack">Tech Stack</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </>
  );
}

export default Navigation;