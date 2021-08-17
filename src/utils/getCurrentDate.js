const today = new Date();

export const dateObj = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  date: today.getDate(),
  day: today.getDay(),
};
