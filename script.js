
// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const addBtn = document.getElementById('addTaskButton')

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event =>{
    event.preventDefault()
    const {value} = event.target.taskText
    if(!value) return
    const task = document.createElement('div')
    task.classList.add('task','-roundBorder')
    task.addEventListener('click', changeTaskState)
    task.textContent= value
    tasksContainer.prepend(task)
    task.appendChild(addDeleteBtn());

    event.target.reset()

}




const changeTaskState = event => {
    event.target.classList.toggle('done')
}

// const addDeleteBtn =()=> {
//     const deleteBtn = document.createElement('button')
//     deleteBtn.textContent ='X'
//     deleteBtn.className = 'btn-delete'

//     deleteBtn.addEventListener('click', (e)=>{
//         const item = e.target.dispatchEvent
//         ul.removeChild(item)
//     })
//     return deleteBtn
// }

const order =()=>{
    const done =[]
    const toDo =[]
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return[...toDo, ... done]
}

const renderOrderedTasks = () => { 
    order().forEach(el=> tasksContainer.appendChild(el))
    const li = document.createElement('li')


}
setDate()