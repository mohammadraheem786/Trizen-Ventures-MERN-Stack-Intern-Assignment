# Trizen Ventures - MERN Stack Task Management Application

A complete full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript.

## 🚀 Features

### Backend Features
- **JWT Authentication**: Secure user authentication with JSON Web Tokens
- **User Management**: User registration, login, and profile management
- **Task CRUD Operations**: Complete Create, Read, Update, Delete operations for tasks
- **Role-based Access Control**: Admin and user roles with different permissions
- **Input Validation**: Comprehensive validation using express-validator
- **Security**: Helmet for security headers, CORS for cross-origin requests
- **MongoDB Integration**: Using Mongoose ODM for database operations

### Frontend Features
- **Modern React**: Built with React 18 and TypeScript for type safety
- **Authentication Flow**: Login/Register with persistent sessions
- **Task Management**: Create, edit, delete, and filter tasks
- **Dashboard**: Statistics overview with task counts and recent tasks
- **Responsive Design**: Mobile-friendly UI with custom CSS
- **Real-time Updates**: Task status updates and filtering
- **Form Validation**: Client-side validation with error handling

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security middleware
- **cors** - Cross-origin resource sharing
- **morgan** - HTTP request logger

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Custom CSS** - Responsive styling

## 📁 Project Structure

```
.
├── backend/
│   ├── middleware/
│   │   └── auth.js           # Authentication middleware
│   ├── models/
│   │   ├── User.js           # User model
│   │   └── Task.js           # Task model
│   ├── routes/
│   │   ├── auth.js           # Authentication routes
│   │   ├── users.js          # User routes
│   │   └── tasks.js          # Task routes
│   ├── .env.example          # Environment variables example
│   ├── server.js             # Express server setup
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.tsx    # Main layout component
│   │   │   ├── Login.tsx     # Login form
│   │   │   ├── Register.tsx  # Registration form
│   │   │   ├── Dashboard.tsx # Dashboard with stats
│   │   │   ├── TaskList.tsx  # Task listing with filters
│   │   │   ├── CreateTask.tsx # Task creation form
│   │   │   ├── EditTask.tsx  # Task editing form
│   │   │   └── PrivateRoute.tsx # Protected route wrapper
│   │   ├── hooks/
│   │   │   └── useAuth.ts    # Authentication hook
│   │   ├── services/
│   │   │   └── api.ts        # API service layer
│   │   ├── types/
│   │   │   └── index.ts      # TypeScript interfaces
│   │   ├── App.tsx           # Main app component
│   │   └── index.css         # Custom styles
│   └── package.json          # Frontend dependencies
└── README.md                 # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/trizen_ventures
   JWT_SECRET=your_jwt_secret_key_here_make_it_very_secure_in_production
   JWT_EXPIRE=30d
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will start on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file (optional):
   ```bash
   # Create .env in frontend directory
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The frontend application will start on `http://localhost:3000`

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Task Endpoints

#### Get All Tasks
```http
GET /api/tasks?status=pending&priority=high&page=1&limit=10
Authorization: Bearer <token>
```

#### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the MERN stack application",
  "priority": "high",
  "dueDate": "2024-12-31",
  "assignedTo": "user_id",
  "tags": ["urgent", "project"]
}
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "in-progress",
  "priority": "medium"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

### User Endpoints

#### Get All Users (Admin only)
```http
GET /api/users
Authorization: Bearer <token>
```

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer <token>
```

## 🎯 Key Features Implemented

### Authentication & Authorization
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes on both frontend and backend
- Role-based access control (admin/user)

### Task Management
- Create tasks with title, description, priority, due date
- Assign tasks to users
- Update task status (pending, in-progress, completed)
- Filter tasks by status and priority
- Search tasks by title and description
- Pagination for large task lists

### User Interface
- Responsive design for mobile and desktop
- Dashboard with task statistics
- Real-time task updates
- Form validation and error handling
- Loading states and user feedback

### Security & Best Practices
- Input validation and sanitization
- Security headers with Helmet
- CORS configuration
- Environment variable configuration
- Error handling middleware
- Clean code architecture

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Ensure MongoDB connection string is configured
3. Update CORS origins for production domains

### Frontend Deployment (Netlify/Vercel)
1. Build the application: `npm run build`
2. Deploy the `build` folder
3. Configure environment variables for API URL

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Update the connection string in environment variables
3. Configure network access and database users

## 👨‍💻 Development

### Available Scripts

#### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

#### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Adding New Features
1. Backend: Add routes in `routes/`, models in `models/`, middleware in `middleware/`
2. Frontend: Add components in `components/`, services in `services/`, types in `types/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For any questions or feedback, please reach out to the development team.

---

**Built with ❤️ for Trizen Ventures Technical Assignment**