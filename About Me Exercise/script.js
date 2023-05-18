document.body.style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").innerHTML = "Kristijan Dimitrievski";

document.getElementById("favorites").innerHTML = "23";
document.getElementById("hometown").innerHTML = "Skopje";
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  items[i].className = "listitem";
}
