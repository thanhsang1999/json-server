let fs = require("fs");
///////////////////////////////////////////////////////////////
const generateEmployees = require("./genarate-data/employees");
const generateProducts = require("./genarate-data/products");

//////////////////////////////////////////////////////////////

let employees = generateEmployees(100);
let products = generateProducts(100);
fs.writeFileSync(
  "db.json",
  JSON.stringify({ employees, products }, null, "\t")
);

// fs.writeFileSync("db.json", JSON.stringify(dataProducts, null, "\t"));
