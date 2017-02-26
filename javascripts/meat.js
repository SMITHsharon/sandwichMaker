
// <meat.js> augments <sandwichMaker.js>
// Boilerplate for this file was provided along with assignment specs

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		"turkey": 1.00,
  		"chicken": 1.00, 
  		"ham": 2.00,
  		"roast beef": 1.50,
  		"salami": 2.50,
  		"tuna": 2.50,
  		"none": 0.00
  };

  // Adds the selected meat choice to the <workingSandwichOrder["Meat"] array
  // RETURNS modified <workingSandwichOrder> array
	maker.addMeatChoice = function(thisTopping) {
    workingSandwichOrder["Meat"].push(selectedTopping);
    return workingSandwichOrder;
  };

  // Removes the selected meat choice from the <workingSandwichOrder["mMat"] array
  // RETURNS modified <workingSandwichOrder> array
  maker.removeMeatChoice = function(thisTopping) {
    workingSandwichOrder["Meat"].splice(workingSandwichOrder["Meat"].indexOf(thisTopping), 1);
    return workingSandwichOrder;
  };

  // RETURNS the price for the selected meat choice
  maker.getMeatPrice = function(thisTopping) {
    return meatPrices[thisTopping];
  }

  // RETURNS the new, augmented object with the new methods on it to SandwichMaker
  return maker;

})(SandwichMaker || {});






