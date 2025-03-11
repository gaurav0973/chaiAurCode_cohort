/*
Problem Breakdown
1. user new task ko add kar paye -> add button -> add task in the element
    -> simply take input from browser
    -> input ko p tag me link do
    -> p take ko parent me append kar do 
2. added element ko hum drag kar paye 
    -> draggable = true => add this css in the p tag created above
    -> tag.setAttribute() => adding any css property in the dom(browser)
3. drop in the other board
    -> jab element drag ho rha then dosre board ke pass koi contxt nahi hai ki unke upar jo cheej 
        drag ho rahi ahi usko apne me append karna hai
    -> how to do that ??
        -> board ke upar code likhna padehga 
        -> board -> agar mere upar koi aayega tehn mai usko apne me chipka lunga 
                🏃card -> drag 
                                -> start 
                                -> end
                🏃board -> drag 
                                -> over => board ke over(upar) se kuch gaya
4. how do I know which element we are dragging ??
    -> card when I start dragging -> add an attribute -> flying
    -> card wehn I end dragging -> remove the atttribute -> flying
    -> jab bhi vo elelemt board par aayega then I will search for the card with flying attribute    
*/



//save to local storage
/*
{
  "kanbanBoardData": {
    "todo-board": [
      {
        "content": "Learn React",
        "timestamp": 1709644800000
      },
    ],
    "in-progress-board": [],
    "done-board": []
  }
}
*/


function saveToLocalStorage() {
    const boards = document.querySelectorAll('.board');
    const boardsData = {}

    boards.forEach(board => {
        // todo-board , in-progress-board, done-board
        const boardId = board.id

        // every thing inside the items class
        const items = board.querySelectorAll('.item');

        boardsData[boardId] = []
        items.forEach(item => {
            const taskText = item.querySelector('.task-content').firstChild.textContent.trim()
            const taskTime = Number(item.dataset.timestamp);
            boardsData[boardId].push({
                content: taskText,
                timestamp: taskTime
            });
        });
    });

    localStorage.setItem('kanbanBoardData', JSON.stringify(boardsData));
}

// Load data from localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('kanbanBoardData');
    if (!savedData) 
        return

    const boardsData = JSON.parse(savedData);

    Object.keys(boardsData).forEach(boardId => {
        const board = document.getElementById(boardId);
        boardsData[boardId].forEach(itemData => {
            createTaskCard(itemData.content, board, itemData.timestamp);
        });
    });
    updateTaskCounts();
}


const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");
const allBoards = document.querySelectorAll('.board');

// create new task
function createTaskCard(content, parentBoard, timestamp = Date.now()) {
    const taskCard = document.createElement('p');
    taskCard.classList.add("item");
    taskCard.dataset.timestamp = timestamp;
    taskCard.innerHTML = `
        <div class="task-content">
            ${content}
            <button class="delete-btn">❌</button>
        </div>
        <span class="timestamp">${formatTimeAgo(timestamp)}</span>
    `;
    taskCard.setAttribute("draggable", true);
    parentBoard.appendChild(taskCard);
    attachDragEvent(taskCard);
    attachEditEvent(taskCard);
    return taskCard;
}

// Attach drag events to items
function attachDragEvent(target) {
    target.addEventListener("dragstart", () => {
        target.classList.add("flying");
    });
    target.addEventListener("dragend", () => {
        target.classList.remove("flying");
        updateTaskCounts();
        saveToLocalStorage();
    });
}

// Attach edit events to items
function attachEditEvent(target) {
    target.addEventListener('dblclick', () => {
        const taskContent = target.querySelector('.task-content');
        const newText = prompt("Edit your task", taskContent.childNodes[0].textContent.trim());
        if (newText) {
            taskContent.childNodes[0].textContent = newText + ' ';
            saveToLocalStorage();
        }
    });
}

// Update task counts for each board
function updateTaskCounts() {
    const boards = document.querySelectorAll('.board');
    boards.forEach(board => {
        const count = board.querySelectorAll('.item').length;
        const countSpan = board.querySelector('.task-count');
        countSpan.textContent = count;
    });
}

// Format timestamp to relative time
function formatTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds} sec ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;

    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
}

function updateTimestamps() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const timestamp = parseInt(item.dataset.timestamp);
        const timeSpan = item.querySelector('.timestamp');
        if (timeSpan) {
            timeSpan.textContent = formatTimeAgo(timestamp);
        }
    });
}

// Add new task button click handler
addTaskBtn.addEventListener("click", () => {
    const input = prompt("What is your task");
    if (!input) return;

    createTaskCard(input, todoBoard);
    updateTaskCounts();
    saveToLocalStorage();
});


allBoards.forEach(board => {
    board.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    board.addEventListener("drop", (e) => {
        e.preventDefault();
        const flyingCard = document.querySelector(".flying");
        if (flyingCard) {
            board.appendChild(flyingCard);
        }
    });
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.item').remove();
        updateTaskCounts();
        saveToLocalStorage();
    }
});


setInterval(updateTimestamps, 6*10000);

// initial load
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    const allItems = document.querySelectorAll('.item');
    allItems.forEach(item => {
        attachDragEvent(item);
        attachEditEvent(item);
    });
});



