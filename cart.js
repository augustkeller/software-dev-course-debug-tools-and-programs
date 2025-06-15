//Dummy Data
const regularCart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

const emptyCart = [

];

const oneItemCart = [
  { name: "Laptop", price: 1000 },
];

//Functions
function calculateTotal(cartItems) {
  let total = 0;
  if (cartItems.length <= 0) {
    console.log("No Cart items...")
  }
  for (let i = 0; i < cartItems.length; i++) { // FIXED. DELTED THE "="
      total += cartItems[i].price; // // FIXED. DELTED THE "="
      console.log(`New ${cartItems[i].name} added. Subtotal: ${total}`) // Console.log to verify
  }
  return total;
}

const regularDiscount = 0.2

function applyDiscount(total, discountRate) {
  if (!isNaN(discountRate) && discountRate >= 0) {
    console.log(`Adding ${discountRate*100}% discount rate...`)
  return total - total * discountRate;
  } else {
    console.log("Discount rate was not a valid number") // Console.log to verify
    return total = " Not a valid input"
  }// FIXED. CHECKS FOR DISCOUNT TO BE POSITIVE NUMBER
}

function generateReceipt(cartItems, total) {
  if (!isNaN(total)) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  console.log(`Total: $${total.toFixed(2)}`)
  receipt += `Total: $${total.toFixed(2)}`; // FIXED. CHECKS IF TOTAL IS A VALID NUMBER
  return receipt;
} else {
  console.log("Total is not a valid number") // Console.log to verify
  let receipt = `Please enter valid number inputs`; 
  return receipt;
}
}

// Debugging entry point
//Regular Test
console.log(`Starting shopping cart calculation of regularCart with ${regularDiscount*100}% discount rate...`); // Console.log to verify
let total = calculateTotal(regularCart);
let discountedTotal = applyDiscount(total, regularDiscount); // 20% discount
let receipt = generateReceipt(regularCart, discountedTotal);
console.log("Calculations complete") // Console.log to verify

  //Cache
document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;