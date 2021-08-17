import React from 'react';
import styled from 'styled-components';

export default function CurrentDate() {
  return (
    <Container>
      <p>🗓</p>
      <DateForm>가나다</DateForm>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')}

  p {
    font-size: 50px;
    margin-right: 10px;
  }
`;

const DateForm = styled.div`
  font-size: 30px;
`;
