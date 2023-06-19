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

const lowerCaseMovies = movies.map(movie => movie.toLowerCase());
// The .map method will create a new array called "lowerCaseMovies" and apply
// on the existing array "movies" a functino that will lower case every element of the array.

document.write(`<ol>`);
lowerCaseMovies.forEach(movie => document.write(wrapWithTag(movie, `li`)));
document.write(`</ol>`);