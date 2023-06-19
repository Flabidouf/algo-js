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
const wrappedMovies = lowerCaseMovies.map(movie => wrapWithTag(movie, `li`));

document.write(wrapWithTag(wrappedMovies.join(``), `ol`));

// Here the .join method is used on the wrappedMovies array to concatenate all its elements into a single string. 
// The template literals are used within the .join() method to specify an empty string as the separator between the array elements.
// In summary, the use of .join('') in this example allows the creation of a continuous string representation of the HTML list items,
// ensuring they are correctly displayed as a single ordered list when wrapped with the <ol> tag.