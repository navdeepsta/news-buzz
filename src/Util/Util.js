const today = new Date();
export const date = {
  getMonth: () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[today.getMonth()];
  },
  getYear : () => {
    return today.getFullYear();
  },
  getDay : () => {
    const days = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 0:"Sunday"};
    return days[today.getDay()];
   },
  getDate : () => {
    return date.getDay()+", "+date.getMonth()+" "+today.getDate()+", "+date.getYear();
  }
};
