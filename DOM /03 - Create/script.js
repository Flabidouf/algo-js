
// We create const sect, associated with <section>. 
// We create const article, associated with <article>.

const sect = document.createElement('section');
const article = document.getElementsByTagName('article')[0];
let names = ["Julien","Adeline","Bathsheba","Camille","Cedric","Clara","Corentin","Ilias","Jason","Jérôme","Lucie","Manon","Marius","Nathan","Nicolas","Ozlem","Pauline","Pietro","Robin","Rui","Sam","Sarah","Steeve","Tim","Youssef"];

// We create an empty array called newNames which will store the randomized lists of names.
let newNames = []

// We create a method called "aleatoire"
// which will randomize each element of names and push it to the array newNames.

for (element of names){
    let aleatoire = Math.ceil(Math.random()*names.length)
    newNames.push(names[aleatoire]);
}

    // We define each element of the array newNames as "apprenant"

for (apprenant of newNames){
    const paragraphe = document.createElement('p');

        // We create a const "textparagraphe" and add a text node to it. 
        // This text node is one of the element we defined as "apprenant" contained in the array newNames.

    const textparagraphe = document.createTextNode(apprenant); 

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

        // We append the const "textparagraphe" to "paragraphe". 
        // In common terms, we added text to <p>.

    paragraphe.appendChild(textparagraphe);

    // From the Maths we created earlier, we create in
    // the background of elements named "paragraph" a method called "rgb".

    paragraphe.style.background = 'rgb(' + r + ',' + g + ',' + b + ')'

    // A loop to change the color of text by checking the variable "lum"
    let lum = ((r*299)+(g*587)+(b*114))/1000;
    if (lum < 125){
        paragraphe.style.color = 'white';
    }
    else{
        paragraphe.style.color = 'black';
    }

    // We append paragraphe to const sect which is associated with <section>.
    // We finally append const sect to const article, which is associated with <article>
    
    sect.appendChild(paragraphe);
    article.appendChild(sect);
}




