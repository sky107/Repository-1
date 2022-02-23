const fs = require('fs').promises;
const path = require('path');
async function readFile(filePath) {

  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  }
  catch (err) {
    console.log(err);
  }
}

// readFile('nano.js');

// deleteFile('nano.js');

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
  }
  catch (err) {
    console.log("ERROR in FILE DELTEING");
  }
}

// writeFile('nano.js');

async function writeFile(filePath) {
  try {
    await fs.writeFile('nano.js', 'hi', { flag: 'a' })
  }
  catch (err) {
    console.log(err);
  }
}

