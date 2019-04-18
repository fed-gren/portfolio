import React from "react";
import styled from "styled-components";

const StyledPageTitle = styled.h1`
  margin: 0;
  padding: 0;
  position: relative;
  left: 30px;
  top: 22px;
  font-size: 52px;
  font-weight: 900;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

const PageTitle = props => {
  return (
    <>
      <StyledPageTitle>
        {props.title ? props.title : "No title error."}
      </StyledPageTitle>
    </>
  );
};

export default PageTitle;
