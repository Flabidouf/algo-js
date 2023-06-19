
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

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};
// The method wrapWithTag will define a content with 2 parameters. The content and the tagname.
// Then it will return the content within a tag associated with the tagname parameter.
// In other words, it will create a tag named after the tagname parameter and create the content after the content parameter.
// PS: The parameters are placed in brackets because its engulfed in a template litteral. The bracket with the $ sign is used to refer to a variable.

const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};
// parseTitle says that on each title: 
// 1 - a const "lowerTitle" that lowers the cases will be applied.
// 2 - the method "wrapped" will apply the method "wrapWithTag". 
// The parameters associated with it are "lowerTitle" for the content. Which refers to the title in lowercase.
// 3 - "wrapped" will be written in the document.
// The second parameter, tagname, will be "li". So each element on which the "parseTitle" method is applied will be lowercase and will be put in an "li".

document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);

// The forEach method will execute the function (parseTitle(movie)) once for each array element of the "movie" array.
