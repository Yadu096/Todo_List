var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

//Add task to the list
function addItem(){
    
    //read input text
    var inputText = document.getElementById("inputEle").value;
    
    //create a listitem(li)
    var le = document.createElement("LI");
    le.classList.add("listItem");
    var inputTextNode = document.createTextNode(inputText);
    le.appendChild(inputTextNode);
    
    //create a complete button and attach it to the li
    var completeButton = document.createElement("button");
    completeButton.innerText = "Done";
    completeButton.style.position = "relative";
    completeButton.style.left = "30px";
    completeButton.style.top = "-3px";
    le.appendChild(completeButton);
    
    //create a remove button and attach it to the li
    var closeButton = document.createElement("button");
    closeButton.innerText = "Remove";
    closeButton.style.position = "relative";
    closeButton.style.left = "40px"
    closeButton.style.bottom = "3px"; 
    le.appendChild(closeButton);
    
    //append the li to the list
    document.getElementById("list").appendChild(le);

    //move to "completedTasksList" when "done" button is clicked
    completeButton.onclick = function(){
        document.getElementById("list").removeChild(le);

        //remove "done" and "remove" buttons
        le.removeChild(completeButton);
        le.removeChild(closeButton);

        //append the list item to the "completedTasksList"
        document.getElementById("completedTasksList").appendChild(le);

    }

    //remove the list item when "remove" button is clicked
    closeButton.onclick = function(){
        document.getElementById("list").removeChild(le);
    }
    
}


//Show all tasks 
document.getElementById("allTasks").addEventListener("click", showAllTasks);
function showAllTasks(){
    document.getElementById("completedTasksList").style.display = "block";
    document.getElementById("list").style.display = "block";
}

//Show pending tasks only
document.getElementById("pendingTasks").addEventListener("click", showPendingTasks);
function showPendingTasks(){
    document.getElementById("completedTasksList").style.display = "none";
    document.getElementById("list").style.display = "block";
}

//Show completed tasks only
document.getElementById("completedTasks").addEventListener("click", showCompletedTasks);
function showCompletedTasks(){
    document.getElementById("completedTasksList").style.display = "block";
    document.getElementById("list").style.display = "none";
}