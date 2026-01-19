**Q1. Why is db.json not suitable as a database for real projects?**
db.json is only useful for small practice projects. It is not suitable for real applications because:

***Performance Issues:*** It becomes slow when data grows.
***No Multi-User Support***: Cannot handle multiple users at the same time.
***Not Scalable***: Cannot handle large amounts of data or heavy traffic.
***No Reliability***: Data can get corrupted if the server crashes.
***No Security***: No authentication, no permissions, no encryption.
***No Backup System***: No automatic data recovery or backups.


**Q2. Ideal characteristics of a proper database system**

A good database should not just store data. It should also manage data safely and efficiently. Ideal characteristics include:

***High Performance*** → Fast reading, writing, and searching
***Concurrency ***→ Allows multiple users at the same time
***Reliability*** → Keeps data safe even if errors occur
***Data Integrity*** → Ensures data is correct and consistent
***Scalability*** → Should grow as data and users grow
***Fault Tolerance ***→ Continues working even if part of the system fails
***Security ***→ Protects data using authentication and permissions

**Q3. Types of Databases and Their Use Cases**

There are mainly two types of databases:

***A. Relational Databases (SQL)***

* Store data in tables (rows & columns)
* Use SQL to query data
* Maintain strict structure and relationships
* Ensure safe transactions

Examples:
MySQL
PostgreSQL
Oracle
SQL Server
Common Use Cases:
Banking and Finance
E-commerce order systems
Inventory systems
Healthcare systems
ERP/HR systems

***B. Non-Relational Databases (NoSQL)***

* No fixed table structure
* Flexible and scalable
* Good for fast-changing large data
* Types of NoSQL databases:
* Document → MongoDB
* Key-Value → Redis
* Column → Cassandra
* Graph → Neo4j
* Common Use Cases:
* Social media platforms
* Real-time chat apps
* Analytics and logging
* IoT data streams
* Caching