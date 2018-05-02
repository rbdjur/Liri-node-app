console.log("Hello");
// put require method into a variable to be easily called. 
require("dotenv").config();

// require keys.js and store it into keysFile
var keys = require("./keys.js");
// require twitter and store into variable twitter
var Twitter = require('twitter');
// require request and store in variable request
var request = require("request");
// require spotify and store in variable Sptoify 
var Spotify = require('node-spotify-api');
// require fs
var fs = require("fs");
// // movieKey
// var movieKey = parseInt(f496ae5a);

// create variables to hold the API keys of Twitter and Spotify
var spotify = new Spotify(keys.Spotify);
var client = new Twitter(keys.Twitter);

//Takes in all command line arguments
var inputString = process.argv[2];
var value = process.argv.slice(3);

switch (inputString) {
    case "my-tweets":
        apiTwitter();
        break;

    case "spotify-this-song":
        if (process.argv.length < 4) {
            value = "Mine"
        }
        apiSpotify(value);
        break;
    
    case "movies-this":
    if (process.argv.length < 4) {
        value = "Training Day"
    }
    getMovie();
    break;
}

// function calling apiTwitter
function apiTwitter() {
    var params = { screen_name: 'artcronaldo', count: 21 };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log("@artcronaldo:" + tweets[i].text);
                fs.appendFile("log.txt", "@artcronaldo:" + tweets[i].text);
            }
        }
    });
}

// function calling Spotify + running the variable value through the function
function apiSpotify(value) {
    spotify.search({ type: 'track', query: value }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
        console.log("Future - Incredible", data.tracks.items[0]);
        // console log so the data can be pretty and easily  read (artist, sont title, year, duration);


        // console.log(JSON.stringify(data.tracks.items[0]))
        // var song = data.tracks.items[0];
        
    });
}

function getMovie() {
    request("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        } else {
            console.log("getMovie error: ", error);
        }
    });
}




























// dotEnv.readFile("random.txt", "utf-8", function (error, data){
//     var dataArr = data;
//         console.log("Hey");
//         console.log(dataArr);
// });





























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

