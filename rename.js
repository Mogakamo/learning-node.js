var fs = require('fs')

fs.rename('new_file', 'serve.js', function(err) {
    if (err)
        throw err;
    console.log('Renamed!')
})