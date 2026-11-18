// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
console.log(blockVar);


function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    

{
    let nameLet = "Angel";
    var nameVar = "Angel";
    const nameConst = "Angel";
}
console.log(nameVar); // Throws ReferenceError
function showName(){
    let nameFunctionLet = "Angel";
    var nameFunctionVar = "Angel";
    const nameFunctionConst = "Angel";
    }
    showName();

