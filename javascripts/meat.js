
// This SandwichMaker IIFE augments the original one
// Boilerplate for this file provided along with assignment specs

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		"turkey": 0.90,
  		"chicken": 1.50, 
  		"ham": 2.00,
  		"roast beef": 2.50,
  		"salami": 3.00,
  		"tuna": 3.50,
  		"none": 0.00
  };

  // Augment the original object with another method
  // add the selected meat choice to the sandwich
	maker.addMeat = function(meatChoice) {
    meatPrices.push(meatChoice);
    console.log("returning meatPrices from addMeat function :: ", meatPrices);
  };

  // RETURNS 
  maker.getMeat = function() {
    console.log("returning meatPrices from getMeat function :: ", meatPrices);
    return meatPrices;
  }

  // RETURNS the new, augmented object with the new method on it to SandwichMaker
  console.log("returning from meat.js", maker);
  return maker;

})(SandwichMaker || {});
