const inputEl = document.querySelector(".todo__input");
const todoTasksEl = document.querySelectorAll(".todo__task");
const tasks = [];
inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        event.preventDefault();
        const task = inputEl.value;
        

        tasks.push(task);

        inputEl.value = "";
        
        renderToDoTasks(tasks);
    }
});

const renderToDoTasks = (tasks) => {
    tasks.forEach((task) => console.log(task));
}
/* todoTasksEl.forEach((x) => x.addEventListener
    ("click", (event) => {
        console.log(event.target.innerText);
})
); */

