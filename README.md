# **Expense Tracker - Full Stack Application**

An intuitive expense tracker built using a modern tech stack, leveraging the power of React, Node.js, MongoDB, and REST API architecture.


## **Features**



* **Responsive UI**: Built with React for a smooth and interactive user experience.
* **Backend**: Utilizing Node.js to handle server-side operations.
* **Database**: Using MongoDB, a NoSQL database, to efficiently manage and retrieve user data.
* **RESTful Architecture**: Implementing the REST architecture for API endpoints to ensure standardized requests and responses.


## **Installation**


### **Prerequisites**



* Node.js and npm installed on your machine.
* MongoDB Atlas account with a cluster set up, or a local MongoDB instance.


### **Steps**



1. **Clone the repository**: 

    ```
    git clone https://github.com/DavelRad/ExpenseTracker.git
    cd expense-tracker
    ```


2. **Configure Environment Variables**:
    * Create a `.env` file in the root of the `backend` folder.
    * Add your MongoDB connection URL to the `.env` file: 
`MONGO_URL=mongodb+srv://&lt;username>:&lt;password>@&lt;cluster-url>/&lt;dbname>?retryWrites=true&w=majority`
3. **Install Dependencies and Start Backend**: 


    ```
    cd backend
    npm install
    npm start
    ```


4. **Install Dependencies and Start Frontend**: 


    ```
    cd ../frontend
    npm install
    npm start

    ```



## **Usage**



1. **Access the Application**:
    * Open your web browser and navigate to `http://localhost:3000`.
2. **Register and Login**:
    * Create a new account or log in with existing credentials.
3. **Track Your Expenses**:
    * Add, edit, and delete expenses.
    * View your expense history and summaries.


## **Contributing**

Contributions are welcome! Please follow these steps:



1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.
