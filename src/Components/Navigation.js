import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



const Navigation = () => {
  return (
    <>
      <StyledLinkSection order={1}>
        <StyledLinkText flagDisplay={displayLinkTextArr[0]}>About</StyledLinkText>
        <StyledLink to="/" ></StyledLink>
      </StyledLinkSection>
      <StyledLinkSection order={2}>
        <StyledLinkText flagDisplay={displayLinkTextArr[0]}>Career</StyledLinkText>
        <StyledLink to="/Career" ></StyledLink>
      </StyledLinkSection>
      <StyledLinkSection order={3}>
        <StyledLinkText flagDisplay={displayLinkTextArr[0]}>Tech Stack</StyledLinkText>
        <StyledLink to="/TechStack" ></StyledLink>
      </StyledLinkSection>
      <StyledLinkSection order={4}>
        <StyledLinkText flagDisplay={displayLinkTextArr[0]}>Projects</StyledLinkText>
        <StyledLink to="/Projects" ></StyledLink>
      </StyledLinkSection>
    </>
  );
};

const displayLinkTextArr = [false, false, false, false];

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
