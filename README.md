# Task Management Application

## Description
This is a **Task Management Application** built with a frontend and backend, enabling users to manage their tasks efficiently. The application supports creating, reading, updating, and deleting tasks (CRUD operations) and includes additional features like search and filter for enhanced task management.

## Features
  **Backend:**
- **CRUD Operations:** Perform Create, Read, Update, and Delete operations on tasks.
- **Database:** Uses SQLite for data storage, ensuring lightweight and efficient task management.
- **Server:** Runs locally on http://localhost:3000 (default port can be configured in the backend settings).


  
**Frontend:**
- **Routing and Navigation:** Seamlessly navigate between pages using routes.
- **Task List View:** View all tasks on the **Task List Page**.
- **Task Management:**
    - View details of a **single task**.
    - Edit a task.
    - Delete a task.
- **Search and Filter:** Quickly search and filter tasks for better accessibility and usability.
- **Frontend Server:** Runs locally on [http://localhost:5173](http://localhost:5173/).

## Technologies Used
- React.js
- css
- Node.js
- sqlite
- express.js
  

## How It Works

**Backend:**

  - The backend handles all CRUD operations.
  - Data is stored in a SQLite database.
  - The backend server provides APIs that interact with the frontend for task management.
  - 
**Frontend:**
  - Users can view all tasks on the Task List Page.
  - Tasks can be:
    - Viewed individually.
    - Edited for updates.
    - Deleted if no longer needed.
  - Users can search or filter tasks based on specific criteria.
  - Navigation is implemented to switch between views/pages effortlessly.

## How to Use the Application
**Prerequisites**
  - Node.js installed on your machine.
  - A package manager like npm or yarn.
  - (Optional) **SQLite** Browser for database inspection.

## Setup Instructions
 **Backend Setup**
 1. Navigate to the backend folder:
``` bash
   cd server
```
2. Install dependencies:
``` bash
  npm install
```
3. Start the backend server:
```
   node index.js
```
The backend server will run on http://localhost:3000 (default: 3000). You can change the port in the configuration file if needed.
 **Frontend Setup**
 1. Navigate to the frontend folder:
``` bash
   cd client
```
2. Install dependencies:
``` bash
  npm install
```
3. Start the frontend server:
```
   npm run dev
```
The frontend will run on http://localhost:5173 (default: 5173).

 ## Running the Application
  1. Ensure both the backend and frontend servers are running.
  2. Open your browser and visit the frontend URL:
  ```
    http://localhost:<frontend-port>
  ```
  3. Begin managing your tasks using the intuitive user interface.

## File Structure
```
root
├── src
│   ├── components
│   ├── pages
│   ├── assets
├── public
├── server
```

## Some images of application
  -  All tasklists
![Screenshot 2024-11-30 142009](https://github.com/user-attachments/assets/767b3756-85a1-4695-a650-6fed16cb5a16)

  - Create task
![Screenshot 2024-11-30 142025](https://github.com/user-attachments/assets/c4473b88-705e-4603-85ea-67fe551d01ed)

  - filter task
![Screenshot 2024-11-30 142045](https://github.com/user-attachments/assets/96ee3ec1-7868-4dc8-9876-78082a51f287)

  - search task
![Screenshot 2024-11-30 142107](https://github.com/user-attachments/assets/1dedc2d5-55fe-4643-a138-d21c9eb18b21)

  - edit task
![Screenshot 2024-11-30 142236](https://github.com/user-attachments/assets/15e45c39-e166-4667-894b-3bee8399e4c7)

## Contribution
 1. Fork the repository.
 2. Create a new branch:
    ```
    git checkout -b feature-name
    ```
 3. Create a new branch:
    ```
    git commit -m "Description of changes"
    ```
 4. Push to the branch:
    ```
    git push origin feature-name
    ```
5. Open a pull request.

## Contact
If you have any questions or feedback, feel free to reach out! susanta721467@gmail.com
