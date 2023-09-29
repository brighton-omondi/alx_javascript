const fs = require('fs');
const request = require('request');

if (process.argv.length !== 4) {
  console.error('Usage: node fetchAndSavePage.js <URL> <outputFilePath>');
  process.exit(1);
}

const url = process.argv[2];
const outputPath = process.argv[3];

const writeToFile = (content) => {
  fs.writeFile(outputPath, content, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      process.exit(1);
    }
    console.log(`Page content saved to ${outputPath}`);
  });
};

request(url, (error, response, body) => {
  if (error) {
    console.error(`An error occurred: ${error}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`HTTP Error: ${response.statusCode}`);
    process.exit(1);
  }

  writeToFile(body);
});
