///////////////////// Pushing the body /////////////////////
let headingdiv = document.querySelector(".title");
let heading = headingdiv.querySelector("p");
let cartimg = document.querySelector(".cartimg");
let circ = document.querySelector(".circle");

let collec1 = document.querySelector(".collec1");
let img1 = collec1.querySelector("img");
let h1 = collec1.querySelector("h1");
let p1 = collec1.querySelector("p");
let pounds1 = collec1.querySelector(".pounds");
let button1 = collec1.querySelector(".button1");
let line1 = collec1.querySelector(".line1");

let collec2 = document.querySelector(".collec2");
let img2 = collec2.querySelector("img");
let h2 = collec2.querySelector("h1");
let p2 = collec2.querySelector("p");
let pounds2 = collec2.querySelector(".pounds");
let button2 = collec2.querySelector(".button2");
let line2 = collec2.querySelector(".line2");

let collec3 = document.querySelector(".collec3");
let img3 = collec3.querySelector("img");
let h3 = collec3.querySelector("h1");
let p3 = collec3.querySelector("p");
let pounds3 = collec3.querySelector(".pounds");
let button3 = collec3.querySelector(".button3");
let line3 = collec3.querySelector(".line3");

let collec4 = document.querySelector(".collec4");
let img4 = collec4.querySelector("img");
let h4 = collec4.querySelector("h1");
let p4 = collec4.querySelector("p");
let pounds4 = collec4.querySelector(".pounds");
let button4 = collec4.querySelector(".button4");

let product1 = document.querySelector(".product1");
let cartimg1 = product1.querySelector("img");
let carttext1 = product1.querySelector("p");

let product2 = document.querySelector(".product2");
let cartimg2 = product2.querySelector("img");
let carttext2 = product2.querySelector("p");

let product3 = document.querySelector(".product3");
let cartimg3 = product3.querySelector("img");
let carttext3 = product3.querySelector("p");

let product4 = document.querySelector(".product4");
let cartimg4 = product4.querySelector("img");
let carttext4 = product4.querySelector("p");

function openNav() {
  document.getElementById("Cart").style.width = "400px";
  document.getElementById("main").style.marginRight = "400px";
  heading.style.left = "7%";
  cartimg.style.opacity = "0";
  circ.style.opacity = "0";

  img1.style.left = "7%";
  h1.style.left = "29%";
  p1.style.left = "29%";
  pounds1.style.left = "29%";
  button1.style.left = "29%";
  line1.style.left = "7%";

  img2.style.left = "7%";
  h2.style.left = "29%";
  p2.style.left = "29%";
  pounds2.style.left = "29%";
  button2.style.left = "29%";
  line2.style.left = "7%";

  img3.style.left = "7%";
  h3.style.left = "29%";
  p3.style.left = "29%";
  pounds3.style.left = "29%";
  button3.style.left = "29%";
  line3.style.left = "7%";

  img4.style.left = "7%";
  h4.style.left = "29%";
  p4.style.left = "29%";
  pounds4.style.left = "29%";
  button4.style.left = "29%";

  displayCart();
}

