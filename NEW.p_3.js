
var random = [ 0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function onclickrandom() {
 	
  str = "#"
for (var i = 0; i < 6; i++) {
	 str += random[randomnuber()];


}
 document.getElementById("color").textContent = str;
document.body.style.backgroundColor = str;
}
function randomnuber() {
	return Math.floor(Math.random() * random.length)
}

console.log('hello')

btn = document.getElementById('color');
btn.addEventListener("click",onclickrandom)

