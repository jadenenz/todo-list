import { projects, pushToProjects, returnProjects } from './projects';
import Project from './createProject';
import Todo from './createTodo';

const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
const anchorList = document.querySelector('.anchorList');

function createAnchor(label, href) {
  const anchor = document.createElement('a');
  anchor.innerText = label;
  anchor.setAttribute('href', href);
  return anchor;
}

function createP(content) {
  const p = document.createElement('p');
  p.innerText = content;
  return p;
}
function clearAnchors() {
  const anchorSelectAll = anchorList.querySelectorAll('a');
  for (let i = 0; i < anchorSelectAll.length; i++) {
    anchorSelectAll[i].remove();
  }
}

function clearMain() {
  document.querySelector('.main').innerText = '';
}

export function openTheForm() {
  document.querySelector('.formPopup').style.display = 'block';
}

export function closeTheForm() {
  document.querySelector('.formPopup').style.display = 'none';
}

export function populateMain(project) {
  clearMain();
  const projectName = project.name;
  const h2 = document.createElement('h2');
  h2.innerText = projectName;
  main.appendChild(h2);
  project.todos.forEach((todo) => {
    const todoTitle = createP(todo.title);
    main.appendChild(todoTitle);
  });
}

export function displayTodo(e) {
  const eventTarget = e.target;
  console.log(eventTarget);
  const dataAtt = eventTarget.getAttribute('data-index');
  // const projectName = returnProjects()[dataAtt].name;
  const currentProject = returnProjects()[dataAtt];
  console.log(currentProject);
  window.currentProject = currentProject;
  populateMain(currentProject);
}

// export function makeNewTodo() {
// }

export function anchorLoop() {
  clearAnchors();
  projects.forEach((project, index) => {
    const newAnchor = createAnchor(project.name, '#');
    newAnchor.setAttribute('data-index', index);
    newAnchor.addEventListener('click', displayTodo);
    anchorList.appendChild(newAnchor);
  });
}

export function makeNewProject() {
  const projectName = prompt('New project title');
  const newProject = new Project(projectName);
  pushToProjects(newProject);
  anchorLoop();
}
