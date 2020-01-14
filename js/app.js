// Get Elements
const input = document.getElementById('input');
const clear = document.querySelector('.clear');
const date = document.getElementById('date');
const list = document.getElementById('list');
// Variables
let id = 0;

// ToDo Components
function addToDo(){
    // Create element in todo list LI
    id++;
    const li = document.createElement('li');
    li.classList.add('item');
    li.setAttribute('draggable', 'true');
    list.appendChild(li);
    li.innerHTML = `
            <i class="fa fa-circle-thin co" work="complete" id=${id}></i>
            <label class="text">${input.value}</label><input type="text">
            <i class="fa fa-pencil-square-o edit"></i>
            <i class="fa fa-trash-o de" del="delete" id=${id}></i>
    `;

    // Variable in Todo list functionality
    const del = li.querySelector('.de');
    const complete = li.querySelector('.co');
    const text = li.querySelector('.text');
    const edit = li.querySelector('.edit');
    // Complete element is click in check circle
    complete.addEventListener("click", () => {
        text.classList.toggle('lineThrough');
        const circleThin = complete.classList.contains('fa-circle-thin');
        if(circleThin){
            complete.classList.remove('fa-circle-thin');
            complete.classList.add('fa-check-circle');
        }else{
            complete.classList.remove('fa-check-circle');
            complete.classList.add('fa-circle-thin');
        }
    });

    // Delete element is click in urn
    del.addEventListener("click", deleteElement);
    function deleteElement(){
        li.remove();
    }
   

    // Edit element in todo list
    edit.addEventListener('click', editTask);
    function editTask(){
        let label = li.querySelector('label');
        let editInput = li.querySelector('input[type=text]');
        let containsClass = li.classList.contains('editMode');
        console.log(containsClass)
        if(containsClass){
            label.innerText = editInput.value;
        }else{
            editInput.value = label.innerText;
        }

        li.classList.toggle('editMode');
    }

    // Call DragnDrop
    addEventsDragAndDrop(li);

    
function dragStart(e){
    this.style.opacity = '0.4'
    dragEl = e.target;
    e.dataTransfer.setData('text/html', dragEl.innerHTML);
    e.dataTransfer.effectAllowed = 'move';
    let del = this.querySelector('.de');
    del.addEventListener("click", deleteElement);
    function deleteElement(){
        li.remove();
    }
    let complete = this.querySelector('.co')
    let text = this.querySelector('.text')
    complete.addEventListener("click", () => {
        text.classList.toggle('lineThrough');
        const circleThin = complete.classList.contains('fa-circle-thin');
        if(circleThin){
            complete.classList.remove('fa-circle-thin');
            complete.classList.add('fa-check-circle');
        }else{
            complete.classList.remove('fa-check-circle');
            complete.classList.add('fa-circle-thin');
        }
    });
    let edit = this.querySelector('.edit');
    edit.addEventListener('click', editTask);
    function editTask(){
        let label = li.querySelector('label');
        let editInput = li.querySelector('input[type=text]');
        let containsClass = li.classList.contains('editMode');
        if(containsClass){
            label.innerText = editInput.value;
        }else{
            editInput.value = label.innerText;
        }

        li.classList.toggle('editMode');
    }
    this.classList.remove('over');
}

function dragEnter(e){
    this.classList.add('over');
    
}

function dragLeave(e){
    e.stopPropagation();
    this.classList.remove('over');
}

function dragOver(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false
}

function dragDrop(e){
    dragEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
    let del = this.querySelector('.de');
    del.addEventListener("click", deleteElement);
    function deleteElement(){
        li.remove();
    }
    let complete = this.querySelector('.co')
    let text = this.querySelector('.text')
    complete.addEventListener("click", () => {
        text.classList.toggle('lineThrough');
        const circleThin = complete.classList.contains('fa-circle-thin');
        if(circleThin){
            complete.classList.remove('fa-circle-thin');
            complete.classList.add('fa-check-circle');
        }else{
            complete.classList.remove('fa-check-circle');
            complete.classList.add('fa-circle-thin');
        }
    });
    let edit = this.querySelector('.edit');
    edit.addEventListener('click', editTask);
    function editTask(){
        let label = li.querySelector('label');
        let editInput = li.querySelector('input[type=text]');
        let containsClass = li.classList.contains('editMode');
        if(containsClass){
            label.innerText = editInput.value;
        }else{
            editInput.value = label.innerText;
        }

        li.classList.toggle('editMode');
    }
    this.classList.remove('over');
}

function dragEnd(e){
    let del = this.querySelector('.de');
    del.addEventListener("click", deleteElement);
    function deleteElement(){
        li.remove();
    }
    let complete = this.querySelector('.co')
    let text = this.querySelector('.text')
    complete.addEventListener("click", () => {
        text.classList.toggle('lineThrough');
        const circleThin = complete.classList.contains('fa-circle-thin');
        if(circleThin){
            complete.classList.remove('fa-circle-thin');
            complete.classList.add('fa-check-circle');
        }else{
            complete.classList.remove('fa-check-circle');
            complete.classList.add('fa-circle-thin');
        }
    });
    let edit = this.querySelector('.edit');
    edit.addEventListener('click', editTask);
    function editTask(){
        let label = li.querySelector('label');
        let editInput = li.querySelector('input[type=text]');
        let containsClass = li.classList.contains('editMode');
        if(containsClass){
            label.innerText = editInput.value;
        }else{
            editInput.value = label.innerText;
        }

        li.classList.toggle('editMode');
    }
    this.classList.remove('over');
    this.style.opacity = '1';
}

function addEventsDragAndDrop(el){
  el.addEventListener('dragstart', dragStart);
  el.addEventListener('dragenter', dragEnter);
  el.addEventListener('dragover', dragOver);
  el.addEventListener('dragleave', dragLeave);
  el.addEventListener('drop', dragDrop);
  el.addEventListener('dragend', dragEnd);
}
}

// Date in header
function dateNow(){
    let options = { weekday: 'long', month: 'short', day: 'numeric'};
    let dateToday = new Date().toLocaleDateString('en-US', options);
    date.innerText = dateToday;
}
dateNow();

// Clear Listener
clear.addEventListener('click', () => {
    clearList();
});
function clearList(){
    location.reload()
}

// Input listener
input.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        addToDo();
        input.value = '';
    }
});


