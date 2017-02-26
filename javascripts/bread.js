// <bread.js> augments <sandwichMaker.js>

var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrices = {
  		"whWheat": 0.50,
  		"white": 1.00, 
  		"rye": 0.50,
  		"panini": 0.90,
  		"wrap": 0.50
  };

  // Adds the selected bread choice to the <workingSandwichOrder["Bread"] array
  // RETURNS modified <workingSandwichOrder> array
	maker.addBreadChoice = function(thisTopping) {
    workingSandwichOrder.Bread = selectedTopping;
    return workingSandwichOrder;
  };

  // RETURNS the price for the selected bread choice
  maker.getBreadPrice = function(thisTopping) {
    for (var i in breadPrices) {
      if (i === thisTopping) {
      return breadPrices[i];
      }
    }
  }

  // RETURNS the new, augmented object with the new methods on it to SandwichMaker
  return maker;

})(SandwichMaker || {});
