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

        // //create a "mark-incomplete" button and append it to the li
        // var markIncompleteButton = document.createElement("button");
        // markIncompleteButton.innerText = "Mark Incomplete";
        // markIncompleteButton.style.position = "relative";
        // markIncompleteButton.style.left = "30px";
        // markIncompleteButton.style.top = "-3px";
        // le.appendChild(markIncompleteButton);

        //append the list item to the "completedTasksList"
        document.getElementById("completedTasksList").appendChild(le);

        //move the li back to the incomplete tasks list when "mark incomplete" button is clicked
        // markIncompleteButton.onclick = function(){
        //     //console.log("button working");
        //     document.getElementById("completedTasksList").removeChild(le);
        //     document.getElementById("list").appendChild(le);

        //     // le.removeChild(markIncompleteButton);

        //     // //create a complete button and attach it to the li
        //     // var completeButton = document.createElement("button");
        //     // completeButton.innerText = "Done";
        //     // completeButton.style.position = "relative";
        //     // completeButton.style.left = "30px";
        //     // completeButton.style.top = "-3px";
        //     // le.appendChild(completeButton);
            
        //     // //create a remove button and attach it to the li
        //     // var closeButton = document.createElement("button");
        //     // closeButton.innerText = "Remove";
        //     // closeButton.style.position = "relative";
        //     // closeButton.style.left = "40px"
        //     // closeButton.style.bottom = "3px"; 
        //     // le.appendChild(closeButton);
            
        //     // //append the li to the list
        //     // document.getElementById("list").appendChild(le);
        // }
    }

    //remove the list item when "remove" button is clicked
    closeButton.onclick = function(){
        document.getElementById("list").removeChild(le);
    }
    
}

//Read the clicks on the li
const pendingList = document.getElementById("list");
pendingList.addEventListener("click", moveItemToCompletedList);

function moveItemToCompletedList(e){
    if(e.target.nodeName === "LI"){
        console.log(this.nodeName);
        
        //pendingList.removeChild(this);
        //document.getElementById("completedTasksList").append(this);
    }
}

// const listItems = document.getElementsByTagName("li");
// for(let item of listItems){
//     item.addEventListener("click", moveItemToCompletedList);
// }

// function moveItemToCompletedList(e){
//     if(e.target.nodeName === "LI"){
//         console.log("click working");
//     }
//     // document.getElementById("list").removeChild(this);
//     // document.getElementById("completedTasksList").append(this);
// }

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