const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//step 1
// BEFORE ADDING CROSS ICON comment out this commenti remaing all and execute then u will understand better

// function addTask(){
//     if(inputBox.value === ''){
//         alert("you must write something");
//     }
//     else{
//         // here we are creating a element li 
//         let li = document.createElement("li");

//         // if we write anything(value) in the input Field then it will prints in the inputBox 
//         li.innerHTML = inputBox.value;

//         // when we written something then list container append what we write in its area (group of li's)
//         listContainer.appendChild(li);
//     }

//     // after the value(text) in the input it was staying their to avoid it we have write like this see below
//     inputBox.value = "";
// }


// addTask()






// step 2
// function addTask(){
//     if(inputBox.value === ''){
//         alert("you must write something");
//     }
//     else{
//         // here we are creating a element li 
//         let li = document.createElement("li");

//         // if we write anything(value) in the input Field then it will prints in the inputBox 
//         li.innerHTML = inputBox.value;

//         // when we written something then list container append what we write in its area (group of li's)
//         listContainer.appendChild(li);

    // step 2 starts from here
// // here we are creating a element(span) what we have written in the input field (li) text 
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7"; // it is icon code
//         li.appendChild(span);

//     }

//     // after the value(text) in the input it was staying their to avoid it we have write like this see below
//     inputBox.value = "";
// }


// addTask()



//step 3
// we want to delete the text (li value) when we click on the span, mark icon so for that we have to do like this.

// function addTask(){
//     if(inputBox.value === ''){
//         alert("you must write something");
//     }
//     else{
//         // here we are creating a element li 
//         let li = document.createElement("li");

//         // if we write anything(value) in the input Field then it will prints in the inputBox 
//         li.innerHTML = inputBox.value;

//         // when we written something then list container append what we write in its area (group of li's)
//         listContainer.appendChild(li);


// // here we are creating a element(span) what we have written in the input field (li) text 
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7"; // it is icon code
//         li.appendChild(span);

//     }

//     // after the value(text) in the input it was staying their to avoid it we have write like this see below
//     inputBox.value = "";
// }
// //step 3 starts from here
// listContainer.addEventListener("click", function(e){

//     // if we are targeting  tag name  when we click on li then it will apply the checked class what we writtten in the css file // and it will apply in a toggle wise we can apply and remove
//     if(e.target.tagName === "LI")
//     e.target.classList.toggle("checked")

//     // here we are targeting the span element .. if we click on the span element it will remove the parent element ... for span we know the parent element is li here
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//     }
// },false)







// step 4

// when ever we created the li (text,value) it stays for a certain time when we are in browser ,,, when we restart and refresh reopen the browser the content was deleting to avoid that we have to use local storage.
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }
    else{
        // here we are creating a element li 
        let li = document.createElement("li");

        // if we write anything(value) in the input Field then it will prints in the inputBox 
        li.innerHTML = inputBox.value;

        // when we written something then list container append what we write in its area (group of li's)
        listContainer.appendChild(li);


// here we are creating a element(span) what we have written in the input field (li) text 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // it is icon code
        li.appendChild(span);

    }

    // after the value(text) in the input it was staying their to avoid it we have write like this see below
    inputBox.value = "";
    saveData() // step 4 it will present the cahnges and update the file and save it in the local storage.
}
//step 3 starts from here
listContainer.addEventListener("click", function(e){

    // if we click on the target tag name on li then it will apply the checked class what we writtten in the css file // and it will apply in a toggke wise we can apply and remove
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData() //step 4

    }

    // here we are targeting the span element .. if we click on the span element it will remove the parent element ... for span we know the parent element is li here
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData() //step 4
    }
},false);




// step 4 starts from here

function saveData(){

    // so what ever the content there in the list container that will be stored in our browser with the name of data,, we can display,use this data by using get item data
    localStorage.setItem("data",listContainer.innerHTML)

    // similarly if we make any changes ib the data it will also have to apply for that we have to do , we add this saveData() 
}


function showSaved(){

    // it will give all the item ,content stored in the data ,, which we created in the above see ,,, the name 
    listContainer.innerHTML = localStorage.getItem("data")
    
}

showSaved()

// for singele li 
//key -- data 
// value<li>c<span>x<span></li>


// for two li
// key-- Data
// value<li>c<span>x<span></li> ,<li>c<span>x<span></li>


// for three li 
// key Data
// value<li>c<span>x<span></li> ,<li>c<span>x<span></li> ,<li>c<span>x<span></li>



// similarly so on ............... for if we add li it will store in the local storage ,,if we remove li it will also remove from the local storage and update the changes 