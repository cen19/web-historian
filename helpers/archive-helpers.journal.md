### Step 1: Specification
Inputs: requests from the client
Outputs: proper response to the clients
side effects: data can be modified based on request

### Step 2: Justification
I need to serve data accordingly

### Step 3: Explanation
Relationship between input and outputs: 
  When we receive a request from the client, we first parse the request into a command the server can understand. If it is asking for information. We must compile the data necessary and properly format it before sending it back to the server.

If the request requires us to modify data, we will do the changes requested and send back some information such as the changes that occurred back to the user to confirm success.

### Step 4: Visualization
<!-- record visualization by uploading a photo of your whiteboard to this folder -->

### Step 5: Approximation
User submits a url
Server checks the url against a site.txt file in the archives folder
If the url string is present
  The server will go into the archives/sites folder and find the file corresponding to the HTML file
    That same file will then be stringified by the server
      The server will send that string back to the client

### Step 6: Verification
Verified mentally.

### Step 7: Implementation
<!-- record your implementation in the .js file -->