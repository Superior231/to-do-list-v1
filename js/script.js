const inputTask = document.getElementById('input-task');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputTask.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must write something :)',
          });
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        listContainer.append(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // x icon
        li.appendChild(span);
    }
    inputTask.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Pada saat user click Enter
document.getElementById('input-task').addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addTask();
    }
})
showTask()