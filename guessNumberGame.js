const input = document.getElementById("input");
const result = document.getElementById("result");
const guessBtn = document.getElementById("guess");

let num = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener("click", () => {
    let val = Number(input.value);
    if (isNaN(val) || val < 1 || val > 100) {
        result.innerText = "Please enter a valid number between 1 and 100";
    }else if (val < num) {
        result.innerText = "Too low! Try again";
    } else if (val > num) {
        result.innerText = "Too high! Try again";
    } else {
        result.innerText = "Congratulations!🎉 You guessed the number";
        guessBtn.disabled = true;
    } 
    input.value = "";
});

