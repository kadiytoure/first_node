const fs = require('fs');

fs.writeFile('toto.txt', 'Hello Toto!', function(err) {
    if (err) {
        console.error(err);
    }
    console.log('toto.txt has been created')

});
fs.readdir('.', function(err, files) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});