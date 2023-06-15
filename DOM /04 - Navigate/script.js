
const ol = document.querySelector("ol")
    // Affecting names to children of ol.
const first = ol.children[0]
const last = ol.children[4]

    // Calling the method before to insert node named last before node named first.
first.before(last)


const main = document.querySelector("main")

    // Select section2 h2
const section2 = main.children[1]
const h2_1 = section2.children[0]
    // Select section3 H2
const div = document.querySelector("div")
const h2_2 = div.querySelector("h2")

    // Removes section 2 h2 and replaces it with section3 h2
section2.removeChild(h2_1)
section2.prepend(h2_2)

    // Puts section2 h2 in section3 div, as our last action moved it to section2.
div.prepend(h2_1)


const lastSection = document.querySelector("section:last-child")

main.removeChild(lastSection)