//Resetting the positions once the cart is close//
function closeNav() {
  document.getElementById("Cart").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  heading.style.left = "20%";
  cartimg.style.opacity = "1";
  circ.style.opacity = "1";

  img1.style.left = "20%";
  h1.style.left = "42%";
  p1.style.left = "42%";
  pounds1.style.left = "42%";
  button1.style.left = "42%";
  line1.style.left = "20%";

  img2.style.left = "20%";
  h2.style.left = "42%";
  p2.style.left = "42%";
  pounds2.style.left = "42%";
  button2.style.left = "42%";
  line2.style.left = "20%";

  img3.style.left = "20%";
  h3.style.left = "42%";
  p3.style.left = "42%";
  pounds3.style.left = "42%";
  button3.style.left = "42%";
  line3.style.left = "20%";

  img4.style.left = "20%";
  h4.style.left = "42%";
  p4.style.left = "42%";
  pounds4.style.left = "42%";
  button4.style.left = "42%";

  product1.style.opacity = "0";
  product2.style.opacity = "0";
  product3.style.opacity = "0";
  product4.style.opacity = "0";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// Cart ///////////////////////////////////////////////////

let cartItems = [];
let button1count = false;
let button2count = false;
let button3count = false;
let button4count = false;
const quantityElement1 = document.getElementById("quantity1");
let quantity1 = parseInt(quantityElement1.textContent);
const quantityElement2 = document.getElementById("quantity2");
let quantity2 = parseInt(quantityElement2.textContent);
const quantityElement3 = document.getElementById("quantity3");
let quantity3 = parseInt(quantityElement3.textContent);
const quantityElement4 = document.getElementById("quantity4");
let quantity4 = parseInt(quantityElement4.textContent);

let priceframe1 = document.querySelector(".price1");
let price1 = priceframe1.querySelector("p");
let priceframe2 = document.querySelector(".price2");
let price2 = priceframe2.querySelector("p");
let priceframe3 = document.querySelector(".price3");
let price3 = priceframe3.querySelector("p");
let priceframe4 = document.querySelector(".price4");
let price4 = priceframe4.querySelector("p");

let totalframe = document.querySelector(".total");
let totalprice = totalframe.querySelector("p");

let clearbtn = document.querySelector(".clear");
// Get references to DOM elements
let circle = document.querySelector(".circle");

// Function to update the cart count
function updateCartCount() {
  // Update the count displayed in the circle element
  let count = 0;
  cartItems.forEach((item) => (count = count + item.count));
  circle.textContent = count;
}

// Clear the cart
clearbtn.addEventListener("click", function () {
  product1.style.opacity = "0";
  product2.style.opacity = "0";
  product3.style.opacity = "0";
  product4.style.opacity = "0";
  cartItems.splice(0, cartItems.length);
  button1count = false;
  button2count = false;
  button3count = false;
  button4count = false;
  totalprice.textContent = "£0";
  updateCartCount();
});

// Function to handle adding an item to the cart
function addToCart(item) {
  // Add the item to the cart array
  cartItems.push(item);
}

// Funtion to update the quantities
function updateQuantity(n) {
  if (n === 0) {
    quantity1 = cartItems[n].count;
    quantityElement1.textContent = quantity1;
  } else if (n === 1) {
    quantity2 = cartItems[n].count;
    quantityElement2.textContent = quantity2;
  } else if (n === 2) {
    quantity3 = cartItems[n].count;
    quantityElement3.textContent = quantity3;
  } else if (n === 3) {
    quantity4 = cartItems[n].count;
    quantityElement4.textContent = quantity4;
  }
}

// Function to update the price
function updatePrice(n) {
  if (n === 0) {
    let price = cartItems[0].count * cartItems[0].price;
    price1.textContent = "£" + String(price);
  } else if (n === 1) {
    let price = cartItems[1].count * cartItems[1].price;
    price2.textContent = "£" + String(price);
  } else if (n === 2) {
    let price = cartItems[2].count * cartItems[2].price;
    price3.textContent = "£" + String(price);
  } else if (n === 3) {
    let price = cartItems[3].count * cartItems[3].price;
    price4.textContent = "£" + String(price);
  }
}

// Function to display the total price
function totalPrice() {
  let total = 0;
  cartItems.forEach((item) => (total = total + item.count * item.price));
  totalprice.textContent = String(total);
}

// Function to display items in the cart
function displayCart() {
  for (let i = 0; i < cartItems.length; i++) {
    if (i === 0) {
      cartimg1.src = cartItems[i].img;
      carttext1.textContent = cartItems[i].name;
      quantityElement1.textContent = cartItems[i].count;
      product1.style.opacity = "1";
    } else if (i === 1) {
      cartimg2.src = cartItems[i].img;
      carttext2.textContent = cartItems[i].name;
      quantityElement2.textContent = cartItems[i].count;
      product2.style.opacity = "1";
    } else if (i === 2) {
      cartimg3.src = cartItems[i].img;
      carttext3.textContent = cartItems[i].name;
      quantityElement3.textContent = cartItems[i].count;
      product3.style.opacity = "1";
    } else if (i === 3) {
      cartimg4.src = cartItems[i].img;
      carttext4.textContent = cartItems[i].name;
      quantityElement4.textContent = cartItems[i].count;
      product4.style.opacity = "1";
    }
  }
}

// Add a click event listener to the "Add to Cart" button of the English Collection
button1.addEventListener("click", function () {
  if (button1count === false) {
    // Adding the item to the cart list
    addToCart({
      id: 1,
      img: "english.png",
      name: "English Pack",
      price: 10,
      count: 1,
    });
    button1count = true;
    let english = cartItems.findIndex((id) => id.id === 1);
    updateQuantity(english);
    updatePrice(english);
    totalPrice();
    displayCart();
  } else {
    let english = cartItems.findIndex((id) => id.id === 1);
    cartItems[english].count++;
    updateQuantity(english);
    updatePrice(english);
    totalPrice();
    displayCart();
  }
  updateCartCount();
});

// Add a click event listener to the "Add to Cart" button of the Spanish Collection
button2.addEventListener("click", function () {
  if (button2count === false) {
    // Adding the item to the cart list
    addToCart({
      id: 2,
      img: "spanish.png",
      name: "Spanish Pack",
      price: 10,
      count: 1,
    });
    button2count = true;
    let spanish = cartItems.findIndex((id) => id.id === 2);
    updateQuantity(spanish);
    updatePrice(spanish);
    totalPrice();
    displayCart();
  } else {
    let spanish = cartItems.findIndex((id) => id.id === 2);
    cartItems[spanish].count++;
    updateQuantity(spanish);
    updatePrice(spanish);
    totalPrice();
    displayCart();
  }
  quantityElement2.textContent = quantity2;
  updateCartCount();
});

// Add a click event listener to the "Add to Cart" button of the French Collection
button3.addEventListener("click", function () {
  if (button3count === false) {
    // Adding the item to the cart list
    addToCart({
      id: 3,
      img: "french.png",
      name: "French Pack",
      price: 10,
      count: 1,
    });
    button3count = true;
    let french = cartItems.findIndex((id) => id.id === 3);
    updateQuantity(french);
    updatePrice(french);
    totalPrice();
    displayCart();
  } else {
    let french = cartItems.findIndex((id) => id.id === 3);
    cartItems[french].count++;
    updateQuantity(french);
    updatePrice(french);
    totalPrice();
    displayCart();
  }
  quantityElement3.textContent = quantity3;
  updateCartCount();
});

// Add a click event listener to the "Add to Cart" button of the Korean Collection
button4.addEventListener("click", function () {
  if (button4count === false) {
    // Adding the item to the cart list
    addToCart({
      id: 4,
      img: "korean.png",
      name: "Korean Pack",
      price: 10,
      count: 1,
    });
    button4count = true;
    let korean = cartItems.findIndex((id) => id.id === 4);
    updateQuantity(korean);
    updatePrice(korean);
    totalPrice();
    displayCart();
  } else {
    let korean = cartItems.findIndex((id) => id.id === 4);
    cartItems[korean].count++;
    updateQuantity(korean);
    updatePrice(korean);
    totalPrice();
    displayCart();
  }
  quantityElement4.textContent = quantity4;
  updateCartCount();
});

// Function to increment the counter
function increment1() {
  quantity1++;
  cartItems[0].count++;
  quantityElement1.textContent = quantity1;
  updateCartCount();
  updatePrice(0);
  totalPrice();
}

// Function to decrement the counter
function decrement1() {
  if (quantity1 > 0) {
    quantity1--;
    cartItems[0].count--;
    quantityElement1.textContent = quantity1;
    updateCartCount();
    updatePrice(0);
    totalPrice();
  }
}

// Function to increment the counter
function increment2() {
  quantity2++;
  cartItems[1].count++;
  quantityElement2.textContent = quantity2;
  updateCartCount();
  updatePrice(1);
  totalPrice();
}

// Function to decrement the counter
function decrement2() {
  if (quantity2 > 0) {
    quantity2--;
    cartItems[1].count--;
    quantityElement2.textContent = quantity2;
    updateCartCount();
    updatePrice(1);
    totalPrice();
  }
}

// Function to increment the counter
function increment3() {
  quantity3++;
  cartItems[2].count++;
  quantityElement3.textContent = quantity3;
  updateCartCount();
  updatePrice(2);
  totalPrice();
}

// Function to decrement the counter
function decrement3() {
  if (quantity3 > 0) {
    quantity3--;
    cartItems[2].count--;
    quantityElement3.textContent = quantity3;
    updateCartCount();
    updatePrice(2);
    totalPrice();
  }
}

// Function to increment the counter
function increment4() {
  quantity4++;
  cartItems[3].count++;
  quantityElement4.textContent = quantity4;
  updateCartCount();
  updatePrice(3);
  totalPrice();
}

// Function to decrement the counter
function decrement4() {
  if (quantity4 > 0) {
    quantity4--;
    cartItems[3].count--;
    quantityElement4.textContent = quantity4;
    updateCartCount();
    updatePrice(3);
    totalPrice();
  }
}

/*#######################################################*/
// function to make sure the forms are validated
function placeOrder() {
  const nameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const addressInput = document.getElementById('address');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const addressError = document.getElementById('addressError');

  let isValid = true;
  nameError.textContent = '';   // clears any text previously displayed
  emailError.textContent = '';
  addressError.textContent = '';


  if (!nameInput.value.trim()) {  // if name field is left empty
      nameError.textContent = '(*Required*)';
      nameInput.style.borderColor = '#FF0000';
      nameInput.style.borderWidth = '3px';
      nameInput.style.backgroundColor = '#FFC0CB';
      isValid = false;                    // so that form isnt valid
  }else {
      if (isValid===true){
          nameInput.style.borderColor = '';
          nameInput.style.borderWidth = '';
          nameInput.style.backgroundColor = '';
      }
  }

  if (!addressInput.value.trim()) {  // if address field is left empty
    addressError.textContent = '(*Required*)';
    addressInput.style.borderColor = '#FF0000';
    addressInput.style.borderWidth = '3px';
    addressInput.style.backgroundColor = '#FFC0CB';
    isValid = false;                    // so that form isnt valid
}else {
    if (isValid===true){
      addressInput.style.borderColor = '';
      addressInput.style.borderWidth = '';
      addressInput.style.backgroundColor = '';
    }
}

  if (!emailInput.value.trim()) {
      emailError.textContent = '(*Required*)';  // if Email field is left empty
      emailInput.style.borderColor = '#FF0000';
      emailInput.style.borderWidth = '3px';
      emailInput.style.backgroundColor = '#FFC0CB';
      isValid = false;

  }
  else if (!isValidEmail(emailInput.value.trim())) {  //checks if email in correct format
      emailError.textContent = '(*Invalid format*)';
      emailInput.style.borderColor = '#FF0000';
      emailInput.style.borderWidth = '3px';
      emailInput.style.backgroundColor = '#FFC0CB';
      isValid = false;

  }else {

          emailInput.style.borderColor = '';
          emailInput.style.borderWidth = '';
          emailInput.style.backgroundColor = '';

  }
  if (isValid) {
    success();
  }
  return isValid;
}

// Function to check whether the mail is valid
function isValidEmail(email) {
const Validmail = /^[^\s@]+@gmail.com$/; //email validation
  const Validmail2 = /^[\w.-]+(\d+)@iit.ac.lk$/
  ;
return Validmail.test(email)||Validmail2.test(email) ;
}

let successframe = document.querySelector(".success");
let message = successframe.querySelector("p")
let fieldname = nameInput.value;

// Function to display the order summary
function success(){
  successframe.style.display = "block";
  msg();
}
function msg() {
  let entireMsg = ''; // Initialize the entireMsg variable here
  for (let i = 0; i < cartItems.length; i++) {
    let itemprice = cartItems[i].count * cartItems[i].price;
    let itemString = itemprice.toString();
    let itemmsg = cartItems[i].name.concat(" at a cost of £", itemString, "\n");
    entireMsg += itemmsg; // Append each item's details to entireMsg
  }
  let total = 0;
  cartItems.forEach((item) => (total = total + item.count * item.price));
  let totalString = total.toString();
  entireMsg = "Dear " + document.getElementById('fname').value + ", you have ordered: \n" + entireMsg + ". Total Price is £" + totalString + ".";
  message.textContent = entireMsg; // Set the entireMsg as the text content of the message paragraph
}

// Function to close the order summary
function successclose(){
  successframe.style.display = "none";
}



