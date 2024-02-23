"use-strict";

const firstNumber = parseInt(prompt("Número #1:"));
const secondNumber = parseInt(prompt("Número #2:"));
const thirdNumber = parseInt(prompt("Número #3:"));
const ascending = document.querySelector("#ascending");
const descending = document.querySelector("#descending");
const message = document.querySelector("#sameNumbers");

const numbers = [firstNumber, secondNumber, thirdNumber];

const printListElement = (text, elemet) => {
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add("list-group-item", "text-center");
    elemet.appendChild(li);
};

const printAscendingNumbers = () => {
    const ascendingNumbers = numbers.toSorted((a, b) => b - a);
    ascendingNumbers.forEach((number) => {
        printListElement(number, ascending);
    });
};

const printDescendingNumbers = () => {
    const descendingNumbers = numbers.toSorted((a, b) => a - b);
    descendingNumbers.forEach((number) => {
        printListElement(number, descending);
    });
};

printAscendingNumbers();
printDescendingNumbers();

const areTheNumbersTheSame = () => {
    const sameNumbers =
        firstNumber === secondNumber ||
        secondNumber === thirdNumber ||
        firstNumber === thirdNumber;

    message.style.display = sameNumbers ? "block" : "none";
};

areTheNumbersTheSame();
