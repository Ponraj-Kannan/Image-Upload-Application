# Image Upload Application

This project demonstrates an application that allows users to upload images from a React frontend and store them in a MySQL database using a Spring Boot backend. The images can also be retrieved and displayed in the React app.

---

## **Features**
- Upload images from the React frontend.
- Store images (binary data) in a MySQL database.
- Fetch and display images using their unique ID.
- RESTful API integration with Spring Boot.

---

## **Technologies Used**
### **Frontend**
- React
- Axios

### **Backend**
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL

---

## **Setup Instructions**

### **Prerequisites**
- Node.js and npm installed
- Java JDK 17 or higher
- MySQL database
- Maven for dependency management

## **Configure application.properties**
- spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.servlet.multipart.max-file-size=5MB
spring.servlet.multipart.max-request-size=5MB


## **MySQL Database Setup**

CREATE DATABASE your_database_name;
CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    data LONGBLOB NOT NULL
);

## **API Endpoints**

1. Upload Image
  URL: POST /upload
  Request Body: Multipart form data with a file field named file.
  Response: 200 OK on success or 500 Internal Server Error on failure.
2. Get Image by ID
  URL: GET /images/{id}
  Response: Returns the image binary data with appropriate Content-Type.
3. List All Images
  URL: GET /images
  Response: Returns a list of image metadata (ID, name, type).

---
