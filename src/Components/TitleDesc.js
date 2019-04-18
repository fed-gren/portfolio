import React from "react";
import styled from "styled-components";

const StyledTitleDesc = styled.span`
  position: relative;
  left: 30px;
  top: 30px;
  font-size: 28px;
  font-weight: 900
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

const TitleDesc = props => {
  return (
    <>
      <StyledTitleDesc>
        {props.titleDesc ? props.titleDesc : "No title description"}
      </StyledTitleDesc>
    </>
  );
};

export default TitleDesc;
