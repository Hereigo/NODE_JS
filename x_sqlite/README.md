### 2023-12-04

```bash

npm i --save express body-parser sqlite3

npm i --save-dev nodemon
# add to package.json
#   "scripts": { "dev": "nodemon node my-server.js"

```
# Before using: 

1. Install SQLite extension.

2. Create Database in "Command Pallete".

3. To run SQLite Query => Shift + Ctrl + Q

```sql

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    text TEXT
)
 
INSERT INTO tasks
('text') VALUES ('Asdf');

SELECT * FROM tasks;

```
