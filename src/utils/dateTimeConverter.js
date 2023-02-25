export const dateTimeConverter = (dateTime) => {
    if (dateTime) {
        let dateSplit = dateTime.split("T");
        let dateString = dateSplit[0];
        let timeString = dateSplit[1].split(".")[0];
        let finalDateTime = dateString + "\n" + timeString;
        return finalDateTime;
    } else {
        return " ";
    }
};