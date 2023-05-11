var education = prompt("What kind of completed education do you have:");
var salary = 0;

switch (education) {
  case "No high school diploma":
salary = 1000;
    break;
  case "high school diploma":
salary = 2000
    break;
  case "an Associate's degree":
salary = 3000
    break;
  case "a Bachelor's degree":
salary = 4000
    break;
  case "a Master's degree":
salary = 5000
    break;
  case "a Professional degree":
salary = 6000
    break;
  case "a Doctoral degree":
salary = 7000
    break;
}

if (salary > 0)
    console.log(`You earn on average ${salary}$.`);
else
    console.log("Please enter a valid educational degree.");