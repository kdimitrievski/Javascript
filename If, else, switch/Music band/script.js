var band = prompt("How many musicians are there in your music band?");

if (band == 4) {
  console.log("Your band is a quartet.");
} else if (band == 3) {
  console.log("Your band is a trio.");
} else if (band == 2) {
  console.log("Your band is a duo.");
} else if (band == 1) {
  console.log("You are a solo musician.");
} else {
    console.log("Enter a valid number of musicians.")
}
