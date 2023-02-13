const inputEl = document.querySelector(".todo__input");
const errorMessageEl = document.querySelector(".todo__error-message");
const todoTasksEl = document.querySelectorAll(".todo__task");
const todoTasksList = document.querySelector(".todo__tasks");

const tasks = [];
inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        event.preventDefault();
        const task = inputEl.value;
        if (task.length > 0) {
            if (tasks.indexOf(task) === -1) {
                errorMessageEl.style.display = "none";
                tasks.push(task);
                inputEl.value = "";
                renderToDoTasks(tasks);
            } else {
                errorMessageEl.style.display = "block";
            }
        }      
             
    }
});

const renderToDoTasks = (tasks) => {
    todoTasksList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("div");
        taskEl.className = "todo__task";

        const paragraphEl = document.createElement("p");
        paragraphEl.innerText = `${index +1}. ${task}`;

        const deleteEl = document.createElement("a");
        deleteEl.className = "todo__task-delete";
        deleteEl.innerText = "Delete";

        deleteEl.addEventListener('click', (event) => {
            /* let currentText = event.target.previousSibling.innerText; */
            /* currentText = currentText.substring(currentText.indexOf(" ") + 1); */
            tasks.splice(tasks.indexOf(task), 1);
            renderToDoTasks(tasks);
        })

        taskEl.appendChild(paragraphEl);
        taskEl.appendChild(deleteEl);

        todoTasksList.appendChild(taskEl);
    });
}


/* todoTasksEl.forEach((x) => x.addEventListener
    ("click", (event) => {
        console.log(event.target.innerText);
})
); */

