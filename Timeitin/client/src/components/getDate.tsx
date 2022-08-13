// This is a helper function file that given a date it will return an object in the form:
// {
//   year: "2020",
//   month: "1",
//   day: "1",
//   time: "08:00",
//   }

const getDate = (date: Date) => {
    const timeOptions: any = { hour: "2-digit", minute: "2-digit" };
    return {
        year: date.getFullYear().toString(),
        month: (date.getMonth() + 1).toString(),
        day: date.getDate().toString(),
        time: date.toLocaleTimeString([], timeOptions),
    }
}

export default getDate;