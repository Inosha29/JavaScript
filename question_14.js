const fruits = ["Apple","Banana"];
fruits.splice(1,0,"Mango","Lemon","Orange","Grapes","Woodapple");
document.getElementById("q14.1").innerHTML = fruits[3];
document.getElementById("q14.2").innerHTML = fruits.length;
document.getElementById("q14.3").innerHTML = fruits;
function shortFruits() {

  fruits.sort();

  fruits.reverse();
  document.getElementById("q14.3").innerHTML = fruits;
}
