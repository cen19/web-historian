var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httphelpers = require('./http-helpers.js');






// Specifications for test#1
// Input: GET request from client at the path, "/"
// Output: Response body which includes the data from index.html
// Side effect: none  



exports.handleRequest = function (req, res) {
  //gather useful information about req
    //useful info in this case will be the request url, method, header
  var url = req.url;
  var method = req.method;
  var header = req.header;
     
  //to get method request which we're receiving, we need to write a res
  // res.writeHead(status code, string-message, headers)
  
  res.writeHead(200, httphelpers.headers);
  
    //res should include headers, properly formatted res body 
    // fs.readFile()
      //we should get the res body by reading the index.html file and getting the contents of it. Make sure we have access to index.html, and other modules   

  //end res
  // res.end(put the response data in here)
  res.end('hello');

  // res.end(archive.paths.list);
};


// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });