const inputEl = document.querySelector(".todo__input");
const errorMessageEl = document.querySelector(".todo__error-message");
const todoTasksEl = document.querySelectorAll(".todo__task");
const todoTasksList = document.querySelector(".todo__tasks");



const tasks = 
    localStorage.getItem("tasks") === null 
        ? [] 
        : JSON.parse(localStorage.getItem("tasks")); 
if  (localStorage.getItem("tasks") !== null) {
    renderToDoTasks(tasks)
};


inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        event.preventDefault();
/* preventDefault - preventiramo defoltno ponašanje "forma"*/

        const task = inputEl.value;

        if (task.length > 0) {
            if (tasks.indexOf(task) === -1) {
                errorMessageEl.style.display = "none";

                localStorage.setItem("tasks", JSON.stringify(tasks));
                tasks.push(task);

                inputEl.value = "";
               
                renderToDoTasks(tasks);
            } else {
                errorMessageEl.style.display = "block";
            }
        }      
             
    }
});
function renderToDoTasks(tasks) {

    todoTasksList.innerHTML = "";
    /*todoTasksList.innerHTML = ""; radi se kako bi se ispraznilo sve prije*/
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("div");
        taskEl.className = "todo__task";

        const paragraphEl = document.createElement("p");
        paragraphEl.innerText = `${index +1}. ${task}`;

        const deleteEl = document.createElement("a");
        deleteEl.className = "todo__task-delete";
        deleteEl.innerText = "Delete";

        deleteEl.addEventListener('click', (event) => {
            tasks.splice(tasks.indexOf(task), 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderToDoTasks(tasks);
        })

        taskEl.appendChild(paragraphEl);
        taskEl.appendChild(deleteEl);

        todoTasksList.appendChild(taskEl);
    });
}
