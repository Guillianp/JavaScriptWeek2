//HARD: Given the information below for Tom and Jerry. 

// Tom - height:  9in   mass: 8 g
// Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

//     BMI = mass / height ^2 = mass / (height * height)

// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

var tomHeight = 9
var tomMass = 8

var jerryHeight = 10
var jerryMass = 45

var tomBMI = (tomMass / (tomHeight * tomHeight))
var jerryBMI = (jerryMass / (jerryHeight * jerryHeight))

console.log(tomBMI);
console.log(jerryBMI);

var compareBMI = tomBMI < jerryBMI 

if(tomBMI < jerryBMI, true){
    console.log('Jerry\'s BMI is higher than Tom\'s');
  }
  else {
    console.log('Tom\'s BMI is higher than Jerry\'s');
  }


