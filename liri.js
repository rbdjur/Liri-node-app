// pull information from "dotenv"
require("dotenv").config();
// store access key info into a variable
var spotify = new spotify(keys.spotify);
var client = new Twitter(keys.twitter);
