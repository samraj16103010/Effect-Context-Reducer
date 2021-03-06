import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../context/auth-context';

const Navigation = () => {
   
     const cntx = useContext(AuthContext);
    
      return (
        <nav className={classes.nav}>
      <ul>
        {cntx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cntx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cntx.isLoggedIn && (
          <li>
            <button onClick={cntx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
      )
    
};

export default Navigation;
