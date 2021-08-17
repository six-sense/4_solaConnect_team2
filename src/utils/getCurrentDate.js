import { koDay, usDay, usMonth } from 'utils/constants';

const today = new Date();

const dateObj = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  date: today.getDate(),
  day: today.getDay(),
};

const { year, month, date, day } = dateObj;

const changeDay = (day, country) =>
  country === 'ko' ? koDay[day] : usDay[day];
const changeUsMonth = (month) => usMonth[month];

export const sectionCountry = (country) => {
  let countryDate;
  country === 'ko'
    ? (countryDate = `${year}년 ${month}월 ${date}일 ${changeDay(day)} `)
    : (countryDate = `${changeDay(day)} ${changeUsMonth(
        month,
      )} ${date}, ${year}`);
  return countryDate;
};
