import React from 'react';
import styled from 'styled-components';

const StyledTitleDesc = styled.span`
  position: fixed;
  left: 30px;
  top: 80px;
  font-size: 20px;
`;

const TitleDesc = (props) => {
  return(
    <>
    <StyledTitleDesc>{props.titleDesc ? props.titleDesc : "No title description"}</StyledTitleDesc>
    </>
  );
}

export default TitleDesc;