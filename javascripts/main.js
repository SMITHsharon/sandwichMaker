DON'T NEED THIS FILE


function getBread (sandwichArray) {

	var breadChoices = document.getElementByName("chk_bread");

	for (var i=0; i<breadChoices.length; i++) {
  		if (breadChoices[i].checked) {
  			// add bread to sandwich ; push choices onto array
    	}
	}
}



var buildButton = document.getElementById("buildSandwich");

buildButton.addEventListener("click", getIngredients);

function getIngredients(){
	var sandwich = [];

	getBread(sandwich);
}