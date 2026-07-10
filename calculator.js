const input = document.getElementById("input");
const output = document.getElementById("output");
const result = document.getElementById("result");

let str = "";

input.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (e.target.id === "result") return;

    if (e.target.id === "ac") {
        str = "";
    }
    else if (e.target.id === "del") {
        str = str.slice(0, -1);
    } else {
        const operators = ["+", "-", "×", "÷", "%"];

        if (
            operators.includes(value) &&
            operators.includes(str[str.length - 1])
        ) {
            str = str.slice(0, -1) + value;
        } else {
            str += value;
        }
    }

    output.innerText = str;
    output.scrollLeft = output.scrollWidth;
});


result.addEventListener("click", () => {
    try {
        const exp = str.replace(/×/g, "*").replace(/÷/g, "/");

        str = eval(exp).toString();
        output.innerText = str;
    } catch {
        output.innerText = "Error";
        str = "";
    }
});