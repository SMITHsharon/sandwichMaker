
// <meat.js> augments <sandwichMaker.js>
// Boilerplate for this file was provided along with assignment specs

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

  // Adds the selected meat choice to the rray
  // RETURNS modified <workingSandwichOrder> aarray
	maker.addMeatChoice = function(thisTopping) {
    workingSandwichOrder.push(selectedTopping);
// console.log("returning workingSandwichOrder from addMeatChoice augmentor function :: ", workingSandwichOrder);
    return workingSandwichOrder;
  };

  // RETURNS the price for the selected meat choice
  maker.getMeatPrice = function(thisTopping) {
// console.log("returning meatPrices from getMeatPrice augmentor function :: ", meatPrices);
    for (var i in meatPrices) {
// console.log("i :: ", i);
      if (i === thisTopping) {
// console.log("returning meatPrices[i] :: ", meatPrices[i]);
      return meatPrices[i];
      }
    }
  }
    // return meatPrices;
  // }

  // RETURNS the new, augmented object with the new method on it to SandwichMaker
// console.log("returning from meat.js", maker);
  return maker;

})(SandwichMaker || {});
