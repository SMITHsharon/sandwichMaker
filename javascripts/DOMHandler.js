// THIS IS ALL BOILERPLATE

// Variable accumulates the final price. Initialize to 0.
var finalSandwichPrice = 0;
// var sandwichArray = [];
var finalSandwichOrder = [];
var workingSandwichOrder = [];

// Variable holds the topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
// var breatChooser
var meatChooser = document.getElementById("meatChoices");
// var cheeseChooser
// var veggiesChooser
// var condimentsChooser



//********************************************************
// Function gets the price for the selected topping
// PARAMETERS: array of Topping Objects; user-selected topping
// <for each> loop used for Objects
//            Loops over the Object Array Keys <i>, returns associated value
// RETURNS: price for the selected topping
//********************************************************
// function getPrice(objArray, thisTopping) {
// console.log("in getPrice / objArray :: ", objArray);
// console.log("in getPrice / thisTopping :: ", thisTopping); 

// 	for (var i in objArray) {
// 		console.log("i :: ", i);
// 		if (i === thisTopping) {
// 			console.log("returning objArray[i] :: ", objArray[i]);
// 			return objArray[i];
// 		}
// 	}
// }



//********************************************************
// Event Listener for meatChooser
//********************************************************
meatChooser.addEventListener("change", function(event) {

  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
// if checked
  // sandwichArray.push(selectedTopping);
  // workingSandwichOrder = SandwichMaker.addMeatChoice(selectedTopping);
  SandwichMaker.addMeatChoice(selectedTopping);
  // console.log("in meatChooser EventListener / sandwichArray :: ", sandwichArray); 
  console.log("return from addMeatChoice augmentor function :: ", workingSandwichOrder); 
// else state is unchecked => remove selected item from sandwichArray; subtract price from <finalSandwichPrice>

  finalSandwichPrice += SandwichMaker.getMeatPrice(selectedTopping);
  console.log("finalSandwichPrice :: ", finalSandwichPrice);

  // Output the price to the DOM
  // document.getElementById("orderOutput").value = "$" + finalSandwichPrice.toFixed(2);
  document.getElementById("orderOutput").innerHTML = "$" + finalSandwichPrice.toFixed(2);

  // Add the topping to the SandwichMaker to increase the total price
});










