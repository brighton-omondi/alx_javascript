const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node countMoviesWithWedgeAntilles.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

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
    const films = JSON.parse(body).results;
    const wedgeAntillesMovies = films.filter((film) =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );

    console.log(`Number of movies with Wedge Antilles: ${wedgeAntillesMovies.length}`);
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
    process.exit(1);
  }
});
