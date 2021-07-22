const points = [40, 100, 1, 5, 25, 10];
document.getElementById("q13.1").innerHTML = points;
document.getElementById("q13.2").innerHTML = pointsMax(points);
document.getElementById("q13.3").innerHTML = pointsMin(points);

function pointsMax(arr) {
  return Math.max.apply(null, arr);
}
function pointsMin(arr) {
  return Math.min.apply(null, arr);
}
