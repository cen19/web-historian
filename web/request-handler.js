var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httphelpers = require('./http-helpers.js');
var fs = require('fs');




// Specifications for test#1
// Input: GET request from client at the path, "/"
// Output: Response body which includes the data from index.html
// Side effect: none  



exports.handleRequest = function (req, res) {
  //gather useful information about req
    //useful info in this case will be the request url, method, header
  // var url = req.url;
  var method = req.method;
  var header = req.header;

   
  //to get method request which we're receiving, we need to write a res
  // res.writeHead(status code, string-message, headers)
  if (method === 'GET' && req.url === '/') {
    console.log('***');
    var indexPath = archive.paths.siteAssets + '/index.html';
    
    fs.readFile(indexPath, 'utf8', function(err, data) {
      // console.log('in callback');
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
        res.end(data);
      }
    });
    // res.writeHead(200, httphelpers.headers);
    // res.end(httphelpers.serveAssets(res, asset, callback));
  } else if (method === 'GET') {
    console.log('*****');
    // check url address to see if it matches against something in the archivedSites
    
    // have correct url path in hard-drive
    var urlPathFile = archive.paths.archivedSites + req.url;
    var statusCode;
    // console.log(urlPathFile);
    
    // read the file
    fs.readFile(urlPathFile, 'utf8', function (err, data) {
      if (err) {
        statusCode = 404;
        res.writeHead(statusCode, httphelpers.headers);
        res.end();
      } else {
        res.end(data);
      }
    });    
  }

  if (method === 'POST') {
    var statusCode;
    console.log('POST METHOD HAPPENING'); 
    var sitesTxtPath = archive.paths.list;

    var data = '';
    req.on('data', function(chunk) {
      data += chunk;
    });
    req.on('end', function(err) {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile(sitesTxtPath, data.slice(4) + '\n', 'utf8', function(err) {
        // if there is an error, log it
          if (err) {
            console.log(err);
          } else {
            statusCode = 302;
            // if there is no error, write the head for 302
            res.writeHead(statusCode, httphelpers.headers);
            res.end();
          }
        });
      }
    });
  }

  // res.end(archive.paths.list);
};
