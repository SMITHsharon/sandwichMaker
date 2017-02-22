// THIS IS ALL BOILERPLATE

// Variable accumulates the final price. Initialize to 0.
var finalSandwichPrice = 0;

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
// RETURNS: price for the selected topping
//********************************************************
function getPrice(objArray, thisTopping) {
console.log("in getPrice / objArray :: ", objArray);
console.log("in getPrice / thisTopping :: ", thisTopping); 


	for (var i in objArray) {
		console.log("i :: ", i);
		if (i === thisTopping) {
			console.log("returning objArray[i] :: ", objArray[i]);
			return objArray[i];
		}
		
	}
}


//********************************************************
// Event Listener for Meat Chooser
//********************************************************
meatChooser.addEventListener("change", function(event) {

  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selectedTopping :: ", selectedTopping);

  // Determine the price of the topping chosen
  finalSandwichPrice += getPrice(SandwichMaker.getMeat(), selectedTopping);
  console.log("finalSandwichPrice :: ", finalSandwichPrice);

  // Add the topping to the SandwichMaker to increase the total price
  document.getElementById("orderOutput").value = "$" + finalSandwichPrice.toFixed(2);
});
