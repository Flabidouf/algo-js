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

document.write(`<ol>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ol>`);

// 1. An ordered list is added to the document.
// 2. A for loop is settled. While i is less than the length of "movies" array, add 1 to i.
// 3. Write each movies in a list and add to it the number of the movie.