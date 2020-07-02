var inquirer = require("inquirer");

var fs = require('fs');

const path = require("path");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "employeeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

const current_departments = [];
const current_roles = [];
const current_employees = [];

function start() {
    // connection.query("select * from departments", function (err, res) {
    //     if (err) throw err;
    //     current_departments=res;
    //     console.table(current_departments);
    // });
    // connection.query("select * from roles", function (err, res) {
    //     if (err) throw err;
    //     current_roles=res;
    //     console.table(current_roles);
    // });
    // connection.query("select * from employees", function (err, res) {
    //     if (err) throw err;
    //     current_employees=res;
    //     console.table(current_employees);
    // });
    
    
    

    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Add Departments",
                "Add Roles",
                "Add Employees",
                "View Departments",
                "View Roles",
                "View Employees",
                "View Employees by Manager",
                "Update Employee Roles",
                "Update Employee Managers",
                "Delete Departments",
                "Delete Roles",
                "Delete Employees",
                "View the Total Utilized Budget of a Department"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add Departments":
                    addDepartments();
                    break;

                case "Add Roles":
                    addRoles();
                    break;

                case "Add Employees":
                    addEmployees();
                    break;

                case "View Departments":
                    viewDepartments();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "View Employees":
                    viewEmployees();
                    break;

                case "View Employees by Manager":
                    viewEmployeesbyManager();
                    break;

                case "Update Employee Roles":
                    updateEmployeeRoles();
                    break;

                case "Update Employee Managers":
                    updateEmployeeManagers();
                    break;

                case "Delete Departments":
                    deleteDepartments();
                    break;

                case "Delete Roles":
                    deleteRoles();
                    break;

                case "Delete Employees":
                    deleteEmployees();
                    break;
                case "View the Total Utilized Budget of a Department":
                    viewTotalBudget();
                    break;

            }
        });
}

function viewDepartments() {
    connection.query("select * from departments", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewRoles() {
    connection.query("select * from roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewEmployees() {
    connection.query("select * from employees", function (err, res) {
        console.table(res);
        start();
    })
}

function addDepartments() {
    // First show all the departments
    connection.query("select * from departments", function (err, res) {
        console.table(res);
        inquirer.prompt({
            name: "department",
            type: "input",
            message: "What department do you want to add?"
        }
        )
            .then(function (answer) {
                connection.query("insert into departments (name) values (?)", [answer.department], function (err, res) {
                    if (err) throw err;
                    viewDepartments();
                })
            }
            )
    })
}

function addRoles() {
    // First show all the departments
    // First show all the departments
    connection.query("select * from departments", function (err0, res0) {
        console.table(res0);
    connection.query("select * from roles", function (err, res) {
        console.table(res);
        inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What title do you want to add?"
        },
        {
            name: "salary",
            type: "input",
            message: "What salary is this role?"
        },
        {
            name: "department_id",
            type: "rawlist",
            message: "Select the department id",
            choices:res0
        }

    ]
        )
            .then(function (answer) {
                for (i=0;i<res0.length;i++){
                    if(res0[i].name===answer.department_id){
                        department_id=res0[i].id;
                    }
                }
                connection.query("insert into roles (title,salary,department_id) values (?,?,?)", [answer.title,answer.salary,department_id], function (err, res) {
                    if (err) throw err;
                    viewRoles();
                })
            }
            )
    })
})
}


function addEmployees() {
    // First show all the departments
    // First show all the departments
    connection.query("select * from departments", function (err0, res0) {
        console.table(res0);
    connection.query("select * from roles", function (err, res) {
        console.table(res);
        inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What title do you want to add?"
        },
        {
            name: "salary",
            type: "input",
            message: "What salary is this role?"
        },
        {
            name: "department_id",
            type: "rawlist",
            message: "Select the department id",
            choices:res0
        }

    ]
        )
            .then(function (answer) {
                for (i=0;i<res0.length;i++){
                    if(res0[i].name===answer.department_id){
                        department_id=res0[i].id;
                    }
                }
                connection.query("insert into roles (title,salary,department_id) values (?,?,?)", [answer.title,answer.salary,department_id], function (err, res) {
                    if (err) throw err;
                    viewRoles();
                })
            }
            )
    })
})
}