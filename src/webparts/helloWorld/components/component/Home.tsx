import  { useContext, useState } from 'react';
import * as React from 'react';
import styles from '../HelloWorld.module.scss';

import Card from './Card';
import Layout from './Layout/Layout';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../contexts/userContext';
import { IUser } from '../types';
import { UserContext } from '../context/userContext';
// import styles from '../HelloWorld.module.scss';

// import styles from '../index.module.scss'
// interface User extends IUser {}

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  const [query, setQuery] = useState<string>("");

  // console.log(`from home ${users}`)

  const handleClick = () => {
    navigate("/add");
  }

  return (
    <Layout>
      <div>
        <div className={styles.home}>
          <div>
            <input
              className={styles.serchtab}
              type="text"
              placeholder='Search'
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <h1>{users.length}</h1>
          </div>
          <div>
            <button onClick={handleClick} className={styles.homebtn} >Add User</button>
          </div>
        </div>
        <div className={styles.carddisplay}>

      


          
        {users?.filter((user: IUser) =>
  user?.first_name && user.first_name.toLowerCase().includes(query)
)?.map((user: IUser) => <Card user={user} key={user.Id || 0} />)}

        </div>
      </div>
    </Layout>
  )
}

export default Home;
