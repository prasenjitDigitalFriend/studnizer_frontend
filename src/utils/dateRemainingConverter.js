export const dateRemainingConverter = (date1, date2) => {
    var firstDate = new Date(date1);
    var secondDate2 = new Date(date2);
    const diffTime = Math.abs(secondDate2 - firstDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return(diffDays + " days");
};