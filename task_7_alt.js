class Customer {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Project class
  class Project {
    constructor(name, customer, performer, status) {
      this.name = name;
      this.customer = customer;
      this.performer = performer;
      this.status = status;
    }
  }
  
  // Performer class
  class Performer {
    constructor(name) {
      this.name = name;
    }
  }
  
  // ProjectsInProgress class
  class ProjectsInProgress {
    constructor() {
      this.customers = [];
      this.projects = [];
      this.performers = [];
    }
  
    // Adding a new customer to the collection
    addCustomer(customer) {
      this.customers.push(customer);
    }
  
    // Editing a customer in the collection
    editCustomer(oldCustomer, newCustomer) {
      const index = this.customers.indexOf(oldCustomer);
      if (index !== -1) {
        this.customers[index] = newCustomer;
      }
    }
  
    // Removing a customer from the collection
    removeCustomer(customer) {
      const index = this.customers.indexOf(customer);
      if (index !== -1) {
        this.customers.splice(index, 1);
      }
    }
  
    // Search for one customer in the collection
    findCustomer(name) {
      return this.customers.find(customer => customer.name === name);
    }
  
    // Adding a project to a collection
    addProject(project) {
      this.projects.push(project);
    }
  
    // Editing a project in a collection
    editProject(oldProject, newProject) {
      const index = this.projects.indexOf(oldProject);
      if (index !== -1) {
        this.projects[index] = newProject;
      }
    }
  
    // Deleting a project from a collection
    removeProject(project) {
      const index = this.projects.indexOf(project);
      if (index !== -1) {
        this.projects.splice(index, 1);
      }
    }
  
    // Adding a performer to a collection
    addPerformer(performer) {
      this.performers.push(performer);
    }
  
    // Editing a performer in a collection
    editPerformer(oldPerformer, newPerformer) {
      const index = this.performers.indexOf(oldPerformer);
      if (index !== -1) {
        this.performers[index] = newPerformer;
      }
    }
  
    // Removing a performer from a collection
    removePerformer(performer) {
      const index = this.performers.indexOf(performer);
      if (index !== -1) {
        this.performers.splice(index, 1);
      }
    }
  
    // Search of all customer projects
    searchCustomerProjects(customer) {
      return this.projects.filter(project => project.customer === customer);
    }
  
    // Search for all performer projects
    searchPerformerProjects(performer) {
      return this.projects.filter(project => project.performer === performer);
    }
  }
  
  const mySystem = new ProjectsInProgress();

  const customer1 = new Customer("Ivan");

  const customer2 = new Customer("Orest");

  const customer3 = new Customer("Ivanka");

  const performer1 = new Performer("Julie");

  const performer2 = new Performer("Angle");

  const performer3 = new Performer("Iris");

  const project1 = new Project("New Project", customer1, performer1 , "In Progress");

  const project2 = new Project("Alt project", customer1, performer1 , "In Progress");

  const project3 = new Project("project 3", customer1, performer1 , "In Progress");

  console.log(mySystem);

  mySystem.addCustomer(customer1);

  mySystem.addCustomer(customer3);

  mySystem.editCustomer(customer1, customer2);

  mySystem.removeCustomer(customer3);

  console.log(mySystem.findCustomer("Orest"));

  console.log(mySystem.findCustomer("Taras"));

  mySystem.addProject(project1);

  console.log(mySystem);

  mySystem.addProject(project3);

  mySystem.editProject(project1, project2);

  mySystem.removeProject(project3);

  mySystem.addPerformer(performer1);

  mySystem.addPerformer(performer2);

  mySystem.addPerformer(performer3);

  mySystem.editPerformer(performer1, performer2);

  mySystem.removePerformer(performer2);

  console.log(mySystem.searchCustomerProjects(customer2));

  console.log(mySystem.searchPerformerProjects(performer3));

  console.log(mySystem);

  console.log(mySystem.searchCustomerProjects(customer1));

  console.log(mySystem.searchPerformerProjects(performer1));

