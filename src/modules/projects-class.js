import weatherAppImg from "./pictures/weatherApp.png";
import dashboardProjectImg from "./pictures/dashboardProject.png"
import odinsLibraryImg from "./pictures/odinsLibrary.png";

class ProjectPortfolio {
  constructor() {
    this.projects = [];
  }

  addToPortfolio(project) {
    if (!project.name || !project.image) {
      throw new Error("Cannot add project. Check that project name and image values are defined.")
    }
    this.projects.push(project);
  }
}

class Project {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

const portfolio = new ProjectPortfolio();

const weatherAppProject = new Project("Weather App", weatherAppImg);
portfolio.addToPortfolio(weatherAppProject);
const dashboardProject = new Project("Admin Dashboard", dashboardProjectImg);
portfolio.addToPortfolio(dashboardProject);
const libraryProject = new Project("Odin's Library", odinsLibraryImg);
portfolio.addToPortfolio(libraryProject);

export { portfolio };