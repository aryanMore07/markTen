const billAmt = document.querySelector("#input-BillAmt");
const cashAmt = document.querySelector("#input-cashGiven");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector(".errorMsg");
const noOfNotes = document.querySelectorAll(".no-Of-Notes");
document.getElementById("cash_div").style.display = "none";

function btn_hideOnclick() {
  document.getElementById("cash_div").style.display = "block";
  document.getElementById("next_btn").style.display = "none";
}

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function billCashAmt() {
  hideMessage();
  if (billAmt.value > 0) {
    if (Number(cashAmt.value) >= Number(billAmt.value)) {
      const returnAmt = Number(cashAmt.value) - Number(billAmt.value);
      calcChange(returnAmt);
    } else {
      showMessage("The Cash Must Be Greater Then Bill Amount");
    }
  } else {
    showMessage("Enter A Valid Amount");
  }
});

function calcChange(returnAmt) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = parseInt(returnAmt / notes[i]);
    returnAmt %= notes[i];
    noOfNotes[i].innerHTML = numberOfNotes;
    // console.log(noOfNotes[i]);
  }
}

function hideMessage() {
  errorMsg.style.display = "none";
}

function showMessage(msg) {
  errorMsg.style.display = "block";
  errorMsg.innerText = msg;
}
