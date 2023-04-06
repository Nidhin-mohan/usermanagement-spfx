// import React from 'react';
import * as React from 'react';
import styles from '../../HelloWorld.module.scss';

import { Link } from 'react-router-dom';


interface NavbarProps {}

//interface NavbarState {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/" >
          <h1 className={styles.nh1}> User Management</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
