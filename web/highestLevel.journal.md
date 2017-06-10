### Step 1: Specification
Input: url
output: stores data if url is not in archive otherwise returns corresponding data(web page) to the url that was submitted
side effects: the page might not have data yet at the time of submit

### Step 2: Justification
I want to store webpages for future reference

### Step 3: Explanation
The url is a string which gets compared against a file that holds all the urls. 
  - If the URL is not in that txt file, we need to add it to a file which has a URL queue system to retrieve at a later time. A worker will retrieve that file later.
  -If the URL is present, the server will then look in the archive for a match based on the URL and return that data to the client.

### Step 4: Visualization
Drawing...

### Step 5: Approximation

Server checks the url against a site.txt file in the archives folder

If the url string is present
  -The server will go into the archives/sites folder and find the file corresponding to the HTML file
    -That same file will then be stringified by the server
      -The server will send that string back to the client

If the string is not in the site.txt file
  -The server will notify the client that we have no data on that url and tell the user to check back at a later time
    -The server will then send that url to the queue stack
    -Every once in a while, a worker-helper will 'wake up' and check the queue

    -If there is nothing in the queue, the worker will go back to sleep

    -If there is something in the queue, the worker will take that url and journey to the internet and grab the data associated with that website and put it into archives/sites folder as pure html(?)


### Step 6: Verification
<!-- record verification here, or, if you use a whiteboard, upload a photo of your whiteboard to this folder -->

### Step 7: Implementation
<!-- record your implementation in the .js file -->