// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// async and defer are boolean values used along with script tag to load external scrpts efficiently into our webpage
//  When we load a webpage there are two different things happening in the browser
// 1)html parsing
// 2)loading of the scripts
// loading of the scripts = fetching the scrpts from the network + executing it
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Case 1
// browser is parsing the html
// suddenly encounters a script tag then html parsing stops
// fetches the script from the network and suddenly executes it
// when the script is executed completly then html parsing continues
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Case 2
// async
// along with the html parsing we are fetching the scrpt from the network (the procees happens simultaneously)
// when the fetch is completely done the script tag will be executed
// after the execution is complete html parsing continues
// if we use async order of execution is not present
// if there is a case where two or more script tags are there that are dependant on each other then async should not be used
// there will be scrpits say for google analytics that will not be dependant for the code that we might write
// in that case async can be used
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Case 3
// defer
// along with the html parsing we are fetching the scrpt from the network (the procees happens simultaneously)
// the scrpits are executed only after the html parsing is complete
// defer gurantees order of execution

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

