var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
    'Fazer Café',
    'Beber Gasolina',
    'Jogar lixo no lixo'
];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

       var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#'); 

       var linkText = document.createTextNode('Excluir');

       linkElement.appendChild(linkText);

       todoElement.appendChild(todoText);
       todoElement.appendChild(linkElement);

       listElement.appendChild(todoElement);
    } 
}

renderTodos();

function addTodo() {
    var todOText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}
buttonElement.onclick = addTodo; 