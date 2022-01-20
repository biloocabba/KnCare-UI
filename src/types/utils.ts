import moment from "moment";

export const formatDateAsDD_MM_YYYY = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() - 1}`;
};

// export const addDays = (date: Date, days: number): Date => {
//   return moment(date).add(days, "days").;
// };
