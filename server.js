const path = require("path");
const dotenv = require("dotenv");

require("dotenv").config({
  path: path.resolve(
    __dirname,
    process.env.MODO == "prod" ? ".env.prod" : ".env.testing"
  ),
});
const { HOST, PORT } = require("./config");
console.log(HOST, PORT);

/* console.log(process.env.NOMBRE);
console.log(process.env.PORT);
console.log(process.env.SECRET_TWITTER);
console.log(process.env.DATABASE_CONNECTION_STRING); */

/* const yargs = require("yargs/yargs")(process.argv.slice(2));
const args = yargs.alias({
  n: "nombre",
  a: "apellido",
}).argv;

console.log(args);
console.log(process.argv.slice(2)); */

/* const parseArgs = require("minimist");

const args = parseArgs(process.argv.slice(2));

console.log(args);
console.log(process.argv.slice(2)); */
