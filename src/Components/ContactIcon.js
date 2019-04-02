import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from "react-icons/go";
import { GoMail } from "react-icons/go";
import ReactTooltip from 'react-tooltip';

const StyledContactIcon = styled.section`
  position: fixed;
  bottom: 20px;
  left: 52px;
`;

const StyledGithub = styled(GoMarkGithub)`
  font-size: 30px;
  margin-right: 10px;
`;

const StyledMail = styled(GoMail)`
  font-size: 30px;
`;

const StyledAnchor = styled.a`
  color:black;
`;

const ContactIcon = () => {
  return (
    <StyledContactIcon>
      <StyledAnchor href="http://github.com/fed-gren" target="_blank" title="move to github" data-tip="Github 방문"><StyledGithub/></StyledAnchor>
      <ReactTooltip place="top" effect="solid"/>
      <StyledAnchor href={`mailto:deveb22@gmail.com`} title="send email to gren" data-tip="Email 전송"><StyledMail/></StyledAnchor>
    </StyledContactIcon>
  );
}

export default ContactIcon;