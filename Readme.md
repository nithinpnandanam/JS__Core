- web follows http or https protocol
- it is a stateless protocol
- sateless means when the client sends a request to the server once and again if it sends the request the server does not know that earlier a request was send by te same client
- problems with http protocol
- using user name and password we are logging in to see product listing page of amazon
- when we try to view the product description page we again might need to log in since http protocol is a stateless protocol
- so we use cookies and sessions

- At first without any cookies the client sends a request to the server
- the server then askes the client to log in usingname and password
- Refer Inage 1

- Now the client logs in using username and password
- a session is craeted by the server
- its a file that has information about the user
- a session id is craeted for each session and it is send back to the client
- the client creates a cookie with the help of the session id
- refer Image 2

- So again when client sends a request to the server it send teh cookies along with it
- the server obtains the session id from the cookie
- Refer Image 3

- the session in server is cleared
- Refer Image 4
- in banking applications we can see sessions are cleared after certain period of time
- in such cases client brings in cookies to the server but it will be of no use since the session itself is cleared by the server


- in the browser we can clear the ccokies by clearing the cache 
- so when a request is send to the server without the cookies the server will not be able to identify the client
- so will ask the client to log in again so that a new session can be created by the server

- Refer Image 
- website A for Bank
- Bank has a server
- website B for Retirement
- Retirement has another server
- when the user switches from the Bank server to the retirement server we dont want the user to log in again
- if seesions are used thwn we will need to relogin because in bank server only we have the session
- if we use JWT then all we need to share is the secret key across both the servers
- in microservices also using JWT is better