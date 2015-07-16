//Write code that asks the user for a temperature in Celsius
// and converts it to Fahrenheit.
//Bonus: ask the user first if they want to convert from F to C or C to F.

var degrees = prompt("Would you like to convert to fahrenheit or celcius?");
if (degrees === "fahrenheit") {
  fahrenheit_entry = prompt("Enter degree fahrenheit to convert");
  fahrenheitanswer = (fahrenheit_entry - 32)/1.8;
  console.log(fahrenheitanswer + " degrees celcius");
}
else if (degrees === "celcius") {
  celcius_entry = prompt("Enter degree celcius to convert");
  celciusanswer = (celcius_entry / 1.8) + 32;
  console.log(celciusanswer + " degrees farenheit");
}
else {
  console.log(alert("Please try again!"));
}
