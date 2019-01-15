
// SEARCH ELEMENT AND ASSIGN THEM

var toDoItems = document.querySelectorAll('li');

var addBtn = document.querySelector('.add-btn');

var newTodoInput = document.querySelector('.new-to-item');

var todoList = document.querySelector('.todo-list');

var form = document.querySelector('form');

var completedCountSpan = document.querySelector('.completed-count-span');

var footer = document.querySelector('footer');

var resetBtn = document.querySelector('.reset-btn');


// FUNCTION WHO TARGETS AND MANIPULATE AN ELEMENT 

var checkAllDone = function() {
    if (document.querySelectorAll('.completed').length === document.querySelectorAll('li').length) {
        footer.classList.remove('hidden');
        } else {
        footer.classList.add('hidden');
    }
}

var restAllItems = function() {
    
    var allItems = document.querySelectorAll('.completed');

    allItems.forEach(function(item) {
        item.classList.remove('completed');
    }); 
}   

var markComplete = function(event) {
event.target.classList.toggle('completed');
completedCountSpan.textContent = document.querySelectorAll('.completed').length;
checkAllDone();
}


var addToDoItem = function() {
    event.preventDefault(); //it stops the default in this case go form to go to other page html form / action
    

    // setting up the element
    var newListItem = document.createElement('li');
    newListItem.classList.add('todo-item');
    newListItem.textContent = newTodoInput.value
    newListItem.addEventListener('click', markComplete)

    todoList.appendChild( newListItem );

    newTodoInput.value = ''; // clear input box

    checkAllDone();
}

    toDoItems.forEach(function(items) {
        items.addEventListener('click', markComplete);
    });  

// EVENT LISTENER 

resetBtn.addEventListener('click', restAllItems);
addBtn.addEventListener('click', addToDoItem);


// ALTERNATIVE TO addBtn 
// form.addEventListener('submit', addToDoItem)
