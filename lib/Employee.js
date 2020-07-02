  class Employee {
    constructor(...args) {
      console.log(args);
      this.name = args[0];
      if (args.length>1) {
          this.id = args[1];
        }
      else {
          this.id = -999;
      }
      if (args.length>2) {
        this.email = args[2];
      }
    else {
        this.email = "";
    }
    }
  
    getName() {
      return this.name;
      }
    getId(){
      return this.id;
    }
    getEmail(){
      return this.email;
    }
    getRole(){
      return 'Employee';
    }
    }
  
  
  module.exports = Employee;