USE employee_db;
INSERT INTO departments (department)
VALUES 
('Sales'), 
('Engineering'), 
('HR'), 
('Legal');

INSERT INTO roles (role, salary, department)
VALUES 
('Sales manager', 70000, 'Sales');

INSERT INTO employees (first_name, last_name, job_title, department, salary, manager)
VALUES 
('Jon', 'Smith', 'Sales Manager', 'Sales', 70000, 'Andrew');