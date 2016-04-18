//******************************JavaScript Quiz******************************\\

//DOM ELEMENT VARIABLE DEFINITIONS
var mainContent = document.getElementById('mainContent');
var heightInput = document.getElementById('heightInput');
var characterInput = document.getElementById('characterInput');
var submitButton = document.getElementById('submitButton');
var clearButton = document.getElementById('clearButton');


//OBJECT AND ARRAY INIT FOR TREE VALUES
var treeSpecs = {};
var treeArray = [];


//CLEARS HTML MAIN CONTENT DIV AND INPUTS
var clear = function () {
	mainContent.innerHTML = "";
	heightInput.value = "";
	characterInput.value = "";
};


//PRINTS FORMATTED ARRAY TO DOM AND CONSOLE
var arrayPrinter = function(array, elem) {
	var arrayString = array.join("").toString();
	elem.innerHTML += ('<div>'+arrayString+'</div>');
	console.log(arrayString);
};


//RUNS RUNNER IF ENTER KEY WAS PRESSED INSIDE A TEXT INPUT
var enterChecker = function(key) {
	if ((key.which===13) || (key.keyCode===13)) {
		runner();
	}
};


//TAKES USER INPUT, CHECKS FOR BLANK INPUTS/
//ASSIGNS INPUT VALUES TO KEY/VALUE PAIRS IN RETURNED OBJECT
var treeSpecBuilder = function(object, height, character) {
	if((height!=='') && (character!=='')) {
		object.height = parseInt(height);
		object.character = character;
		clear();
		return object;
	} else {
		alert("Both fields must have a value!");
	}
};


//CREATES EMPTY ARRAY AND THEN BUILDS TREE LINE x LINE
var treeBuilder = function(specs, array) {
	var character = specs.character;
	var height = specs.height;
	var middle=height-1;

	for (var i = 0; i < (((height-1)*2)+1); i++) {
		array.push(' '.repeat(character.length));
	}

	array[(middle)] = character;
	arrayPrinter(array, mainContent);

	for (var i = 0; i < middle; i++) {
		array[(middle+(i+1))] = specs.character;
		array[(middle-(i+1))] = specs.character;
		arrayPrinter(array, mainContent);
	}
};


//RUNS THE BUILD PROGRAM
var runner = function() {
	treeArray = [];
	treeBuilder(treeSpecBuilder(treeSpecs, heightInput.value, characterInput.value), treeArray);
};


//BUTTON TEXT
submitButton.innerHTML = "Grow your tree";
clearButton.innerHTML = "Clear"


//EVENT LISTENER FOR CLICKS ON SUBMIT BUTTON
submitButton.addEventListener("click", runner, false);
clearButton.addEventListener("click", clear, false);


//EVENT LISTENERS FOR KEYS PRESSED IN TEXT BOXES
heightInput.addEventListener("keypress", function(key) {
	enterChecker(key);
});

characterInput.addEventListener("keypress", function(key) {
	enterChecker(key);
});
