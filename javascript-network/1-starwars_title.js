const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node getStarWarsMovie.js <movieID>');
  process.exit(1);
}

const movieID = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`An error occurred: ${error}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`HTTP Error: ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const movie = JSON.parse(body);
    console.log(`Title: ${movie.title}`);
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
    process.exit(1);
  }
});
