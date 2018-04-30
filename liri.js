// put require method into a variable to be easily called. 
var dotEnv = require("dotenv").config();
console.log(dotEnv);
console.log("Hello");
//Takes in all command line arguments
var inputString = process.argv;
// console.log("This is the dotEnv variable", dotEnv);

var keys = require("./keys.js");
console.log("This is keys info", keys);

// create variables to hold the API keys of Twitter and Spotify
var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

























// dotEnv.readFile("random.txt", "utf-8", function (error, data){
//     var dataArr = data;
//         console.log("Hey");
//         console.log(dataArr);
// });

// // create variables to hold the API keys of Twitter and Spotify
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// console.log(spotify);
// console.log(client);




























// // require the 
// var keys = require("keys.js");


// // create a cariable that calls the node package fs
// var fs = require("fs");
// //read file random.txt
// fs.readFile("random.txt", "utf-8", function (error, data) {
//     var dataArr = data;
//     console.log("Hey");
//     console.log(dataArr);
// });

// // require("keys.js");
// fs.readFile("keys.js", "utf-8", function (error, data) {
//     var keys = data;
//     console.log(data);
//     var spot = new spotify(keys.spotify);
//     var client = new twitter(keys.twitter);
//     console.log(spot);
//     console.log(client);
// });

/*

********************************************
*   Reference error with keyword "new" in * *   the code.                              *
********************************************


*/




//read file dotenv
// fs.readFile("liri.env", "utf-8", function (error, data) {
//     var api = data;
//     console.log(api);
//     // store access key info into a variable
//     var spotify = new spotify(api.spotify);
//     console.log(api.spotify);
//     var client = new twitter(api.twitter);
//     console.log(api.twitter);
// });








/*
// create variable that takes in arguments in command line
var inputString = process.argv;
// call the keys.js file
var keysFile = require(keys.js)

*/

