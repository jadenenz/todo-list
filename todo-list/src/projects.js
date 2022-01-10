export const projects = [];

export const pushToProjects = (Todo) => {
  projects.push(Todo);
};

export const makeNewProject = (string) => {
  projects.push(string);
};

export const returnProjects = () => projects;
