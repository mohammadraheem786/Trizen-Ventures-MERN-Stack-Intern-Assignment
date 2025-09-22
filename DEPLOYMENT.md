# Trizen Ventures - MERN Stack Deployment Guide

## Quick Deployment Options

### Option 1: Deploy to Railway/Heroku (Backend) + Netlify (Frontend)

#### Backend Deployment (Railway - Recommended)
1. Fork/Clone this repository
2. Connect Railway to your GitHub repository
3. Deploy the backend folder
4. Add environment variables:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `JWT_SECRET` - A secure random string
   - `NODE_ENV` - production
   - `PORT` - (Railway will auto-assign)

#### Frontend Deployment (Netlify)
1. Build command: `npm run build`
2. Publish directory: `build`
3. Add environment variable:
   - `REACT_APP_API_URL` - Your backend URL

### Option 2: All-in-One Deployment

#### Using Docker (Optional)
```dockerfile
# Backend Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Environment Variables

#### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/trizen_ventures
JWT_SECRET=your_super_secure_jwt_secret_here_min_32_chars
JWT_EXPIRE=30d
```

#### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.railway.app/api
```

### MongoDB Atlas Setup
1. Create a free cluster at https://cloud.mongodb.com
2. Create a database user
3. Add your IP to the whitelist (or use 0.0.0.0/0 for all IPs in production)
4. Get the connection string

### Production Checklist
- [ ] MongoDB Atlas cluster created and configured
- [ ] Environment variables set on hosting platforms
- [ ] CORS origins updated for production domains
- [ ] JWT secret is secure (32+ characters)
- [ ] Database connection tested
- [ ] API endpoints tested
- [ ] Frontend build tested locally

### Quick Start Commands
```bash
# Install all dependencies
npm run install-all

# Start development (both frontend and backend)
npm run dev

# Build for production
npm run build
```

### Default Admin User
After deployment, you can create an admin user by:
1. Registering normally through the frontend
2. Manually updating the user role in MongoDB to 'admin'
3. Or modifying the registration endpoint temporarily to create admin users

The application is now ready for production use!