window.onload = () => {document.querySelector("#calculate").onclick = calculateTip};
function calculateTip() {
    let billAmount = document.querySelector("#billamount").value;
    let tipPercentage = document.querySelector("#tip").value;
    
    if (billAmount === "" || isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return; }
let tipAmount = (billAmount * tipPercentage);
let totalAmount = (parseFloat(billAmount) + parseFloat(tipAmount));
document.querySelector("#tipamount").textContent = tipAmount.toFixed(2);
document.querySelector("#totalamount").textContent = totalAmount.toFixed(2);
}