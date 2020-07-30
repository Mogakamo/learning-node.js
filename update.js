//Using the fs.append() method to update a file
var fs = require('fs')

fs.appendFile('new_file', 'This is my text.', function(err) {
    if (err)
        throw err;
    console.log('Updated!')
})

//Using the fs.writeFile() method to update
var fs = require('fs')

fs.writeFile('new_file.txt', 'This is my text.', function(err) {
    if (err)
        throw err;
    console.log('Updated!')
})