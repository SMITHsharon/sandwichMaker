// THIS IS ALL BOILERPLATE

// Variable accumulates the final price. Initialize to 0.
var finalSandwichPrice = 0;

var finalSandwichOrder;
var workingSandwichOrder = {
  "bread": "",
  "meat": [],
  "cheese": [],
  "veggies": [],
  "condiments": []
};

// Variable holds the topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("breadChoices");
var meatChooser = document.getElementById("meatChoices");
var cheeseChooser = document.getElementById("cheeseChoices");
var veggiesChooser = document.getElementById("veggieChoices");
var condimentsChooser = document.getElementById("condimentsChoices");



//********************************************************
// Event Listener for breadChooser
//********************************************************
breadChooser.addEventListener("change", function(event) {

  // Get the selected bread topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    if (workingSandwichOrder.bread !== "") {
      // bread choice is being changed
      // subtract the bread being removed from <finalSandwichPrice>
      finalSandwichPrice -= SandwichMaker.getBreadPrice(workingSandwichOrder.bread);
    }
    // add the selectedTopping to <workingSandwichOrder> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addBreadChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getBreadPrice(selectedTopping);

  } 

  // Output the price-in-process to the DOM
  document.getElementById("orderOutput").innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
  console.log("workingSandwichOrder :: ", workingSandwichOrder); 
});


//********************************************************
// Event Listener for meatChooser
//********************************************************
meatChooser.addEventListener("change", function(event) {

  // Get the selected meat topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    if (selectedTopping !== "none") {    
      // add the selectedTopping to <workingSandwichOrder["meat"]> array
      // add the topping price to <finalSandwichPrice>
      SandwichMaker.addMeatChoice(selectedTopping);
      finalSandwichPrice += SandwichMaker.getMeatPrice(selectedTopping);

    } else {
      // selectedTopping is <No Meat>
      // remove any meat toppings that have been added to <workingSandwichOrder> array
      // subtract any meat topping prices that have been added to <finalSandwichPrice>
      var loopLength = workingSandwichOrder["meat"].length;
      for (var i=0; i<loopLength; i++) {
        finalSandwichPrice -= SandwichMaker.getMeatPrice(workingSandwichOrder["meat"][0]);  // item to be removed 
        SandwichMaker.removeMeatChoice(workingSandwichOrder["meat"][0]);                    // will always be first item in array

        // clear the DOM check boxes to show only <No Meat> selected
        var meatChoicesDisplay = document.getElementById("meatChoices");
  console.log("meatChoicesDisplay :: ", meatChoicesDisplay);
        var checkBoxesDisplay = "<h3>Meat Choices</h3>";
        checkBoxesDisplay += "<ul>";
        checkBoxesDisplay += '<li><input type="checkbox" name="chk_meat" value="turkey" />Turkey</li>';
        checkBoxesDisplay += '<li><input type="checkbox" name="chk_meat" value="chicken" />Chicken</li>';
        checkBoxesDisplay += '<li><input type="checkbox" name="chk_meat" value="ham" />Ham</li>';
        checkBoxesDisplay += '<li><input type="checkbox" name="chk_meat" value="roast beef" />Roast Beef</li>';
        checkBoxesDisplay += '<li><input type="checkbox" name="chk_meat" value="salami" />Salami</li>';
        checkBoxesDisplay += '<li><input type="checkbox" name="chk_meat" value="tuna" />Tuna</li>';
        checkBoxesDisplay += '<li><input type="checkbox" name="chk_meat" value="none" checked="checked" />No Meat</li>';
        checkBoxesDisplay += '</ul>';
        meatChoicesDisplay.innerHTML = checkBoxesDisplay;
      }
    }

  } else {
    // remove the selected item from <workingSandwichOrder["meat"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeMeatChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getMeatPrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  document.getElementById("orderOutput").innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
  console.log("workingSandwichOrder :: ", workingSandwichOrder); 
});


//********************************************************
// Event Listener for cheeseChooser
//********************************************************
cheeseChooser.addEventListener("change", function(event) {

  // Get the selected cheese topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    // add the selectedTopping to <workingSandwichOrder["cheese"]> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addCheeseChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getCheesePrice(selectedTopping);

  } else {
    // remove the selected item from <workingSandwichOrder["cheese"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeCheeseChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getCheesePrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  document.getElementById("orderOutput").innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
  console.log("workingSandwichOrder :: ", workingSandwichOrder); 
});


//********************************************************
// Event Listener for veggiesChooser
//********************************************************
veggiesChooser.addEventListener("change", function(event) {

  // Get the selected veggies topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    // add the selectedTopping to <workingSandwichOrder["veggies"]> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addVeggiesChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getVeggiesPrice(selectedTopping);

  } else {
    // remove the selected item from <workingSandwichOrder["veggies"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeVeggiesChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getVeggiesPrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  document.getElementById("orderOutput").innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
  console.log("workingSandwichOrder :: ", workingSandwichOrder); 
});



//********************************************************
// Event Listener for condimentsChooser
//********************************************************
condimentsChooser.addEventListener("change", function(event) {

  // Get the selected veggies topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    // add the selectedTopping to <workingSandwichOrder["condiments"]> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addCondimentsChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getCondimentsPrice(selectedTopping);

  } else {
    // remove the selected item from <workingSandwichOrder["condiments"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeCondimentsChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getCondimentsPrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  document.getElementById("orderOutput").innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
  console.log("workingSandwichOrder :: ", workingSandwichOrder); 
});







