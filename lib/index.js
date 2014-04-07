// Main.js

"use strict";
var request = require('request'); // Request URLs
var cheerio = require('cheerio'); // SS jQuery lib
var sys = require('sys'); // Terminal Access to Print
var say = require('say'); // Terminal speeach

module.exports = function (url, textBodySelector, speaker, callback) {

  console.log(process.argv[2])

  request(url, function (error, response, body) {

        // If error send error to callback
        if (error) return callback(error);

        // Also handle/forward error if server returns error
        if (response.error) return callback(new Error(response.text));

        // If we get to here then everything is OK

        // Load into DOM parser
        var $ = cheerio.load(body);

        //Grab text from DOM node
        var text = $(textBodySelector).text();

        // Print out lyics to terminal
        sys.puts(text);

        // If there is no speaker
        if(!speaker) {

          // Set Default to Fred
          say.speak('Fred', text);
        } else {

          // Allow user to set speaker
          // say.speak(speaker, text);
        }

  });
  if (!!callback) callback();
};
