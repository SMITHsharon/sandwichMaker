// THIS IS ALL BOILERPLATE

// Variable accumulates the final price. Initialize to 0.
var finalSandwichPrice = 0;

var finalSandwichOrder;
var workingSandwichOrder = {
  "Bread": "",
  "Meat": [],
  "Cheese": [],
  "Veggies": [],
  "Condiments": []
};

// Variable holds the topping that the user selects
var selectedTopping;

// vars hold a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("breadChoices");
var meatChooser = document.getElementById("meatChoices");
var cheeseChooser = document.getElementById("cheeseChoices");
var veggiesChooser = document.getElementById("veggieChoices");
var condimentsChooser = document.getElementById("condimentsChoices");


var doneButton = document.getElementById("buildSandwich");
var calculatingOutput = document.getElementById("orderOutput");
var finalOutputHTML = document.getElementById("orderOutput");



//********************************************************
// Event Listener for breadChooser
//********************************************************
breadChooser.addEventListener("change", function(event) {

  // Get the selected bread topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    if (workingSandwichOrder.Bread !== "") {
      // bread choice is being changed
      // subtract the bread being removed from <finalSandwichPrice>
      finalSandwichPrice -= SandwichMaker.getBreadPrice(workingSandwichOrder.Bread);
    }
    // add the selectedTopping to <workingSandwichOrder> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addBreadChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getBreadPrice(selectedTopping);
  } 

  // Output the price-in-process to the DOM
  calculatingOutput.innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
});


//********************************************************
// Event Listener for meatChooser
//********************************************************
meatChooser.addEventListener("change", function(event) {

  // Get the selected meat topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    if (selectedTopping !== "none") {    
      // add the selectedTopping to <workingSandwichOrder["Meat"]> array
      // add the topping price to <finalSandwichPrice>
      SandwichMaker.addMeatChoice(selectedTopping);
      finalSandwichPrice += SandwichMaker.getMeatPrice(selectedTopping);

    } else {
      // selectedTopping is <No Meat>
      // remove any meat toppings that have been added to <workingSandwichOrder> array
      // subtract any meat topping prices that have been added to <finalSandwichPrice>
      var loopLength = workingSandwichOrder["Meat"].length;
      for (var i=0; i<loopLength; i++) {
        finalSandwichPrice -= SandwichMaker.getMeatPrice(workingSandwichOrder["Meat"][0]);  // item to be removed 
        SandwichMaker.removeMeatChoice(workingSandwichOrder["Meat"][0]);                    // will always be first item in array

        // clear the DOM check boxes to show only <No Meat> selected
        clearCheckBoxes();
      }
    }

  } else {
    // remove the selected item from <workingSandwichOrder["Meat"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeMeatChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getMeatPrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  calculatingOutput.innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
});


function clearCheckBoxes() {
  var meatChoicesDisplay = document.getElementById("meatChoices");
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



//********************************************************
// Event Listener for cheeseChooser
//********************************************************
cheeseChooser.addEventListener("change", function(event) {

  // Get the selected cheese topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    // add the selectedTopping to <workingSandwichOrder["Cheese"]> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addCheeseChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getCheesePrice(selectedTopping);

  } else {
    // remove the selected item from <workingSandwichOrder["Cheese"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeCheeseChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getCheesePrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  calculatingOutput.innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
});


//********************************************************
// Event Listener for veggiesChooser
//********************************************************
veggiesChooser.addEventListener("change", function(event) {

  // Get the selected veggies topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    // add the selectedTopping to <workingSandwichOrder["Veggies"]> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addVeggiesChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getVeggiesPrice(selectedTopping);

  } else {
    // remove the selected item from <workingSandwichOrder["Veggies"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeVeggiesChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getVeggiesPrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  calculatingOutput.innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
});



//********************************************************
// Event Listener for condimentsChooser
//********************************************************
condimentsChooser.addEventListener("change", function(event) {

  // Get the selected veggies topping from the DOM
  selectedTopping = event.target.value;

  if (event.target.checked) {

    // add the selectedTopping to <workingSandwichOrder["Condiments"]> array
    // add the topping price to <finalSandwichPrice>
    SandwichMaker.addCondimentsChoice(selectedTopping);
    finalSandwichPrice += SandwichMaker.getCondimentsPrice(selectedTopping);
console.log("added Condiments / workingSandwichOrder:: ", workingSandwichOrder)

  } else {
    // remove the selected item from <workingSandwichOrder["Condiments"]> array
    // subtract the topping price from <finalSandwichPrice>
    SandwichMaker.removeCondimentsChoice(selectedTopping);
    finalSandwichPrice -= SandwichMaker.getCondimentsPrice(selectedTopping);
  }

  // Output the price-in-process to the DOM
  calculatingOutput.innerHTML = "Calculating Price: $" + finalSandwichPrice.toFixed(2);
});



//********************************************************
// Event Listener for Done button
//********************************************************
doneButton.addEventListener("click", function() {
    outputFinalOrder();
});



//********************************************************
// function to output final order
// accumulated price stored in <finalSandwichPrice>
// sandwich choices stored in <workingSandwichOrder> array
//********************************************************
function outputFinalOrder() {

  var tempOutputStr;

  var priceStr = "<h3>Total Price: $" + finalSandwichPrice.toFixed(2) + "</h3>";

  tempOutputStr = "<h3>Sandwich Choices</h3>";
  for (var i in workingSandwichOrder) {
    if (i === "Bread") {
      tempOutputStr += "<strong>Bread: </strong>" + workingSandwichOrder[i] + "</br>";
    } else {
      // join the array items of the topping choice into a string
      tempOutputStr += "<strong>" + i + ": </strong>" + workingSandwichOrder[i].join(', ') + "</br>";
    }        
  }
    tempOutputStr += "<strong>" + priceStr + "</strong>";

    finalOutputHTML.innerHTML = tempOutputStr;
}


















