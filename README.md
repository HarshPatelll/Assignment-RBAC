# **Role-Based Access Control** (MERN)

# **Overview**

The Role-Based Task Manager UI is a robust application built using the MERN stack (MongoDB, Express, React, Node.js) to streamline task management. It offers Role-Based Access Control (RBAC), enabling secure CRUD operations tailored to user roles. The application includes features such as real-time notifications, a trash file for recovering deleted tasks, password reset functionality, and an intuitive Kanban board for assigning and managing tasks within projects. Additionally, it supports bug report editing, making it an all-in-one solution for efficient project and task tracking.


# **Admin Features**

 ## **User Management**
 
1. Create admin accounts.
2. Add and manage team members.
3. He can see Project, Trash and Team Member section

## **Task Assignment**

1. Assign tasks to individual or multiple users.
2. Update task details and status.

## **Asset Management**

1. Upload task assets, such as images.

## **User Account Control**

1. Disable or activate user accounts.
2. Permanently delete or trash tasks.

# **User Features**
## **Task Interaction**
1. View detailed task information.
2. View Only Project Section
3. Kanban Boards( can add task within projects)
4. Can add Bug Reports as well 
5. Both These features are performed on projects

# **General Features**
## **Authentication and Authorization**

1. User login with secure authentication.
2. Role-based access control.

# **Profile Management**

1. Update user profiles.

# **Password Management**

1. Change passwords securely.

   # **Innovative Features**
   

1. Real-Time Notifications: Keep users informed about task updates instantly.
2. Trash File: Recover deleted tasks effortlessly.
3. Password Reset Functionality: Simplified and secure password recovery.
4. Intuitive Kanban Board: Assign and manage tasks visually within projects.
5. Bug Report Editing: Streamline tracking and resolution of project issues.
6. Interactive and User-Friendly UI: Enhance user experience with responsive and engaging design.
7. Seamless Project Tracking: Efficiently manage tasks and projects all in one place.
This combination of features makes the application an all-in-one solution for efficient and interactive project management.

# **Technologies Used**

## **Frontend**

1. React (Vite)
2. Redux Toolkit for State Management
3. Headless UI
4. Tailwind CSS

## **Backend**

Node.js with Express.js
Database:

MongoDB for efficient and scalable data storage.
The RBACUI is an innovative solution that brings efficiency and organization to task management within teams. By harnessing the power of the MERN stack and modern frontend technologies, the platform provides a seamless experience for both administrators and users, fostering collaboration and productivity.

 

# **SETUP INSTRUCTIONS**
## **Server Setup**
Environment variables
First, create the environment variables file .env in the server folder. The .env file contains the following environment variables:
NODE_END = development

MONGODB_URI =mongodb+srv://abcharsh12:M6vRZGeMh5EBLlkt@cluster0.62ksy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET =dvsfbgnhgbgfd

PORT= 8800  

## **Set Up MongoDB** 
Setting up MongoDB involves a few steps:

Visit MongoDB Atlas Website

Go to the MongoDB Atlas website: https://www.mongodb.com/cloud/atlas.
Create an Account

Log in to your MongoDB Atlas account.

Create a New Cluster

Choose a Cloud Provider and Region

Configure Cluster Settings

Create Cluster

Wait for Cluster to Deploy

Create Database User

Set Up IP Whitelist

Connect to Cluster

Configure Your Application

Test the Connection

Create a new database and configure the .env file with the MongoDB connection URL.

## **Steps to run server**
1. Open the project in any editor of choice.
2. Navigate into the server directory 
3. cd Task-Manager-B2D-main  
4. cd server
5. Run npm i or npm install to install the packages.
6. npm init
 7. npm i bcryptjs cookie-parser cors dotenv express jsonwebtoken mongoose morgan
 8.  npm i -D nodemon
  9. Run npm start to start the server.
If configured correctly, you should see a message indicating that the server is running successfully and Database Connected.

 

# **Client Side Setup**
Environment variables
First, create the environment variables file .env in the client folder. The .env file contains the following environment variables:

1. VITE_APP_FIREBASE_API_KEY = AIzaSyBlLVQy4suMdmGNywCv94IkO44xKV5-mYU
2. VITE_APP_BASE_URL = http://localhost:8800

## **Steps to run client**
1. Navigate into the client directory
2. cd Task-Manager-B2D-main  
3. cd client.
4. Run npm i or npm install to install the packages.
5.  npm install -D tailwindcss postcss autoprefixer ( Tailwind setuo)
6.  npx tailwindcss init -p
7.  npm i @headlessui/react @reduxjs/toolkit clsx moment react-icons react-redux react-router-dom recharts sonner
8. Run npm run dev to run the app on http://localhost:3000.
Open http://localhost:3000 to view it in your browser.

# **Dependencies**

## **Frontend**
 ## **Tailwind CSSS**
  1. cd Task-Manager-B2D-main  
 2. cd client.
 3. npm install -D tailwindcss postcss autoprefixer
4. npx tailwindcss init -p
5. npm i @headlessui/react @reduxjs/toolkit clsx moment react-icons react-redux react-router-dom recharts sonner

## **Backend**
 1. cd Task-Manager-B2D-main  
 2. cd server
 3. npm init
 4. npm i bcryptjs cookie-parser cors dotenv express jsonwebtoken mongoose morgan
 5. npm i -D nodemon

    ## **Credentials**
    Admin :
    1. username : mohit123@gmail.com
    2. password : 123456

    User:
    1. username: harshh123@gmail.com
    2. password: harshh123@gmail.com
   
    1. username: samyak123@gmail.com
    2. password: samyak123@gmail.com
   
    ## **Note**
       After the admin adds the new user credentials of that user will be of format
       
        1 .Username and Password will be same and then they can reset if they want
    # **For Support, Contact**
    Email : abcharsh12@gmail.com
    


   
