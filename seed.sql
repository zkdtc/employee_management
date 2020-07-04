DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;


CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary decimal NULL,
  department_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);

INSERT INTO departments (name) values ('Physics');
INSERT INTO departments (name) values ('CS');
INSERT INTO departments (name) values ('HR');

INSERT INTO roles (title,salary,department_id) values ('Physics Director',250000,1);
INSERT INTO roles (title,salary,department_id) values ('Physics Professor',200000,1);
INSERT INTO roles (title,salary,department_id) values ('Physics Associate Professor',150000,1);
INSERT INTO roles (title,salary,department_id) values ('Physics Assistent Professor',100000,1);

INSERT INTO roles (title,salary,department_id) values ('CS Director',500000,2);
INSERT INTO roles (title,salary,department_id) values ('CS Professor',400000,2);
INSERT INTO roles (title,salary,department_id) values ('CS Associate Professor',300000,2);
INSERT INTO roles (title,salary,department_id) values ('CS Assistent Professor',150000,2);

INSERT INTO roles (title,salary,department_id) values ('HR Director',200000,3);
INSERT INTO roles (title,salary,department_id) values ('HR Senior Staff',180000,3);
INSERT INTO roles (title,salary,department_id) values ('HR Staff',120000,3);
INSERT INTO roles (title,salary,department_id) values ('HR Assistent Staff',80000,3);


INSERT INTO employees (first_name,last_name,role_id) values ('Kai','Zhang',1);
INSERT INTO employees (first_name,last_name,role_id) values ('Zongju','Zhou',9);
INSERT INTO employees (first_name,last_name,role_id) values ('Ethan','Zhang',5);
INSERT INTO employees (first_name,last_name,role_id,manager_id) values ('Abigail','Zhang',2,1);

