/*
Trer elementos
Crear elementos
crear eventos
definir funciones

*/
var container = document.getElementById('container');
var button = document.getElementById('button-event');

button.addEventListener('click', createForm);
button.addEventListener('click', hidden);

function createForm() {
event.preventDefault();
  /*
  crear un form
  crear un input dentro del form
  crear un botton

  agregar form como hijo de container
  agregar input y  botton como hijos de form
  */
  //Creamos elementos
  var form = document.createElement('form');
  var input = document.createElement('input');
  var save = document.createElement('button');
 //Le agregamos texto
  save.innerText = 'Guardar';//se agrega texto al boton

  save.addEventListener('click', createForms);

  container.appendChild(form);
  form.appendChild(input);
  form.appendChild(save);

}

function createForms(event){
  event.preventDefault();
  /*
  crear un form
  crear un input dentro del form
  crear un botton

  agregar form como hijo de container
  agregar input y  botton como hijos de form
  */
  var forms = document.createElement('form');
  var inputs = document.createElement('input');
  var saves = document.createElement('button');

  forms.className = 'left';
  //forms.className = 'clear';
  saves.innerText = 'Añadir tarjeta';//se agrega texto al boton

  //saves.addEventListener('click', createParagraph);

  container.appendChild(forms);
  forms.appendChild(inputs);
  forms.appendChild(saves);

}

function hidden(event){
  event.preventDefault();
  button.className = 'hidden';
}

function toShow(){
  button.className = to-show;
}
