import Todo from './createTodo';
import './style.css';
import { pushToProjects, returnProjects } from './projects';
import Project from './createProject';
import {
  anchorLoop,
  displayTodo,
  makeNewProject,
  openTheForm,
  closeTheForm,
  populateMain,
} from './DOMstuff';

function pageSetup() {
  const testy = new Todo('Test todo', 'this is a test todo', '12/4/21', 'high');
  const testy2 = new Todo(
    'Second todo',
    'do this one second',
    '12/16/21',
    'low'
  );
  const testy3 = new Todo('For second project', 'test', '1/11/01', 'medium');
  const defaultProject = new Project('Default Project');
  const secondProject = new Project('Second Project');
  window.currentProject = defaultProject;
  defaultProject.addTodo(testy);
  defaultProject.addTodo(testy2);
  secondProject.addTodo(testy3);
  pushToProjects(defaultProject);
  pushToProjects(secondProject);
  const newProjectBtn = document.querySelector('.newProjectBtn');
  const newTodoBtn = document.querySelector('.newTodoBtn');
  const form = document.querySelector('form');
  const closeBtn = document.querySelector('#closeForm');
  newProjectBtn.addEventListener('click', makeNewProject);
  newTodoBtn.addEventListener('click', openTheForm);
  closeBtn.addEventListener('click', closeTheForm);
  populateMain(defaultProject);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('dueDate');
    const priorityInput = document.getElementById('priority');
    const freshTodo = new Todo(
      titleInput.value,
      descriptionInput.value,
      dueDateInput.value,
      priorityInput.value
    );
    console.log(freshTodo);
    defaultProject.addTodo(freshTodo);
    populateMain(window.currentProject);
    // displayTodo();
    // addBookToLibrary(freshBook);
    // clearCards();
    // displayLibrary();
    // saveArray();
  });
}

pageSetup();
anchorLoop();

// Each todo will go inside a project, new projects can be created with separate todo lists.
// Theres a default project called 'default'

// PROJECTS are objects that store TODOs (objects), they are stored in PROJECTLIST (array)

// Next:
// Add functionality to indicate a todo is complete
