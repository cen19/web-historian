var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var http = require('http');
var httphelpers = require('./http-helpers');




exports.handleRequest = function (req, res) {
  var responseHeaders = defaultCorsHeaders;
  var headers = request.headers;
  var method = request.method;
  var url = request.url;

  // RequestMethods
  // on post

  if (method === 'GET') {
    responseHeaders['Content-Type'] = 'application/json';
    response.writeHead(200, responseHeaders);
    
    response.end('GET request came through');  
  }

  if (method === 'POST') {
    
  } 

  req.on('error', function (err) {
    console.log(`error: , ${err}`);
  });

  res.end(archive.paths.list);
};
