const ul = document.getElementById('tasks')
const createBtn = document.getElementById('createBtn')

createBtn.addEventListener('click', () => {
    const val = prompt('')

    if (val) {
        const li = document.createElement('li')
        li.innerText = val
        ul.appendChild(li)
    }
})
