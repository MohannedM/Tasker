import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainNavbarProps } from './types';

const MainNavbar: React.FC<MainNavbarProps> = ({isLoggedIn}) => (
  <nav className="navbar navbar-light bg-light static-top">
    <div className="container">
      <Link to="/" className="text-secondary font-weight-bold navbar-brand"> <FontAwesomeIcon icon={faCheckCircle} /> TASKER </Link>
    {!isLoggedIn && <Nav className="ml-auto">
       <Link to="/register" className="text-secondary nav-link">
        Register
        </Link>
        <Link to="/login" className="text-secondary nav-link">
        Login
        </Link>
      </Nav> }
      {isLoggedIn && <Nav className="ml-auto">
       <Link to="/add-task" className="text-secondary nav-link">
        Add Task
        </Link>
        <Link to="/logout" className="text-secondary nav-link">
        Logout
        </Link>
      </Nav> }
    </div>
  </nav>
)


export default MainNavbar