let count = 0; // Initialize count to 0

function increaseCount(){
    count++;
    displayCount(); // Called here but declared below
    checkCountValue();
}

const resetFollowerCount = () =>{
        const resetConfirm = confirm("Warning: Are you sure you want to reset follower count?");
    if(resetConfirm){
        count = 0;
        displayCount();
    }
    else{
        displayCount();
    }
    

}



// Arrow function
/* 
const increaseCount = () =>{
    count++;
}
*/

function displayCount(){
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue(){
    if(count===10){
        alert("Your Instagram post gained 10 followers! Congratulations!");

    }
    else if(count===20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

/*
function resetFollowerCount(){
    const resetConfirm = confirm("Warning: Are you sure you want to reset follower count?");
    if(resetConfirm){
        count = 0;
        displayCount();
    }
    else{
        displayCount();
    }
}
*/