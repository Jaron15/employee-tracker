USE employee_db;
INSERT INTO departments (department)
VALUES 
('Sales'), 
('Engineering'), 
('HR'), 
('Legal');

INSERT INTO roles (role, salary, department)
VALUES 
('Sales manager', 70000, 'Sales'),
('Sales rep', 65000, 'Sales'),
('Sales associate', 60000, 'Sales'),
('Chief engineer', 110000, 'Engineering'),
('Software engineer', 80000, 'Engineering'),
('Apprentice', 65000, 'Engineering'),
('HR manager', 85000, 'HR'),
('HR specialist', 75000, 'HR'),
('HR intern', 65000, 'HR'),
('Chief legal officer', 110000, 'Legal'),
('Senior legal manager', 90000, 'Legal'),
('Legal analyst', 80000, 'Legal');

INSERT INTO employees (first_name, last_name, job_title, department, salary, manager)
VALUES 
('Jon', 'Smith', 'Sales manager', 'Sales', 70000, 'Marcus'),
('Jordan', 'Hudson', 'Sales rep', 'Sales', 65000, 'Jon'),
('Corey', 'Yan', 'Chief engineer', 'Engineering', 110000, 'Marcus'),
('Max', 'Volk', 'HR manager', 'HR', 85000, 'Marcus'),
('Dustin', 'Charles', 'Chief legal officer', 'Legal', 110000, 'Marcus');