import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Home from "./components/Home";
import TaskDetail from "./components/TaskDetails/TaskDetail";
import NewTask from './components/NewTask/NewTask';
import EditTask from './components/EditTask/EditTask';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/task'>
            <Route path=':id' element={<TaskDetail />} />
            <Route path='new' element={<NewTask />} />
            <Route path=':id/edit' element={<EditTask />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
