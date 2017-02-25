
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

  // Adds the selected meat choice to the <workingSandwichOrder["meat"] array
  // RETURNS modified <workingSandwichOrder> array
	maker.addMeatChoice = function(thisTopping) {
    workingSandwichOrder["meat"].push(selectedTopping);
    return workingSandwichOrder;
  };

  // Removes the selected meat choice from the <workingSandwichOrder["meat"] array
  // RETURNS modified <workingSandwichOrder> array
  maker.removeMeatChoice = function(thisTopping) {
    workingSandwichOrder["meat"].splice(workingSandwichOrder["meat"].indexOf(thisTopping), 1);
    return workingSandwichOrder;
  };

  // RETURNS the price for the selected meat choice
  maker.getMeatPrice = function(thisTopping) {
    for (var i in meatPrices) {
      if (i === thisTopping) {
      return meatPrices[i];
      }
    }
  }

  // RETURNS the new, augmented object with the new methods on it to SandwichMaker
  return maker;

})(SandwichMaker || {});
