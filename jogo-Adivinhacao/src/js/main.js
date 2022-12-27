
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClick(event){
    event.preventDefault()

    let inputNumber = document.querySelector('#number')

    if(Number(inputNumber.value) == randomNumber){
        document.querySelector('.card1').classList.add("disappear")
        document.querySelector('.card2').classList.remove("disappear")

        document.querySelector(".card2 h1").innerText = `Você acertou em ${xAttempts} tentativas. o numero sortiado foi ${randomNumber}`

       
    }else{
        alert("Você errou!!")
    }

    xAttempts++
}

const reset = (event) => {
    
}

