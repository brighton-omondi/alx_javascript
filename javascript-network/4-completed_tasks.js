const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node countCompletedTasks.js <API_URL>');
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
    const tasks = JSON.parse(body);
    const completedTasksByUser = {};

    // Count completed tasks by user
    tasks.forEach((task) => {
      if (task.completed) {
        if (completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId]++;
        } else {
          completedTasksByUser[task.userId] = 1;
        }
      }
    });

    // Print users with completed tasks
    for (const userId in completedTasksByUser) {
      console.log(`User ID ${userId}: ${completedTasksByUser[userId]} completed tasks`);
    }
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
    process.exit(1);
  }
});
