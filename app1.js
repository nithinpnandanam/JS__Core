// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// local storage and session storage are used to store some data into the browser
// user specific data is stored in the browser
// some data may not be relevant for sending to the server then local storage is used 
// getting data from the browser storage is fast compared to that from the server
// same origin policy is followed by these storage apis
// same origin means 3 factors need to be considered
// 1)Protocal
// 2)Host or domain
// 3)Port
// suppose we set up local storage for "httpt::/nithinprakash.in" where all can we access the data ?
// can we access the local storage data in  in "http::/nithinprakash.in.php" ?
// yes.Only an extra path is added
// can we access the local storage data in  in "https::/nithinprakash.in" ?
// No,the protocal has changed so the origin is different
// can we access the local storage data in  in "http::/blog.nithinprakash.in" ?
// No,the domain has changed so the origin is different
// can we access the local storage data in  in "http::/blog.nithinprakash.in:8080" ?
// No,the port has changed so the origin is different
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Session Storage
// data is stored only for a particular session
// When we open a browser tab a session starts and when the browser tab is closed the session ends and data is lost
// session storage data is not send to the server
// has more storage than cookies
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Local Storage
// similar to session storage but has more capacity than session storage
// its data is not closed when the browser tab is closed or when the desktop is switched off
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// local storage is a web api
// so using a window object we can accees it
// window.localStorage=localStorage

localStorage.setItem("key1","value1")
localStorage.setItem("key2","value2")

// Overriding value

localStorage.setItem("key3","value3")
localStorage.setItem("key3","New value3")

// getting a value
let x = localStorage.getItem("key1")
console.log(x)

// removing a single key value pair
localStorage.setItem("removekey","removevalue")
localStorage.removeItem("removekey")

// clearing the entire local storage ==> localStorage.clear()

// localStorage always stores string
// if we want to store an object

const user1 = {'name':'Joey'}
const user2 = {'name':'Chandler'}

// below problem arrises when we try to store an object
localStorage.setItem('user1',user1)

// solution
localStorage.setItem('user2',JSON.stringify(user1))
let y = JSON.parse(localStorage.getItem('user2'))
console.log(y)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





