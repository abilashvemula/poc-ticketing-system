let fs = require("fs");
let path = require("path");

function updateDb(docs) {
    fs.writeFile(path.resolve('public/data.txt'), docs, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Database Updation done........");
    });
}

module.exports = updateDb;
