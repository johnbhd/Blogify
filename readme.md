# Blogify

Blogify is a full-stack blog application built using the MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Vite, and JWT authentication. It allows users to create, read, update, and delete blog posts while providing secure user authentication.

## Features

* **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
* **CRUD Operations**: Create, read, update, and delete blog posts.
* **Responsive Design**: Built with Tailwind CSS for a modern and mobile-friendly interface.
* **Fast Development**: Uses Vite for faster builds and an optimized development environment.
* **Database**: MongoDB for storing user data and blog posts.

## Technologies Used

* **MongoDB**: NoSQL database for storing user and blog data.
* **Express**: Web framework for Node.js for building the backend API.
* **React**: Front-end library for building user interfaces.
* **Node.js**: JavaScript runtime for building the backend.
* **JWT**: JSON Web Tokens for secure authentication.
* **Tailwind CSS**: Utility-first CSS framework for styling.
* **Vite**: Fast build tool for a smooth development experience.

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blogify.git
   cd blogify
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add the following environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the frontend development server:

   ```bash
   npm run dev
   ```
4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

* **Registration**: Users can create an account by providing an email and password.
* **Login**: Users can log in using their email and password to receive a JWT token for authentication.
* **Create Blog Post**: After logging in, users can create new blog posts.
* **Edit Blog Post**: Users can update their existing blog posts.
* **Delete Blog Post**: Users can delete their blog posts.
* **Logout**: Users can log out by removing their JWT token.

## API Endpoints

* `POST /api/auth/register` - Register a new user.
* `POST /api/auth/login` - Login with credentials and receive a JWT token.
* `GET /api/posts` - Get all blog posts.
* `GET /api/posts/:id` - Get a single blog post by ID.
* `POST /api/posts` - Create a new blog post (authentication required).
* `PUT /api/posts/:id` - Update an existing blog post by ID (authentication required).
* `DELETE /api/posts/:id` - Delete a blog post by ID (authentication required).

## Deployment

You can deploy the app to a platform like Heroku, Vercel, or Netlify. Make sure to configure environment variables like `MONGO_URI` and `JWT_SECRET` in the respective hosting dashboards.
