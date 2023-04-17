export const monthClicks = () => {
  const month = new Date().getMonth();

  const monthlyClicks = [
    {
      month: "Jan",
      numberOfClicks: "58",
      bgColor: month === 0 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Feb",
      numberOfClicks: "142",
      bgColor: month === 1 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Mar",
      numberOfClicks: "98",
      bgColor: month === 2 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Apr",
      numberOfClicks: "112",
      bgColor: month === 3 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "May",
      numberOfClicks: "90",
      bgColor: month === 4 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Jun",
      numberOfClicks: "161",
      bgColor: month === 5 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Jul",
      numberOfClicks: "78",
      bgColor: month === 6 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Aug",
      numberOfClicks: "142",
      bgColor: month === 7 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Sep",
      numberOfClicks: "39",
      bgColor: month === 8 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Oct",
      numberOfClicks: "112",
      bgColor: month === 9 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Nov",
      numberOfClicks: "63",
      bgColor: month === 10 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Dec",
      numberOfClicks: "98",
      bgColor: month === 11 ? "#DF9F71" : "#f7f7f7",
    },
  ];
  return monthlyClicks;
};
