let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");

let numberInput = document.querySelector("#number");

function handleClick(event) {
  event.preventDefault();

  let inputNumber = numberInput;

  if (Number(inputNumber.value) == randomNumber) {
    card1.classList.add("disappear");
    card2.classList.remove("disappear");

    document.querySelector(
      ".card2 h1"
    ).innerText = `Você acertou em ${xAttempts} tentativas. o numero sortiado foi ${randomNumber}`;
  }

  if (Number(numberInput.value) < 0 || Number(numberInput.value) > 10) {
    alert("O número tem que ser entre 1 e 10");
  } else {
    console.log("numero valido");
  }

  if(Number(inputNumber.value) == ''){
    xAttempts = 0
    alert("Tem que colocar um valor!!")
  }
  xAttempts++;
}

function btnReset() {
  card1.classList.remove("disappear");
  card2.classList.add("disappear");

  numberInput.value = " ";
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}
