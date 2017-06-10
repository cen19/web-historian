var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'), // web pages index/loading
  archivedSites: path.join(__dirname, '../archives/sites'), // sites folder holding siteData 
  list: path.join(__dirname, '../archives/sites.txt') // txt file containing a simple list
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  // fs.read through a file 
  // possibly for the worker to determine what needs to be done
};

exports.isUrlInList = function(url, callback) {
  // should return a boolean confirming whether or not the string is within the file
};

exports.addUrlToList = function(url, callback) {
  // should only add to the list if it isn't in the list currently
  // return a confirmation to let it be known it was successfully added
};

exports.isUrlArchived = function(url, callback) {
  // should check a list to see if it was ever fully archived

  // store in a javascript object to have a better time complexity

};

exports.downloadUrls = function(urls) {
  // worker wakes up
  // worker goes into a list
  // worker iterates through the list to store the information of each website 

  // after worker is finished, it will add the url to a list of archived URLs

};
