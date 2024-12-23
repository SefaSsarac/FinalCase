
# E-Commerce Application - Monolithic with Microservices Integration

### Project Overview
This project aims to develop a scalable e-commerce application utilizing both monolithic and microservices architectures. The backend of the application is built with Node.js and Express.js, serving as the core monolithic structure. Several functionalities, including payment and billing systems, are decoupled and implemented as independent microservices. The application is integrated with a NoSQL database (MongoDB), and Redis is employed for caching purposes to enhance performance. Kafka is utilized for messaging between the microservices, ensuring asynchronous communication. Additionally, Docker is leveraged for containerization, facilitating deployment and scalability.

### Key Features:
Monolithic Structure: Core application built with Node.js and Express.js for managing product and user-related operations.
Microservices: Payment and billing functionalities are implemented as independent microservices, which interact through Kafka messaging.
Database & Caching: MongoDB for storing user and product data, Redis for caching frequently accessed data.
Dockerized Architecture: Both the monolithic app and microservices are containerized using Docker and Docker Compose.
Real-time Notifications: WebSocket integration for providing real-time updates (optional feature).
Security: The application uses JWT (JSON Web Tokens) for secure authentication and authorization.


### Technologies Used

### Backend:

Node.js
Express.js
MongoDB (NoSQL Database)
Redis (Caching)
Kafka (Message Broker)
Docker & Docker Compose
WebSocket (Real-Time Notifications - Optional)
JWT (JSON Web Tokens for Authentication)

 ### Frontend:

React.js
React Router (Page Navigation)
Axios (API Calls)
useState & useEffect (State Management & Lifecycle Hooks)
Getting Started
Prerequisites
Before getting started, ensure you have the following tools installed on your machine:

Node.js (Latest LTS version)
MongoDB (Local or remote database setup)
Redis (For caching purposes)
Docker & Docker Compose (For containerization)
Kafka (For message brokering between microservices)
Git (For version control)
Postman (Optional, for API testing)
### Clone the Repository
Begin by cloning the repository to your local machine:

git clone https://github.com/your-username/e-commerce-app.git
cd e-commerce-app

### Backend Setup
Install Backend Dependencies: Navigate to the backend directory and install the necessary dependencies:

cd backend
npm install
Run MongoDB & Redis: Ensure your MongoDB and Redis servers are running locally or configure them for remote access.

### Docker Setup (Optional but Recommended): 

Use Docker to containerize the application. If you have Docker installed, you can use Docker Compose to bring up the application.

docker-compose up --build
This command will build and start the containers for both the monolithic backend and microservices.

### Running the Backend Locally:

If you prefer to run the backend without Docker, you can use the following command:

npm start
This will start the Node.js application on the default port (e.g., http://localhost:3000).

### Frontend Setup
Install Frontend Dependencies: Navigate to the frontend directory and install the required dependencies:

cd frontend
npm install

### Run the Frontend Locally: 
To start the frontend React application:

npm start
This will launch the React application in the browser (typically at http://localhost:3001).

API Endpoints
The API is built around several key endpoints for handling user registration, login, product management, and more. Some example endpoints include:

### User Management:

POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user and receive a JWT
GET /api/user/profile - Fetch user profile (requires JWT)
Product Management:

GET /api/products - List all products
POST /api/products - Add a new product (Admin only)
PUT /api/products/:id - Update a product (Admin only)
DELETE /api/products/:id - Delete a product (Admin only)
Order & Payment:

POST /api/orders - Create a new order
POST /api/payment - Process payment (Microservice)
Billing:

GET /api/billing/invoice - Fetch invoices after payment completion (Microservice)
Testing
API testing can be performed using Postman. Import the provided Postman collection (available in the repository) to test all the endpoints for user, product, and order management.

### Security
The application utilizes JWT for user authentication. When making requests to protected endpoints, include the JWT token in the Authorization header:

### Authorization: Bearer <your-jwt-token>
### Optional Features
Real-time Notifications: The application supports real-time notifications using WebSockets. When a payment is completed, a WebSocket message is sent to notify the user.
Elasticsearch Integration: For advanced product search and filtering, Elasticsearch can be integrated to enhance search performance and functionality. 
