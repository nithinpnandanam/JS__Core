// Event Bubbling and Capturing are two ways in which events propagate in the dom tree
// Event capturing is also known as Event Trickling
// bubbling up
// trickling down
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Refer Image 1
// When we click on child the order of exectution is
// onClickChid >  onClickParent > onClickGrandParent [in case of bubbling]
// When we click on GrandParent the order of exectution is
// onClickGrandParent  >  onClickParent > onClickChid [in case of capturing]
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// adddEventListener("click",()=>{

// },useCapture)
// useCapture = false >>>>> Event bubbling
// useCapture = true  >>>>> Event Capturing
// this useCapture flag tells the browser to follow event bubbling or capturing
// if useCapture is not provided then the default value taken will be false
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.querySelector("#grand-parent").addEventListener("click", () => {
//   console.log("Grand Parent Clicked");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent Clicked");
//   });

//   document.querySelector("#child").addEventListener("click", () => {
//     console.log("Child Clicked");
//   });

// Here since no value for useCapture is provided the default value taken will be false
// Event bubbling happens
// Thus when I click on the child div the answer will be
// Child Clicked > Parent Clicked > Grand Parent Clicked
// when I click on the Parent div the answer will be
// Parent Clicked > Grand Parent Clicked
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.querySelector("#grand-parent").addEventListener("click", () => {
//   console.log("Grand Parent Clicked");
// },true);

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("Parent Clicked");
// },true);

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("Child Clicked");
// },true);

// useCapture = true
// Event capturing happens
// Thus when I click on the child div the answer will be
// Grand Parent Clicked > Parent Clicked > Child Clicked
// when I click on the Parent div the answer will be
// Grand Parent Clicked  > Parent Clicked
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.querySelector("#grand-parent").addEventListener("click", () => {
//     console.log("Grand Parent Clicked");
//   },true);

//   document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent Clicked");
//   },false);

//   document.querySelector("#child").addEventListener("click", () => {
//     console.log("Child Clicked");
//   },true);

// In all cases we look for capturing cycle at first and then bubbling cycle
// When I click on the child div the answer will be
// Grand Parent Clicked > Child Clicked > Parent Clicked

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// document.querySelector("#grand-parent").addEventListener("click", () => {
//     console.log("Grand Parent Clicked");
//   },true);

//   document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent Clicked");
//   },false);

//   document.querySelector("#child").addEventListener("click", () => {
//     console.log("Child Clicked");
//   },false);

// When I click on the child div the answer will be
// Grand Parent Clicked > Child Clicked > Parent Clicked

// When I click on the parent div the answer will be
// Grand Parent Clicked > Parent Clicked

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// document.querySelector("#grand-parent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent Clicked");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked");
//   },
//   true
// );

// When I click on the parent div the answer will be
// Parent Clicked > Grand Parent Clicked

// When I click on the parent div the answer will be
// Parent Clicked > Child Clicked > Grand Parent Clicked

// When I click on the Grand Parent div the answer will be
// Grand Parent Clicked

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.querySelector("#grand-parent").addEventListener("click", () => {
//     console.log("Grand Parent Clicked");
//   },false);

//   document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent Clicked");
//   },false);

//   document.querySelector("#child").addEventListener("click", () => {
//     console.log("Child Clicked");
//   },true);

// When I click on the child div the answer will be
// Child Clicked > Parent Clicked > Grand Parent Clicked

// When I click on the parent div the answer will be
// Parent Clicked > Grand Parent Clicked
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.querySelector("#grand-parent").addEventListener("click", () => {
//     console.log("Grand Parent Clicked");
//   },true);

//   document.querySelector("#parent").addEventListener("click", (e) => {
//     console.log("Parent Clicked");
//   },false);

//   document.querySelector("#child").addEventListener("click", (e) => {
//     console.log("Child Clicked");
//     e.stopPropagation()

//   },false);
// When I click on the child div the answer will be
// Grand Parent Clicked > Child Clicked 
// Parent Clicked will not be printed since event propagation is stopped when "Child Clicked" is printed
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
