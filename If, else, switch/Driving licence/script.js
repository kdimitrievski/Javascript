var age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You need to wait ${18 - age} years to be allowed to drive`);
}