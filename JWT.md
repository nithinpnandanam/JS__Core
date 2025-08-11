# Authentication and Autherisation
* ```Authentication``` is the process of verifying the identity of a user or entity. It answers the question: "Who are you?"
    * Logging in with a username and password.
* ```Authorization``` is the process of determining what resources a user or entity has permission to access. It answers the question: "What are you allowed to do?"
    * A user can view their own profile but not edit another user's profile.
    * An admin can create and delete users, while a regular user cannot.
    * A guest user has read only access to public resources.
---
* JWT is used for Autherization
* Json Web Token
* makes sure that its the logged in user who is trying to access the webpages
---
* Refer Image 5 to get how the conventional flow works using cookies and sessions
---
* server creates a JWT
* it has info about the user encoded in it.
* User id might be stored in the token
* no information regarding the user is stored in the server 
* in the server JWT is deserialised to get info about the user
* if the user is autherised to view the resource then that resources are send to the client
* refer Image  6 
---
* JWT has 3 parts
* Refer Image 7
 * **Header**
    * detials about the algoritm used for encryption and decryption
 * **Payload**
    * information present in the token
    * when jwt will expire such details will be there,when token was created
 * **Signature**
    * using this we know whether client has made any modification to the JWT
    * base64 encoding of header + base64 encoding of payload + secret key
    * encoding the above using the algorithm mentioned in the header
    * if thats equal to the blue portion in JWT then the server knows the client has not tampered with the JWT
    * this key is stored in the server
---
