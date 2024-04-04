const button = document.querySelector(`button`);
const h1 = document.querySelector(`h1`);

let availableStudents = ["J.T.", "Max", "Bryce", "Francisco", "Alvin", "Janani", "Lee", "Nell",
"Andrew", "Beth-Ann", "Erika", "Lindsey", "Parker", "Samantha", "Sunny", "Joshua"];
let alreadyCalledStudents = [];

button.addEventListener(`click`, function() {
    const index = Math.floor(Math.random() * availableStudents.length);
    
    const currentlySelectedStudent = availableStudents.splice(index, 1);

    alreadyCalledStudents.push(currentlySelectedStudent[0]);
    console.log(alreadyCalledStudents);

    if (!availableStudents.length) {
        availableStudents = availableStudents.concat(alreadyCalledStudents);
        alreadyCalledStudents = [];
    }

    h1.textContent = currentlySelectedStudent[0];
});