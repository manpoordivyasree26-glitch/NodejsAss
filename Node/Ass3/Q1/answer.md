## PACKAGE MANAGERS

### What is a package manager?
A package manager is a tool used to install, update, manage, and remove external libraries (called packages) in a project.
Example packages:
express, mongoose, cors, etc.
### Why do we need package managers in backend development?
Backend projects need many features such as:
*handling databases
*managing routes
*handling security
*authentication
*file uploads
Instead of writing everything from scratch, we install packages that already solve these problems.
This saves time, effort, and reduces bugs.
### Problems faced if package managers are not used
Without a package manager:
Developers would manually download libraries
Hard to update versions
Hard to share project with others
Dependency conflicts
Not scalable for real development
For example, if your project needs 20 different libraries, installing and maintaining them manually would be a nightmare.

### NPM (Node Package Manager)
## What is NPM?
NPM stands for Node Package Manager.
It is the default package manager for Node.js.
It allows you to:
install packages
update packages
remove packages
publish your own packages
### Why is NPM important for Node.js applications?
Because NPM gives access to thousands of libraries like:
Express (server)
Mongoose (MongoDB)
JSONwebtoken (authentication)
Bcrypt (password hashing)
These packages help developers quickly build modern backend apps.
### How NPM manages dependencies
When you install packages using NPM:
npm install express
NPM:
downloads the package
installs required dependencies
adds entry in package.json
stores code in node_modules
This makes sure the project works in any computer.

## Backend Project Initialization
Command used to initialize Node.js backend project
To start a backend project using Node.js:
npm init
### What npm init does
Asks questions (project name, version, author, etc.)
Creates a file called package.json
### What npm init -y does
npm init -y skips all questions and creates package.json with default values.
So difference:
Command	Behavior
npm init	interactive (asks questions)
npm init -y	auto (sets default values)
Files and Folders Created After Project Initialization
After initializing and installing dependencies, these are created:

## package.json
This is the most important file in Node.js project.
It stores:
project info
dependencies
scripts
version info
Example:
"dependencies": {
  "express": "^4.18.2"
}
## node_modules
This folder contains the actual source code of all packages you install.
It can become very large in size (sometimes 100+ MB).

### package-lock.json
This file stores:
exact version numbers
resolved dependencies
ensures consistency
It guarantees that if someone clones your project, they get the same versions.

### Which files/folders should NOT be pushed to GitHub and Why
node_modules — should NOT be pushed
Reasons:
very large in size
can be recreated using package.json
wastes storage
Developers simply run:
npm install
and node_modules will be generated automatically.
Which files MUST be committed to GitHub and Why
# package.json
Required because it stores dependency list.
# package-lock.json
Required to ensure same dependency versions for all developers.
