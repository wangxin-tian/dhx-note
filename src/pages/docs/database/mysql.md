# MySQL

## 使用数据库服务

```bash
# 启动服务
net start mysql

# 停止服务
net stop mysql

# 连接服务
mysql -h 主机名 -u 用户名 -p 密码

# 退出
exit
```

## InnoDB 引擎

### 优缺点

- 优点
  - 支持自增
  - 更新密集的表：适合处理多重并发的更新请求
  - 支持崩溃恢复
  - 支持事务
- 缺点
  - 占用空间大
  - 读写性能差

### MyISAM 引擎

- 优点
  - 空间占用小
  - 读写性能高
- 缺点
  - 不支持事务
  - 不支持崩溃恢复

### MEMORY 引擎

- 优点
  - 读写性能高
- 缺点
  - 数据容易丢失
  - 占用空间大

### 引擎选择

- 读写密集的表：InnoDB
- 空间占用小的表：MyISAM
- 读多写少的表：MyISAM
- 暂时性的表：MEMORY

### 引擎设置

```sql
# 设置数据库引擎
CREATE TABLE 表名 (
    ...
    ENGINE = 引擎名
);

# 设置表引擎
ALTER TABLE 表名 ENGINE = 引擎名;
```

## 数据库操作

### 创建数据库

```sql
CREATE DATABASE 数据库名;
```

### 删除数据库

```sql
DROP DATABASE 数据库名;
```

### 修改数据库

```sql
ALTER DATABASE 数据库名
  [DEFAULT] CHARACTER SET 字符集名
  [DEFAULT] COLLATE 排序规则名;
```

### 查看数据库

```sql
SHOW DATABASES;
```

## 表操作

### 创建表

```sql
CREATE TABLE 表名 (
    列名1 数据类型1,
    列名2 数据类型2,
    ...
);
```

### 删除表

```sql
DROP TABLE 表名;
```

### 修改表

```sql
# 添加列
ALTER TABLE 表名 ADD 列名 数据类型;

# 删除列
ALTER TABLE 表名 DROP 列名;

# 修改列
ALTER TABLE 表名 MODIFY 列名 新数据类型;

# 修改列名
ALTER TABLE 表名 CHANGE 旧列名 新列名 新数据类型;

# 添加主键
ALTER TABLE 表名 ADD PRIMARY KEY (列名);

# 删除主键
ALTER TABLE 表名 DROP PRIMARY KEY;

# 添加外键
ALTER TABLE 从表名 ADD CONSTRAINT 外键名称
    FOREIGN KEY (外键字段名) REFERENCES 主表名 (主表列名);

# 删除外键
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;

# 创建唯一索引
ALTER TABLE 表名 ADD UNIQUE (列名);

# 删除唯一索引
ALTER TABLE 表名 DROP INDEX 列名;

# 创建普通索引
ALTER TABLE 表名 ADD INDEX (列名);

# 删除普通索引
ALTER TABLE 表名 DROP INDEX 列名;

# 创建全文索引
ALTER TABLE 表名 ADD FULLTEXT (列名);

# 删除全文索引
ALTER TABLE 表名 DROP FULLTEXT (列名);
```

### 查看表

```sql
SHOW TABLES;
```

## 数据操作

### 插入数据

```sql
INSERT [INTO] 表名 [(列名1, 列名2, ...)]
  VALUES (值1, 值2, ...);
```

### 删除数据

```sql
  DELETE FROM 表名 [WHERE 条件];
```

### 更新数据

```sql
UPDATE 表名
  SET 列名1 = 值1, 列名2 = 值2, ...
  [WHERE 条件];
```

### 查询数据

```sql
SELECT 列名1, 列名2, ...
  FROM 表名
  [WHERE 条件]
  [GROUP BY 列名]
  [HAVING 条件]
  [ORDER BY 列名1, 列名2, ...]
  [LIMIT 行数];
```

## 数据类型

### 整型

- TINYINT
  - 1 字节
  - 范围：-128 ~ 127
- SMALLINT
  - 2 字节
  - 范围：-32768 ~ 32767
- MEDIUMINT
  - 3 字节
  - 范围：-8388608 ~ 8388607
- INT
  - 4 字节
  - 范围：-2147483648 ~ 2147483647
- BIGINT
  - 8 字节
  - 范围：-9223372036854775808 ~ 9223372036854775807

### 浮点型

- FLOAT
  - 4 字节
- DOUBLE
  - 8 字节

### 定点数

- DECIMAL
  - DECIMAL(M, D)
  - M 精度
  - D 小数位数

### 字符串

- CHAR
  - 固定长度
  - 范围：0 ~ 255
- VARCHAR
  - 变长
  - 范围：0 ~ 65535
- TINYTEXT
  - 范围：0 ~ 255
- TEXT
  - 范围：0 ~ 65535
- MEDIUMTEXT
  - 范围：0 ~ 16777215
- LONGTEXT
  - 范围：0 ~ 4294967295

### 日期时间

