const request = require('request');
const fs = require('fs');
let userInput = (process.argv.slice(2));
let url = userInput[0];
let path = userInput[1];

request(url, (error, response, body) => {
  if ((response && response.statusCode) !== 200) {
    console.log('Woops! You probably made a typo in the URL')
    console.log('error:', error); // Print the error if one occurred
  }
  else {
    
    fs.writeFile(path, body, (err) => {
      // fix this sync part TOMORROW
      let stats = fs.statSync(path);
      let size = stats['size'];
      console.log(`Downloaded and saved ${size} bytes to ${path}`)
      if (err) {
        throw err;
      }
    })
  }
});

