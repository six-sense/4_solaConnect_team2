import React from 'react';
import CurrentDate from 'Components/CurrentDate';
import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <Wrap>
        <CurrentDate country="ko" />
        <CurrentDate country="us" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

const Wrap = styled.div`
  width: 700px;
`;
