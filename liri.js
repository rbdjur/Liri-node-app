console.log("Liri is ready to operate");
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

// create variables to hold the API keys of Twitter and Spotify
var spotify = new Spotify(keys.Spotify);
var client = new Twitter(keys.Twitter);

//Takes in all command line arguments
var inputString = process.argv[2];
// .slice is used to take the 3rd index of the node command line and isolate it to be called into other functions/methods
var value = process.argv.slice(3);

// Same as a series of if statements
switch (inputString) {
    case "my-tweets":
        apiTwitter();
        break;

    case "spotify-this-song":
        if (process.argv.length < 4) {
            value = "The Sign"
        }
        apiSpotify(value);
        break;
    
    case "movies-this":
    if (process.argv.length < 4) {
        value = "Mr Nobody"
    }
    getMovie();
    break;

    case "do-what-it-says":
    doIt();
    break;
};

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
        var song = data.tracks.items[0];
        console.log(song);
        console.log("Hey", data.tracks.items[0].artists);
        console.log("YO:",song.artists[0])
        console.log("Song name:", song.name);
        console.log("Spotify link:", song.album.href);
        console.log("Album title:", song.album.name)        
        debugger;
    });
}

function getMovie() {
    request("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            console.log("Title of Movie: " + JSON.parse(body).Title)
            console.log( "Year of Movie: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating:", JSON.parse(body).Ratings[1].Value)
            console.log("Produced in: " + JSON.parse(body).Country);
            console.log("Language of Movie: " + JSON.parse(body).Language);
            console.log("Plot of Movie: " + JSON.parse(body).Plot);
            console.log("Actors in Movie: " + JSON.parse(body).Actors);

            fs.appendFile("omdbLog.txt", 
            "\n Title of Movie: " + JSON.parse(body).Title + 
            "\n Year of Movie: " + JSON.parse(body).Year +
            "\n IMDB Rating: " + JSON.parse(body).imdbRating)
        } else {
            console.log("getMovie error:", error);
        }
    });
};

function doIt() {
    fs.readFile("random.txt","utf8", function (error, data) {
        console.log(data);
        var text = data.split(",");
        apiSpotify(text[1]);
    });
}; 