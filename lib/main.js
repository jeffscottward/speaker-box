// Main.js

"use strict";
var request = require('request'); // Request URLs
var cheerio = require('cheerio'); // SS jQuery lib
var sys = require('sys'); // Terminal Access to Print
var say = require('say'); // Terminal speeach

module.exports = function (url, textBodySelector, speaker) {

  // Request "Fitter Happier" Lyrics Page
  request(url, function (error, response, body) {

    // If not error and is ok
    if (!error && response.statusCode == 200) {

      // Load into DOM parser
      var $ = cheerio.load(body);

      //Grab text from DOM node
      var lyrics = $(textBodySelector).text();

      // Print out lyics to terminal
      sys.puts(lyrics);

      // If there is no speaker
      if(!speaker) {

        // Set Default to Fred
        say.speak('Fred', lyrics);
      } else {

        // Allow user to set speaker
        say.speak(speaker, lyrics);
      }

    } else {
      // Error out
      console.log(error);
    }
  });

};
