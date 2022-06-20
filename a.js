function ageCalculate() {
  // let day = parseInt(prompt("Ingresa el día(numerico) en que naciste:"));
  let day = 20;
  // while (isNaN(day) === true) {
  //   alert(
  //     "No ingresaste numeros en alguna de las opciones! vuelve a intentarlo "
  //   );
  //   // day = parseInt(prompt("Ingresa el día(numerico) en que naciste:"));
  // }

  // month = parseInt(prompt("Ingresa el mes(numerico) en que naciste:"));
  let month = 6;
  while (isNaN(month) === true) {
    alert(
      "No ingresaste numeros en alguna de las opciones! vuelve a intentarlo "
    );
    // month = parseInt(prompt("Ingresa el mes(numerico) en que naciste:"));
  }
  let year = 2003;
  while (isNaN(year) === true) {
    alert(
      "No ingresaste numeros en alguna de las opciones! vuelve a intentarlo "
    );
    // year = parseInt(prompt("Ingresa el año(numerico) en que naciste:"));
  }
  let actualDate = new Date(),
    actualMonth = actualDate.getMonth() + 1,
    actualDay = actualDate.getDate(),
    actualYear = actualDate.getFullYear();
  let age = actualYear - year;
  console.log(age);
  console.log(actualDay);
  console.log(actualMonth);

  if (actualDay < day && actualMonth < month) {
    age--;
    //   alert(`Tu edad es: ${age}`);
    console.log(age);
  } else {
    //   alert(`Tu edad es: ${age}`);
    console.log(age);
  }
}
ageCalculate();
