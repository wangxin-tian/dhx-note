# SQL

个人认为sql不能称之为开发语言，所以并没有将它归类到语言的集合；它在需要的场合是必要的，但在不需要的场合又是无用的，且没有太过复杂的逻辑需要处理；而涉及复杂逻辑的数据计算也不适合在sql中处理。

## MySQL存储过程函数使用

存储过程需要有两个输入参数：@n（表示要查询的第n个最大工资的员工）和@result（用于输出查询结果）。在调用这个存储过程时，需要为这些参数提供具体的值，以便执行查询并获取结果。

```sql
-- 创建存储过程
CREATE PROCEDURE GetEmployeeBySalary (
    @n INT,
    @result INT OUTPUT
)
AS
BEGIN
    -- 查询第n个最大工资的员工信息
    SELECT TOP (@n) *
    FROM employees
    ORDER BY salary DESC
    INTO @result

    -- 返回查询结果
    RETURN @result
END GetEmployeeBySalary


-- 查询第n个最大工资的员工的全部信息
CREATE PROCEDURE GetNthHighestSalaryEmployeeInfo(@N INT)
AS
BEGIN
    ;WITH TopNHighestSalaries AS (
        SELECT Salary
        FROM Employees
        ORDER BY Salary DESC
        OFFSET 0 ROWS
        FETCH @N - 1 ROWS ONLY
    )
    SELECT *
    FROM Employees
    WHERE Salary IN (SELECT Salary FROM TopNHighestSalaries)
END
```

