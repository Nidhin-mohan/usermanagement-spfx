import * as React from 'react';
import styles from '../HelloWorld.module.scss';
import { IUser } from '../types';
import { sp } from './spauth';

interface Props {
  user: IUser;
}

const Card: React.FC<Props> = ({ user }) => {

  const handleDelete = async (id: string) => {
    console.log(id);
    const itemId = Number(id);
    try {
      await sp.web.lists.getByTitle('UsersList').items.getById(itemId).delete();
      console.log(`Item with ID ${id} has been deleted from UsersList`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  const handleUpdate = async (id: string) => {
    const itemId = Number(id);
    const fields = {
      first_name: '',
      email: '',
      designation: '',
    };
    fields.first_name = prompt('Enter first name') || '';
    fields.email = prompt('Enter email') || '';
    fields.designation = prompt('Enter designation') || '';
    try {
      await sp.web.lists.getByTitle('UsersList').items.getById(itemId).update(fields);
      console.log(`Item with ID ${id} has been updated in UsersList`);
      // onUpdate({ ...user, ...fields });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className={styles.card} id={user.Id.toString()}>
      <div className={styles.image}></div>
      <h1>{user.first_name}</h1>
      <h2>{user.email}</h2>
      <h2>{user.designation}</h2>
      <button className={styles.btn} onClick={() => handleDelete(user.Id)}>delete</button>
      <button className={styles.updatebtn} onClick={() => handleUpdate(user.Id)}>update</button>




    </div>
  );
};

export default Card;