- DATE
  - YYYY-MM-DD
- TIME
  - HH: MM: SS
- DATETIME
  - YYYY-MM-DD HH: MM: SS
- TIMESTAMP
  - 1970-01-01 00:00:00 ~ 2038-01-01 00:00:00
- YEAR
  - 范围：1901 ~ 2155

### 二进制数据

- BINARY
  - 范围：0 ~ 255
- VARBINARY
  - 范围：0 ~ 65535
- TINYBLOB
  - 范围：0 ~ 255
- BLOB
  - 范围：0 ~ 65535
- MEDIUMBLOB
  - 范围：0 ~ 16777215
- LONGBLOB
  - 范围：0 ~ 4294967295

## 约束

### 非空约束

```sql
CREATE TABLE 表名 (
  列名1 数据类型1 NOT NULL,
  列名2 数据类型2 NOT NULL,
  ...
);
```

### 唯一约束

```sql
CREATE TABLE 表名 (
    列名1 数据类型1 UNIQUE,
    列名2 数据类型2 UNIQUE,
    ...
);
```

### 主键约束

```sql
CREATE TABLE 表名 (
    列名1 数据类型1 PRIMARY KEY,
    列名2 数据类型2 PRIMARY KEY,
    ...
);
```

### 外键约束

```sql
CREATE TABLE 从表名 (
    列名1 数据类型1,
    列名2 数据类型2,
    ...
    CONSTRAINT 外键名称 FOREIGN KEY (外键字段名) REFERENCES 名 (主表列名)
);
```

### 检查约束

```sql
CREATE TABLE 表名 (
    列名1 数据类型1 CHECK (列名1 >= 0),
    列名2 数据类型2 CHECK (列名2 >= 0),
    ...
);
```

## 索引

### 普通索引

```sql
CREATE INDEX 索引名 ON 表名 (列名);
```

### 唯一索引

```sql
CREATE UNIQUE INDEX 索引名 ON 表名 (列名);
```

### 全文索引

```sql
CREATE FULLTEXT INDEX 索引名 ON 表名 (列名);
```

### 删除索引

```sql
DROP INDEX 索引名 ON 表名;
```

## 视图

### 创建视图

```sql
CREATE VIEW 视图名 AS
SELECT 列名1, 列名2, ...
FROM 表名
WHERE 条件;
```

### 删除视图

```sql
DROP VIEW 视图名;
```

### 修改视图

```sql
ALTER VIEW 视图名 AS
SELECT 列名1, 列名2, ...
FROM 表名
WHERE 条件;
```

### 查看视图

```sql
SHOW TABLES;
```

## 事务

### 开启事务

```sql
START TRANSACTION;
```

### 提交事务

```sql
COMMIT;
```

### 回滚事务

```sql
ROLLBACK;
```

## 用户管理

### 创建用户

```sql
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
```

### 删除用户

```sql
DROP USER '用户名'@'主机名';
```

### 修改用户

```sql
UPDATE mysql.user
  SET Password = PASSWORD('新密码')
  WHERE User = '用户名' AND Host = '主机名';
```

### 查看用户

```sql
SELECT User, Host, Password FROM mysql.user;
```

### 授予权限

```sql
GRANT 权限1, 权限2, ... ON 数据库名.表名 TO '用户名'@'主机名';
```

### 撤销权限

```sql
REVOKE 权限1, 权限2, ... ON 数据库名.表名 FROM '用户名'@'主机名';
```

### 设置密码

```sql
SET PASSWORD FOR '用户名'@'主机名' = PASSWORD('新密码');
```

### 设置密码过期

```sql
ALTER USER '用户名'@'主机名' PASSWORD EXPIRE;
```

### 取消密码过期

```sql
  ALTER USER '用户名'@'主机名' PASSWORD EXPIRE NEVER;
```

### 设置密码过期时间

```sql
  ALTER USER '用户名'@'主机名' PASSWORD EXPIRE INTERVAL 密码过期时间 DAY;
```

## 备份与恢复

### 备份

```sql
mysqldump -u 用户名 -p 密码 数据库名 > 文件名.sql;
```

### 恢复

```sql
mysql -u 用户名 -p 密码 数据库名 < 文件名.sql;
```

### 备份数据库

```sql
mysqldump -u 用户名 -p 密码 数据库名 > 文件名.sql;
```

### 备份数据库表

```sql
mysqldump -u 用户名 -p 密码 数据库名 表名 > 文件名.sql;
```

### 备份数据库表结构

```sql
mysqldump -u 用户名 -p 密码 数据库名 表名 -d > 文件名.sql;
```

### 备份数据库表数据

```sql
mysqldump -u 用户名 -p 密码 数据库名 表名 -t > 文件名.sql;
```

### 备份数据库表结构与数据

```sql
mysqldump -u 用户名 -p 密码 数据库名 表名 > 文件名.sql;
```

### 备份所有数据库

```sql
mysqldump -u 用户名 -p 密码 --all-databases > 文件名.sql;
```
