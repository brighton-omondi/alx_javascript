const axios = require('axios');

if (process.argv.length !== 3) {
  console.error('Usage: node getStatus.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

axios
  .get(url)
  .then((response) => {
    console.log(`code: ${response.status}`);
  })
  .catch((error) => {
    console.error(`An error occurred: ${error.message}`);
    process.exit(1);
  });
