***QUESTIONS***



**Q1 ROLE OF FRONTEND**
![frontend](https://v1.scrimba.com/articles/content/images/size/w1000/2022/12/Fronted-VS-Backend-Web-Development.png)
The Frontend (FE) is the part of a web application that users see and interact with directly in their browser. It focuses on appearance, usability, and interaction.
## User Interface (UI)
Frontend is responsible for designing the visual layout of the application.
It includes elements like buttons, forms, images, menus, tables, and text.
Technologies commonly used: HTML, CSS, JavaScript, and frameworks like React or Angular.
## User Interaction
Frontend handles user actions such as clicking buttons, typing input, submitting forms, and navigating pages.
It provides instant feedback like validation messages, animations, and alerts.
Example: Showing an error message if a required field is left empty.
### Communication with Backend
Frontend sends requests to the backend using APIs (usually via HTTP).
It receives data from the backend and displays it in a user-friendly way.
Example: Fetching product data from a server and displaying it as cards on a webpage.


*** Q2 ROLE OF BACKEND ***
![backend](https://v1.scrimba.com/articles/content/images/size/w1000/2022/12/Fronted-VS-Backend-Web-Development.png)
The Backend (BE) is the hidden part of a web application that works behind the scenes. It manages data, logic, and security.
### Server-Side Processing
Backend handles requests sent by the frontend.
It performs calculations, validations, and decision-making.
Example: Checking whether a login password is correct.
### Database Handling
Backend connects to databases to store, retrieve, update, and delete data.
It manages user data, orders, products, and transactions.
Example: Saving user registration details into a database.
### Security and Authentication
Backend ensures that only authorized users can access certain features.
It handles login, signup, roles, permissions, and data protection.
Example: Verifying a user’s token before allowing access to a dashboard.


***Q3 BUSINESS LOGIC***
![business logic](https://blog.citunius.de/wp-content/uploads/2019/07/BusinessLogic.Generic.en_-1024x643.png)
Business Logic refers to the set of rules and conditions that define how a business operates within a web application.
It decides what should happen when certain actions are performed.
Key Points
Business logic lives mostly in the backend.
It ensures the application follows real-world business rules.
It separates technical code from business decision rules.
Real-World Examples
E-Commerce Website
If cart value > ₹1000 → apply 10% discount.
Stock should decrease after a successful order.
Banking Application
User cannot withdraw more money than available balance.
Interest is calculated based on account type.
Online Exam System
Exam auto-submits when time is over.
Marks are calculated based on correct answers.


***Q4 CLIENT-SERVER MODEL ***
The Client–Server Model is a communication structure where tasks are divided between requesters (clients) and providers (servers).
## Who is the Client?
The client is usually a web browser or mobile app.
It sends requests to the server.
Example: Chrome browser requesting a webpage.
## Who is the Server?
The server is a powerful system that processes requests and sends responses.
It handles logic, database access, and security.
## How Communication Happens
Client sends a request (HTTP/HTTPS).
Server processes the request.
Server sends back a response (data or status).
Client displays the response to the user.


*** Q5 THREE-TIER ARCHITECTURE ***
3-Tier Architecture divides a web application into three independent layers. Each layer has a specific responsibility.
## Presentation Layer
This is the Frontend/UI layer.
It displays data and collects user input.
Example: Web pages, forms, dashboards.
## Application (Business) Layer
This layer contains business logic.
It processes user requests and applies rules.
Example: Order validation, login checks.
## Data Layer
This layer manages the database.
It stores and retrieves application data.
Example: User records, product lists.
Why 3-Tier Architecture is Used
Better scalability
Easier maintenance
Improved security
Clear separation of responsibilities


*** Q6 JAVASCRIPT AS A BACKEND LANGUAGE ***
JavaScript is widely used as a backend language due to its speed, flexibility, and strong ecosystem.
## Performance
JavaScript uses an event-driven, non-blocking model.
It can handle many requests efficiently.
Suitable for real-time applications like chat apps.
## Ecosystem
JavaScript has a huge package ecosystem through npm.
Thousands of libraries are available for security, databases, APIs, and more.
Faster development using ready-made tools.
## Popular Backend Frameworks
Node.js – Runtime to run JavaScript on servers.
Express.js – Lightweight framework for APIs.
NestJS – Structured framework for large applications.