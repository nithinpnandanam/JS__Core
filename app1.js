// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Refer Image 1
// There are many categories called laptops camera shoes
// the id for each categories are laptops , camera and shoes
// when we clicl on a category then it should redirect to another page
// when we click on latop category it should redirect to "domain-name/laptops"
// for this to happen we are attaching eventhandlers for each of the category
// document.querySelector("#laptop").addEventListener('click',()=>{
//     window.location.href("/laptop")
// })
// The above practise of attaching eventhandler for each category is not a good practise
// Reasons
// 1 if the number of categories are more a lot of eventhandlers will be created 
// 2 if infinite scrolling is present then the number of categories will in crease as we scroll down
// if evenhandlers are inceassed there will be a wastage of memory and performanc eissues will also be there
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Solution
// Instead of attaching event handlers to each category attach it to a parent that encloses the categories
// Thus a single event listeners is attached to the parent div
// all the categories that come under the parent div can be addressed using the event handler in parent div
// This is made possible because of bubbling
// lets say a category called laptop is clicked then by event bubbling the callback associated with the parent div also gets triggered
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.querySelector("#category").addEventListener("click",(e)=>{
    console.log(e.target.id)
    console.log(e.target.tagName)
    // the below check is made since there is a possibility that the div called container can have elements other than li
    // Event bubbling happens for all the children under div called category
    // we want redirection to happen only in case when an li is clicked
    if (e.target.tagName=='LI'){
        window.location.href = '/'+e.target.id
    }
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.querySelector("#input-category").addEventListener("keyup",(e)=>{
    console.log(e.target.dataset.uppercase);
    // for second and third input box "e.target.dataset.uppercase" will be undefined
    // because "data-uppercase" is not added in html
    // e.target.dataset.uppercase !=undefined means "data-uppercase"  is present in html
    if(e.target.dataset.uppercase !=undefined){
        e.target.value = e.target.value.toUpperCase()
    }
})

// This concept is called behavior pattern in event delegation
// It helps in reusability
// we can give "data-uppercase" as an attribute to another input element
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Advantages of Event Delegation
// 1 writing less code
// 2 event handler is given to the parent container rather than to all the children
// 3 infinte scrolling becones easy and less troublesome
// else for all the children that is formed by infinite scrolling we might need to add event handlers

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Disadvantages of Event Delegation
// blur focus are events where event delegation (bubbling)will not work
// in some cases we might need to use event.stopPropgation()
// that means bubbling is not happening completely
// hence event delegation will also not work
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

