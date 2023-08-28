const fs = require("fs/promises");

const readfile = filename => fs.readFile(filename, 'utf-8').then(JSON.parse);
const writefile = (filename, data) => fs.writeFile(filename, JSON.stringify(data), 'utf-8');

exports.readCategory = () => readfile("src/dbs/category.json");
exports.writeCategory = (data) => writefile("src/dbs/category.json", data);
exports.readTransaction = () => readfile("src/dbs/transaction.json");
exports.writeTransaction = (data) => writefile("src/dbs/transaction.json", data);