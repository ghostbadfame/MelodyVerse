import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/SignUp';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import { UserAuthContextProvider } from './context/UserAuthContext'; // Import the UserAuthContextProvider

const App = () => {

  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Route for Home */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
  <Route path="*" element={<Navigate to="/login" />} />
          {/* Default Route (Redirect to Login if no route matches) */}

        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
};

export default App;
