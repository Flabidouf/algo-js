const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ol>`);
movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ol>`);

// This way of writing the method is much cleaner and shorter.
// We say that for each element of the array "movie", we write in the document the element in lowercase and within a "li" tag.