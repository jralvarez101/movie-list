import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  min-height: 70vh;
`;

const P = styled.p`
  margin: 1rem;
  color: #b4c8d6;
`;

const Version = styled.p`
  background-color: #082032;
  padding: 0.5rem;
  color: #ff4c29;
`;

const H1 = styled.h1`
  color: #b4c8d6;
`;

function About() {
  return (
    <Container>
      <H1>About This App</H1>
      <P>
        This is a full stack React App for keeping a list of your favorite
        movies
      </P>
      <Version>
        <strong>Version 1.0.0</strong>
      </Version>
    </Container>
  );
}

export default About;
