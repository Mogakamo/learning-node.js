var fs = require('fs')

fs.appendFile('new_file.txt', 'Hello Content!', function(err) {
    if (err)
        throw err;
    console.log('Saved!');
})