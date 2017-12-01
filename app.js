const taskList = document.querySelector('.js-tasks-list')
const input = document.querySelector('.js-input')
const form = document.querySelector('.js-form')

const tasks = ['html', 'css', 'js', 'es6', 'react']

form.addEventListener('submit', function (e) {
  e.preventDefault()
  if (input.value.length > 0) {
    addTask(input.value)
    input.value = ''
    input.focus()
  }
  return false
})

function addTask (taskName) {
  taskList.innerHTML += `<li>${taskName}</li>`
}

function renderList () {
  tasks.forEach(function (task) {
    addTask(task)
  })
}

renderList()
