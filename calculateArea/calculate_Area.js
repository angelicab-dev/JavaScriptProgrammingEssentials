let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

    //return area;
}

// Practice task
let itemCount = 1;
function addGroceryItem(){
    //Retrieve the unordered list:
    const list = document.getElementById("groceryList");
    
    itemCount++;
    const uniqueId = `item ${itemCount}`;

    
    //Create a new li element
    const addItemInput = document.createElement("li");

    // Create new label element
    const label = document.createElement('label');
    label.htmlFor = uniqueId;
    label.textContent = `Enter item ${itemCount} amount: `;

    // Create new input element
    const input = document.createElement('input');
    input.type = 'number';
    input.id = uniqueId;

    addItemInput.append(label, input);

    list.appendChild(addItemInput);
}

function checkTotal(){

    const groceryAmount = document.querySelectorAll("#groceryList li");

    let total = 0;
    groceryAmount.forEach((item) => {
        const input = item.querySelector('input');

        let value = parseFloat(input.value);

        total += value;
    });

    document.getElementById('groceryTotal').innerText = total;
}