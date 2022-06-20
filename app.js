const formDate = document.getElementById("dateForm");
const dateBirth = document.getElementById("date");
const infoContainer = document.querySelector(".data-container");

formDate.addEventListener("submit", (event) => {
  event.preventDefault();
  const arrDateBirth = dateBirth.value.split("-").reverse();
  const day = Number(arrDateBirth[0]);
  const month = Number(arrDateBirth[1]);
  const year = Number(arrDateBirth[2]);
  const age = ageCalculate(day, month, year);
  infoContainer.classList.add("display");

  createInfo(age);
});

let createInfo = (age) => {
  if (isNaN(age)) {
    infoContainer.innerHTML = `
          <p>No ingresaste un dato valido</p>`;
  } else {
    infoContainer.innerHTML = `
          <p>Tú edad actual es: ${age}</p>`;
  }
};
