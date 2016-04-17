//******************************JavaScript Quiz******************************\\

//DOM ELEMENT VARIABLE DEFINITIONS
var mainContent = document.getElementById('mainContent');
var heightInput = document.getElementById('heightInput');
var characterInput = document.getElementById('characterInput');
var submitButton = document.getElementById('submitButton');
var clearButton = document.getElementById('clearButton');

//OBJECT AND ARRAY FOR TREE VALUES
var treeSpecs = {};
var treeArray = [];

//TAKES USER INPUT, CHECKS FOR BLANK INPUTS AND ASSIGNS VALUES TO KEY/VALUE PAIRS IN OBJECT
var treeSpecBuilder = function() {
	if((heightInput.value!=='') && (characterInput.value!=='')) {
		treeSpecs.height = parseInt(heightInput.value);
		treeSpecs.character = characterInput.value;
		clear();
		return treeSpecs;
	} else {
		alert("Both fields must have a value!");
	}
};

//BUILDS TREE STRUCTURE BY ADDING 
var treeBuilder = function(specs) {

	var character = specs.character;
	var height = specs.height;
	var middle=(height-1);

	for (var i = 0; i < (((height-1)*2)+1); i++) {
		treeArray.push(' ');
	}
	
	treeArray[(middle)] = character;
	var treeArrayString = treeArray.join("").toString();
	console.log(treeArrayString);
	mainContent.innerHTML += ('<div>'+treeArrayString+'</div>');

	for (var i = 0; i < middle; i++) {
		treeArray[(middle+(i+1))] = specs.character;
		treeArray[(middle-(i+1))] = specs.character;
		var treeArrayString = treeArray.join("").toString();
		console.log(treeArrayString);
		mainContent.innerHTML += ('<div>'+treeArrayString+'</div>');
	}

	treeArray = [];
};

//CLEARS MAIN CONTENT DIV AND INPUTS
var clear = function () {
	mainContent.innerHTML = "";
	heightInput.value = "";
	characterInput.value = "";
};

//CALLS TREE FUNCTIONS
var runner = function() {
	treeBuilder(treeSpecBuilder());
};

var enterChecker = function() {
	if ((keyPressed.which===13) || (keyPressed.keyCode==13)) {
		runner();
	}
};

//BUTTON TEXT
submitButton.innerHTML = "Grow your tree";
clearButton.innerHTML = "Clear"

//RUNS RUNNER FUNCTION WHEN SUBMIT BUTTON IS CLICKED
submitButton.addEventListener("click", runner, false);

//RUNS RUNNER WHEN ENTER IS PRESSED IN TEXT BOXES
heightInput.addEventListener("keypress", function(keyPressed) {
	if ((keyPressed.which===13) || (keyPressed.keyCode==13)) {
		runner();
	}
});
characterInput.addEventListener("keypress", function(keyPressed) {
	if ((keyPressed.which===13) || (keyPressed.keyCode==13)) {
		runner();
	}
});

//CALLS CLEAR FUNCTION WHEN CLEAR BUTTON IS CLICKED
clearButton.addEventListener("click", clear, false);
