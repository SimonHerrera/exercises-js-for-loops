//Starting at 5, count up by 10 as long as i < 120
for ( i = 5; i < 120; i += 10) {
	console.log("The current value is ", i );
}


// divide 4096/2 as long as i is greater than 1
for (i = 4096; i > 1; i = i / 2) {
	console.log("The current value is ", i );
}

// Presidents Array and Number Array

var presidents = ["George Washington", "John Adams", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson"];
// cycle through presidents as long as i is less than length (6)
for (i = 1; i < presidents.length + 1; i += 1) {
	console.log("President # " + i + " was " + presidents[i - 1] );
}


//Output Name of Keys
var antSpecies = {
  "argentine": 4,
  "army": {},
  "big headed": {},
  "black": {},
  "bull": {},
  "carpenter": {},
  "crazy": {},
  "fire": {},
  "glider": {},
  "honey pot": {},
  "jack jumper": {}
}

for (var key in antSpecies) {
	console.log(key);
}

//This outputs all keys
console.log(Object.keys(antSpecies));
//Shows entire Object with keys and content
console.log(antSpecies);
//Shows specific Key value in object
console.log(antSpecies.argentine);