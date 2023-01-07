
const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const task = document.querySelector("[data-task]");
  input.value = '';
  //backticks
  const content = `<div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;
  console.log(content); 
};

console.log(btn);

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);


  