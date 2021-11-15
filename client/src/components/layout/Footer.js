import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const FooterDiv = styled.footer`
  min-height: 250px;
  background-color: #edf0f7;
  position: relative;
  top: 100%;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  height: 60%;
  text-align: center;
`;

const Social = styled(FontAwesomeIcon)`
  color: #2c394b;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
`;

const FooterText = styled.p`
  font-weight: bolder;
  color: #2c394b;
`;

function Footer() {
  return (
    <FooterDiv>
      <Container>
        <IconWrapper>
          <Social icon={faFacebookSquare} size="2x" />
          <Social icon={faInstagram} size="2x" />
          <Social icon={faTwitterSquare} size="2x" />
        </IconWrapper>
        <p>Info . Support . Marketing</p>
        <p>Terms of Use . Privacy Policy</p>
        <FooterText>&copy; 2022 My Movie List</FooterText>
      </Container>
    </FooterDiv>
  );
}

export default Footer;
