import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';


const Navigation = () => {
  return (
    <>
      <StyledLinkSection order={1}>
        <StyledLink to="/" data-tip="About"></StyledLink>
      </StyledLinkSection>
      <StyledLinkSection order={2}>
        <StyledLink to="/Career" data-tip="Career"></StyledLink>
      </StyledLinkSection>
      <StyledLinkSection order={3}>
        <StyledLink to="/TechStack" data-tip="Tech stack"></StyledLink>
      </StyledLinkSection>
      <StyledLinkSection order={4}>
        <StyledLink to="/Projects" data-tip="Projects"></StyledLink>
      </StyledLinkSection>
      <ReactTooltip place="left" effect="solid"/>
    </>
  );
};

const StyledLinkSection = styled.section`
  position: fixed;
  right: 20px;
  top: ${props => props.order * 20}%;
`;

const StyledLinkText = styled.span`
  display: inline-block;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #0be881;
  border-radius: 50%;
  transition: .5s transform ease;
  &:hover {
    transform: scale(1.8);
  }
`;

export default Navigation;
