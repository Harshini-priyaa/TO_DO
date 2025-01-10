const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//function that the button responds to add task 
const addTask = ()=>{
    if(inputBox.value === " "){  //when input is empty
        alert("No task added");
    }
    else{ //if input is given
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); 
}

//to toggle the check and uncheck states in the app
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save the data in local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//to actually display it in the browser even after refreshing the page
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();