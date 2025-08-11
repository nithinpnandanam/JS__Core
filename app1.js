// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Refer Image 1
// whenever there is a function invocation an execution context is created
// In the memory creation phase if var is used variables are assigned value undefined,and functions are assigned fuction defenitions as value

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Scope of a variable means where we can access the variable
// Whenever an excution context is created a lexical environment is also created
// lexical environment = local memory + lexical env of its paremt

// Refer Image 2
// we are trying to print b to the console
// at first local memory of c is checked
// then lexical env of its parent is checked [yellow color]
// lexical env of parent (a) means local memory of a + its parent
// thus value of b becomes 10
// lexical env of a = local memory of a + lexical env of its parent (null)
// This is called scope chain

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function a(){
    var b = 10
    c()
    function c(){
        console.log(b);
    }
}

a()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





