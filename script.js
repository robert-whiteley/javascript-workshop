// constants
const pricePerDay = 15;
const withAccessCost = 10;

// query selectors
const inputDays = document.querySelector("#days");
const checkboxAccess = document.querySelector("#meetingRooms");
const elementTotal = document.querySelector("#total-price");

// calculates the total
function calculateTotal() {
  // set updatable variables
  let numberOfDays = inputDays.value;
  let withAccess = checkboxAccess.checked;
  let total = 0;
  if (withAccess) {
    total = (pricePerDay + withAccessCost) * numberOfDays;
  } else {
    total = pricePerDay * numberOfDays;
  }
  // updates the Total cost on the form
  elementTotal.innerText = `€${total}`;
  console.log(`Total: ${total}`);
}

// updates input days
inputDays.addEventListener("change", () => calculateTotal());

// updates access
checkboxAccess.addEventListener("change", () => calculateTotal());
