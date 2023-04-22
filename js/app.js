//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.
console.log(`Oценка - 45 баллов 
Исправил в css зачеркивание выполненных задач
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) Правило '1.1 Отступы' из html-and-css выполняется во всем проекте: табуляция не используется, все отступы выполнены пробельным символом 

2) Правило '1.2 Нижний регистр написания' из html-and-css выполняется во всем проекте: все HTML теги, атрибуты из значения, селекторы и их значения записаны в нижнем регистре 

3) Правило '1.3 Кавычки в HTML/CSS документе' из html-and-css выполняется во всем проекте: в HTML и СSS файлах используются только двойные кавычки 

4) Правило '2.1 Форматирование' из html-and-css выполняется во всем проекте: все блочные, табличные и списочные элементы перенесены на отдельную строку и выделены отступами в соответствии с лестничной иерархией вложенности. 

5) Правило '2.2 Тип документа / Document Type' из html-and-css выполняется во всем проекте: doctype присутствует первым тегом в html документе и соответствует типу html5 

6) Правило '2.3 Символы-мнемоники' из html-and-css выполняется во всем проекте: символы-мнемоники не используются в html файлах 

7) Правило '2.4 Атрибут 'type'' из html-and-css выполняется во всем проекте: CSS-стили и JS-скрипты подключены без использования данного атрибута 

8) Правило '3.1 Единый стиль именования селекторов (классов / id)' из html-and-css выполняется во всем проекте: все селекторы именованы в едином стиле, при этом или в соответствии с БЭМ, или все слова в нижнем регистре и разделены между собой дефисом 

9) Правило '3.2 Значимые названия идентификаторов и классов' из html-and-css выполняется во всем проекте: все имена классов и идентификаторов имеют или осмысленные имена в соответствии с их функциональным значением (!но НЕ ВНЕШНИМ ВИДОМ!), или шаблонное имя (также соответствующее назначению элемента) 

10) Правило '3.3 Лаконичность названий идентификаторов и классов' из html-and-css выполняется во всем проекте: все имена id и классов понятны, достаточно длинные для понимания их назначения и при этом лаконичны 

11) Правило '3.4 Теговые селекторы' из html-and-css выполняется во всем проекте: теговые селекторы не используются (за исключением намеренного сброса дефолтных стилей) 

12) Правило '3.5 Отступы в блоках' из html-and-css выполняется во всем проекте: содержимое всех блоков отделены отступами 

13) Правило '3.6 Пробел после названий свойств' из html-and-css выполняется во всем проекте: значения CSS-свойств отделены пробелами после двоеточия 

14) Правило '3.7 Точка с запятой после свойств' из html-and-css выполняется во всем проекте: после каждого CSS-правила стоит точка с запятой 

15) Правило '3.8 Разделение селекторов и свойств' из html-and-css выполняется во всем проекте: каждый селектор в групповом перечислении CSS-блока отделен переносом строки 

16) Правило '1.1 Семантика' из html-and-css-extended соблюдено: все html-теги используются в соответствии с их назначением. При этом использование div-элементов сведено к минимуму, где возможно они заменены на семантические html5 элементы 

17) Правило '1.2 Альтернатива для мультимедиа' из html-and-css-extended соблюдено: каждый мультимедиа элемент (в данном задании img) имеет alt-атрибут с осмысленным содержанием, соответствующим контенту элементы. При этом чисто декоративные картинки имеют alt с пустым значением. 

18) Правило '2.1 БЭМ' из html-and-css-extended соблюдено: все классы именованы согласно БЭМ нотации 

`)

var taskInput = document.getElementById("new-task");//Add a new task.
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder = document.getElementById("todo-list");//ul of #todo-list
var completedTasksHolder = document.getElementById("completed");//ul of #completed


//New task list item
var createNewTaskElement = function (taskString) {

  var listItem = document.createElement("li");

  //input (checkbox)
  var checkBox = document.createElement("input");//checkbx
  //label
  var label = document.createElement("label");//label
  //input (text)
  var editInput = document.createElement("input");//text
  //button.edit
  var editButton = document.createElement("button");//edit button

  //button.delete
  var deleteButton = document.createElement("button");//delete button
  var deleteButtonImg = document.createElement("img");//delete button image

  label.innerText = taskString;
  label.classList.add('task__field', 'task__label');;

  //Each elements, needs appending
  checkBox.type = "checkbox";
  checkBox.classList.add('task__tick')
  editInput.type = "text";
  editInput.classList.add('task__field', 'task__input-text');

  editButton.innerText = "Edit"; //innerText encodes special characters, HTML does not.
  editButton.className = "button__edit";

  deleteButton.className = "button__delete";
  deleteButtonImg.src = './assets/remove.svg';
  deleteButtonImg.alt = 'button delete select item';
  deleteButton.appendChild(deleteButtonImg);

  listItem.classList.add('todo__item')
  //and appending.
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}



var addTask = function () {
  console.log("Add Task...");
  //Create a new list item with the text from the #new-task:
  if (!taskInput.value) return;
  var listItem = createNewTaskElement(taskInput.value);

  //Append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";

}

//Edit an existing task.

var editTask = function () {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector("label");
  var editBtn = listItem.querySelector(".button__edit");
  var containsClass = listItem.classList.contains("todo__item_editMode");
  //If class of the parent is .editmode
  if (containsClass) {

    //switch to .editmode
    //label becomes the inputs value.
    label.innerText = editInput.value;
    editBtn.innerText = "Edit";
  } else {
    editInput.value = label.innerText;
    editBtn.innerText = "Save";
  }

  //toggle .editmode on the parent.
  listItem.classList.toggle("todo__item_editMode");
};


//Delete task.
var deleteTask = function () {
  console.log("Delete Task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //Remove the parent list item from the ul.
  ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted = function () {
  console.log("Complete Task...");

  //Append the task list item to the #todo__completed
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete = function () {
  console.log("Incomplete Task...");
  //Mark task as incomplete.
  //When the checkbox is unchecked
  //Append the task list item to the #todo__list.
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}



var ajaxRequest = function () {
  console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  //select ListItems children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.button__edit");
  var deleteButton = taskListItem.querySelector("button.button__delete");


  //Bind editTask to edit button.
  editButton.onclick = editTask;
  //Bind deleteTask to delete button.
  deleteButton.onclick = deleteTask;
  //Bind taskCompleted to checkBoxEventHandler.
  checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {

  //bind events to list items chldren(tasksCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list items chldren(tasksIncompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.