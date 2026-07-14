
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("result");


calculateBtn.addEventListener("click", () => {
    const billAmount = Number(document.getElementById("billAmount").value);
    const tipPercentage = Number(document.getElementById("tipPercentage").value);
    const numOfPeople = Number(document.getElementById("numOfPeople").value);

    if (billAmount > 0 && tipPercentage >= 0 && numOfPeople > 0) {
        let tip = (tipPercentage / 100) * billAmount;
        let totalBill = billAmount + tip;
        let perPerson = totalBill / numOfPeople;
        result.innerText = "Each person pays : ₹"+perPerson.toFixed(2);
    } else {
        result.innerText = "Please enter valid input";
    }
});