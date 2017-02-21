
// This SandwichMaker IIFE augments the original one
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
	maker.addMeat = function(meatChoice) {
    return ???;
  };

  maker.getTurkeyPrice = function(meatChoice) {
  	return 0.90;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
