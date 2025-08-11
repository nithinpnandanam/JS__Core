# Cross Origin Resource Sharing
- CORS (Cross‑Origin Resource Sharing) is a browser‑based mechanism that lets servers whitelist which origins may access their resources. 
- It does so by using special HTTP response headers.
---
- Any attempt to fetch resources (XHR, fetch, iframes, scripts) from a different origin is blocked by default.
- Refer Image 1
- from ```one origin (domain)``` we cannot get data from ```another origin (domain)```
- we couldn't get data from other sub domain
- we couldn't get data from other ports
- we couldn't get data if the network protocols were different
---
- Refer Image 2
- lets say we need data from origin 2 which is a server
- origin 1 being the client
- A sends a ```preflight request``` to B
- This preflight is also called Options
- The server then responds back so the client knows they can do the actual post/get request
- The server responds to the preflight request with appropriate CORS headers.
- If the server permits , it includes headers like Access-Control-Allow-Origin Access-Control-Allow-Methods in the response.
- most commonly used headers are ```access-control-allow-origin```
- its value will be ```*``` allowing no resrtriction .
- so that anybody can make requests
```
Access-Control-Allow-Origin: https://app.example.com
/* or */
Access-Control-Allow-Origin: *
```

```
- Lists the HTTP methods permitted for cross‑origin calls.
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
```
- Simple requests use a single round trip (no preflight).
- Non‑simple requests trigger a preflight OPTIONS to check allowed methods/headers.
- Browser sends an OPTIONS request:
```
OPTIONS /data HTTP/1.1
Host: api.example.com
Origin: https://app.example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization

```
- Server must respond with:
```
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 600

```
- Browser, seeing a successful preflight, then issues the real PUT request:
---


