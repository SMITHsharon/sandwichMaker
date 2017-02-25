// <cheese.js> augments <sandwichMaker.js>

var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {
  		"cheddar": 1.00,
  		"swiss": 1.10, 
  		"american": 0.90
  };

  // Adds the selected cheese choice to the <workingSandwichOrder["cheese"] array
  // RETURNS modified <workingSandwichOrder> array
	maker.addCheeseChoice = function(thisTopping) {
    workingSandwichOrder["cheese"].push(selectedTopping);
    return workingSandwichOrder;
  };

  // Removes the selected cheese choice from the <workingSandwichOrder["cheese"] array
  // RETURNS modified <workingSandwichOrder> array
  maker.removeCheeseChoice = function(thisTopping) {
    workingSandwichOrder["cheese"].splice(workingSandwichOrder["cheese"].indexOf(thisTopping), 1);
    return workingSandwichOrder;
  };

  // RETURNS the price for the selected cheese choice
  maker.getCheesePrice = function(thisTopping) {
    for (var i in cheesePrices) {
      if (i === thisTopping) {
      return cheesePrices[i];
      }
    }
  }

  // RETURNS the new, augmented object with the new methods on it to SandwichMaker
  return maker;

})(SandwichMaker || {});