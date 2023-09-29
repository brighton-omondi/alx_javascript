const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node getCharactersInMovie.js <movieID>');
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
    const characters = movie.characters;

    if (characters.length === 0) {
      console.log('No characters found in this movie.');
    } else {
      console.log('Characters in the movie:');
      characters.forEach((characterUrl) => {
        request(characterUrl, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const character = JSON.parse(charBody);
            console.log(character.name);
          } else {
            console.error(`Error fetching character data: ${charError}`);
          }
        });
      });
    }
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
    process.exit(1);
  }
});
