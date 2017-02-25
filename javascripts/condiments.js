// <condiments.js> augments <sandwichMaker.js>

var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var conPrices = {
  		"mustard": 0.25,
  		"mayonnaise": 0.35, 
  		"ketchup": 0.35, 
      "vin&oil": 0.50, 
      "ranch": 0.40
  };

  // Adds the selected condiments choice to the <workingSandwichOrder["condiments"] array
  // RETURNS modified <workingSandwichOrder> array
	maker.addCondimentsChoice = function(thisTopping) {
    workingSandwichOrder["condiments"].push(selectedTopping);
    return workingSandwichOrder;
  };

  // Removes the selected condiments choice from the <workingSandwichOrder["condiments"] array
  // RETURNS modified <workingSandwichOrder> array
  maker.removeCondimentsChoice = function(thisTopping) {
    workingSandwichOrder["condiments"].splice(workingSandwichOrder["condiments"].indexOf(thisTopping), 1);
    return workingSandwichOrder;
  };

  // RETURNS the price for the selected condiments choices
  maker.getCondimentsPrice = function(thisTopping) {
    for (var i in conPrices) {
      if (i === thisTopping) {
      return conPrices[i];
      }
    }
  }

  // RETURNS the new, augmented object with the new methods on it to SandwichMaker
  return maker;

})(SandwichMaker || {});