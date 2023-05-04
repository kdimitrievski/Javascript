// 5. The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 30;
console.log(`${celsius}°C is ${(celsius * 9) / 5 + 32}°F`);

var fahr = 90;
console.log(`${fahr}°F is ${((fahr - 32) * 5) / 9}°C`);
