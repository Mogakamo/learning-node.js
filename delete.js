var fs = require('fs')

fs.unlink('new_file.txt', function(err) {
    if (err) throw err;
    console.log('Deleted!')
})