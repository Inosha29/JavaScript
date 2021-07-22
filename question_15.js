const number = [4,1,8,3,9,12];
document.getElementById("q15.1").innerHTML = number;
function shortNumber() {
  const number = [4,1,8,3,9,12];
  number.sort(function(a, b){return a - b});
  document.getElementById("q15.2").innerHTML = number;
}
