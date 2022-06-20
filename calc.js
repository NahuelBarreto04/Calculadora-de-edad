function ageCalculate(day, month, year) {
  const actualDate = new Date(),
    actualMonth = actualDate.getMonth() + 1,
    actualDay = actualDate.getDate(),
    actualYear = actualDate.getFullYear();
  let age = actualYear - year;
  if (actualDay < day || actualMonth < month) {
    age--;
    return age;
  } else {
    return age;
  }
}
