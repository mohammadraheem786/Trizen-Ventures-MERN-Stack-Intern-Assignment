import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
            } 
          />
          <Route 
            path="/register" 
            element={
              isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />
            } 
          />
          
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/tasks" 
            element={
              <PrivateRoute>
                <Layout>
                  <TaskList />
                </Layout>
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/tasks/new" 
            element={
              <PrivateRoute>
                <Layout>
                  <CreateTask />
                </Layout>
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/tasks/:id/edit" 
            element={
              <PrivateRoute>
                <Layout>
                  <EditTask />
                </Layout>
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/" 
            element={
              <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
