import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './index.css'

const Logo = () => <h5 className="Logo m-2"><Link to="/"><FontAwesomeIcon icon={faBook} /> Recipes Manager</Link></h5>

export default Logo;
