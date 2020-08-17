/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mockData = require('./mockData');

const { courses, authors } = mockData;
const data = JSON.stringify({ courses, authors });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Mock DB created.');
  }
});
