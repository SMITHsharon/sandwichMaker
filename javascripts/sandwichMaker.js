// this function provided as given with assignment specs
// var workingSandwichOrder [];

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }

    // return getPrice: function() {
    // 	return totalPrice;
    // }
  };
})();