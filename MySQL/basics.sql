--database = folder
--tables = files
CREATE DATABASE myDB;
USE mydb;
DROP DATABASE mydb;

--shows error but works
ALTER DATABASE mydb READ ONLY = 1;
--in read only mode this fails
DROP DATABASE mydb;
-- disable readonly
ALTER DATABASE mydb READ ONLY = 0;
DROP DATABASE mydb;

--Tables--
CREATE DATABASE myDB;
USE mydb;
CREATE TABLE employees (
	employee_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(5, 2),
    hire_date DATE
);
--select table
SELECT * FROM employees;
RENAME TABLE employees TO workers;
DROP TABLE employees;