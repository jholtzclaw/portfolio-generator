// allows use of fs
const fs = require('fs')
// function to generate markdown for README
module.exports = fileContent => {
  return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/README1.md', fileContent, err => {
      if (err) {
        reject(err)
        return;
      }
      resolve({
        ok: true,
        message: 'Readme created'
      })
    })
  })
}