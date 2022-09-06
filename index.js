const form = document.querySelector("#form");

const sendTask = task => {
    const url = 'http://localhost:8080/api/v1/tasks';
    const header = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(task)
    }
    fetch(url,header)
    .then(response => response.json)
    console.log(.then(response => response);
    );
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const task = Object.create(null);
    task.nameTask = e.target.NameTask.value;

    sendTask(task);
})