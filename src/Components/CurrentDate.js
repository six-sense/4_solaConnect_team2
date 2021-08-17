import React from 'react';
import { sectionCountry } from 'utils/getCurrentDate';
import PropTypes from 'prop-types';
import styled from 'styled-components';

CurrentDate.propTypes = {
  country: PropTypes.string,
};

export default function CurrentDate({ country }) {
  const currentDate = sectionCountry(country);

  return (
    <Container>
      <p>🗓</p>
      <DateForm>{currentDate}</DateForm>
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
