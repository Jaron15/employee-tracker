DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(25) NOT NULL UNIQUE,
    salary INTEGER NOT NULL,
    department VARCHAR(25) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES departments(department) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(25) NOT NULL,
    department VARCHAR(25) NOT NULL,
    salary INTEGER NOT NULL,
    manager VARCHAR(25) NOT NULL,
    CONSTRAINT fk_job_title FOREIGN KEY (job_title) REFERENCES roles(role) ON DELETE CASCADE,
    CONSTRAINT fk_empl_dep FOREIGN KEY (department) REFERENCES departments(department) ON DELETE CASCADE
);
 
