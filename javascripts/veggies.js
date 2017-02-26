// <veggies.js> augments <sandwichMaker.js>

var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiesPrices = {
  		"lettuce": 0.25,
  		"spinach": 0.35, 
  		"sprouts": 0.35, 
      "tomato": 0.50, 
      "onion": 0.25, 
      "peppers": 0.25, 
      "olives": 0.40
  };

  // Adds the selected veggie choice to the <workingSandwichOrder["Veggies"] array
  // RETURNS modified <workingSandwichOrder> array
	maker.addVeggiesChoice = function(thisTopping) {
    workingSandwichOrder["Veggies"].push(selectedTopping);
    return workingSandwichOrder;
  };

  // Removes the selected veggie choice from the <workingSandwichOrder["Veggies"] array
  // RETURNS modified <workingSandwichOrder> array
  maker.removeVeggiesChoice = function(thisTopping) {
    workingSandwichOrder["Veggies"].splice(workingSandwichOrder["Veggies"].indexOf(thisTopping), 1);
    return workingSandwichOrder;
  };

  // RETURNS the price for the selected cheese choice
  maker.getVeggiesPrice = function(thisTopping) {
    for (var i in veggiesPrices) {
      if (i === thisTopping) {
      return veggiesPrices[i];
      }
    }
  }

  // RETURNS the new, augmented object with the new methods on it to SandwichMaker
  return maker;

})(SandwichMaker || {});



