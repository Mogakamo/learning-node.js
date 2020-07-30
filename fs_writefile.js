var fs = require('fs')

fs.writeFile('new_file2.txt', 'Welcome to Node.js.', function(err) {
    if (err)
        throw err;
    console.log('saved!')
})