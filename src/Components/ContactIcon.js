import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from "react-icons/go";
import { GoMail } from "react-icons/go";

const StyledContactIcon = styled.section`
  position: fixed;
  bottom: 20px;
  left: 30px;
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
      <StyledAnchor href="http://github.com/fed-gren" target="_blank" title="move to github"><StyledGithub/></StyledAnchor>
      <StyledAnchor href={`mailto:deveb22@gmail.com`} title="send email to gren"><StyledMail/></StyledAnchor>
    </StyledContactIcon>
  );
}

export default ContactIcon;