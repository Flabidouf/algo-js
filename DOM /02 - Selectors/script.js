
// Identifies every element in the document that has the .important class.
const importantElements = document.querySelectorAll(".important")

// Creates a loop that adds the attribute "title" stating "this is an important item" 
// for all the elements with "importantElements".
// element is all element in an array. The array here is importantElements.
for (let element of importantElements) {
    element.setAttribute("title", "This is an important item")
}

// querySelectorAll returns all elements that match the chosen selector. Here 'img'.
const images = document.querySelectorAll('img')
// Loop that will check any element if they have the class "important".
// If not, we apply display:none to it.
for (let element of images ) {
    if(element.className !== "important") {
        element.style.display ="none";
    }
}

const para = document.querySelectorAll('p')

for (let element of para) {
    console.log(element.textContent)
    // getAttributeNode() is used to return an attribute of a specified element, here "class".
    // .value gives us the value of the element in the parentheses.
    if (element.getAttributeNode("class")) console.log("Class value of element = " + element.getAttributeNode("class").value)
    else{
        console.log(element.innerText);
        element.style.color = randomColor();
    }
}

function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
}
// .padStart gives a min size and tells which character I want to add to fill the gap.