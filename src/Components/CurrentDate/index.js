import React, { useState, useEffect } from 'react';
import { koDay, usDay, usMonth } from 'utils/constants';
import { dateObj } from 'utils/getCurrentDate';
import PropTypes from 'prop-types';
import styled from 'styled-components';

CurrentDate.propTypes = {
  country: PropTypes.string,
};

export default function CurrentDate({ country }) {
  const [currentDate, setCurrentDate] = useState('');
  const { year, month, date, day } = dateObj;

  const changeDay = (day) => (country === 'ko' ? koDay[day] : usDay[day]);
  const changeUsMonth = (month) => usMonth[month];

  const divideCountry = () => {
    country === 'ko'
      ? setCurrentDate(`${year}년 ${month}월 ${date}일 ${changeDay(day)} `)
      : setCurrentDate(
          `${changeDay(day)} ${changeUsMonth(month)} ${date}, ${year}`,
        );
  };
  useEffect(() => {
    divideCountry();
  }, []);

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
