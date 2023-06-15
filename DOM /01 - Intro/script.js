
console.log(document.title)

document.title = "Modifying the DOM"

let body = document.body;
for (let val of body.children) {
    console.log(val);
}

document.body.style.backgroundColor = "rgb(" + randomNum(0, 255) + ", " + randomNum(0, 255) + ", " + randomNum(0, 255) + ")"

function randomNum(min, max) {
	return parseInt(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}