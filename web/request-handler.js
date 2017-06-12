var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httphelpers = require('./http-helpers.js');
// var fs = require('fs');
var url = require('url');


var actions = {
  'GET': function (req, res) {
    var urlPath = url.parse(request.url).pathname;


    // if '/', it means that it is the index.html
    if (urlPath === '/') {
      urlPath = '/index.html';
    }
    httphelpers.serveAssets(res, urlPath, function() {

      if (urlPath[0] === '/') {
        urlPath = urlPath.slice(1);
      }

      archive.isUrlInList(urlPath, function(found) {
        if (found) {
          httphelpers.sendRedirect(res, '/loading.html');
        } else {
          httphelpers.send404(res);
        }
      });
    });
  },
  'POST': function(req, res) {
    httphelpers.collectData(req, function(data) {
      var url = data.split('=')[1].replace('http://', '');
      // check inside the sites.txt foe the website string

      archive.isUrlInList(url, function(found) {
        if (found) {
          // check if site is on the disk
          archive.isUrlArchived(url, function(exists) {
            if (exists) {
              httphelpers.sendRedirect(res, '/' + url);
            } else {
              // if it doesn't exist in the archive, send them to the loading html page
              httphelpers.sendRedirect(res, '/loading.html');
            }
          });
        } else {
          // not found in this case, need to add it to the list
          archive.addUrlToList(url, function() {
            httphelpers.sendRedirect(res, '/loading.html');
          });
        }
      });
    });
  }
};


exports.handleRequest = function (req, res) {
  //gather useful information about req
    //useful info in this case will be the request url, method, header
  // var url = req.url;
  // var method = req.method;
  // var header = req.header;

   
  // //to get method request which we're receiving, we need to write a res
  // // res.writeHead(status code, string-message, headers)
  // if (method === 'GET' && req.url === '/') {
  //   console.log('***');
  //   var indexPath = archive.paths.siteAssets + '/index.html';
    
  //   fs.readFile(indexPath, 'utf8', function(err, data) {
  //     // console.log('in callback');
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       // console.log(data);
  //       res.end(data);
  //     }
  //   });
  //   // res.writeHead(200, httphelpers.headers);
  //   // res.end(httphelpers.serveAssets(res, asset, callback));
  // } else if (method === 'GET') {
  //   console.log('*****');
  //   // check url address to see if it matches against something in the archivedSites
    
  //   // have correct url path in hard-drive
  //   var urlPathFile = archive.paths.archivedSites + req.url;
  //   var statusCode;
  //   // console.log(urlPathFile);
    
  //   // read the file
  //   fs.readFile(urlPathFile, 'utf8', function (err, data) {
  //     if (err) {
  //       statusCode = 404;
  //       res.writeHead(statusCode, httphelpers.headers);
  //       res.end();
  //     } else {
  //       res.end(data);
  //     }
  //   });    
  // }

  // if (method === 'POST') {
  //   var statusCode;
  //   console.log('POST METHOD HAPPENING'); 
  //   var sitesTxtPath = archive.paths.list;

  //   var data = '';
  //   req.on('data', function(chunk) {
  //     data += chunk;
  //   });
  //   req.on('end', function(err) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       fs.writeFile(sitesTxtPath, data.slice(4) + '\n', 'utf8', function(err) {
  //       // if there is an error, log it
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           statusCode = 302;
  //           // if there is no error, write the head for 302
  //           res.writeHead(statusCode, httphelpers.headers);
  //           res.end();
  //         }
  //       });
  //     }
  //   });
  // }

  var handler = actions[req.method];
  if (handler) {
    handler(req, res);
  } else {
    httphelpers.send404(res);
  }
};
