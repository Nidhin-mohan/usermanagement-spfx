import  { useContext, useState } from 'react';
import * as React from 'react';
import styles from '../HelloWorld.module.scss';


// import { UserContext } from '../contexts/userContext';
import Layout from './Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { sp } from './spauth';

interface AddUserProps {}

export const AddUser: React.FC<AddUserProps> = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [designation, setDesignation] = useState<string>('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newUser = {
      first_name: name,
      email: email,
      designation: designation,
    };

    const add= async() => {
        const resp = await sp.web.lists.getByTitle('UsersList').items.add(newUser);
        console.log(resp.data.Id)
         const folderName = resp.data.Id
      //adding new folder
      const documentLibraryName = "UserImage";
      const newFolderName =  `${folderName}`;
      const documentLibrary = sp.web.lists.getByTitle(documentLibraryName);
      documentLibrary.rootFolder.folders.addUsingPath(newFolderName)
     .then(() => {
      console.log(`Folder '${newFolderName}' created successfully.`);
     })
     .catch((error) => {
      console.error(`Error creating folder: ${error}`);
     });
     
    }

    
  
    
    add()
       // Upload the selected file to the "userimage" document library
     



    setUsers([...users, newUser]);

   
    navigate('/');
  };

  return (
    <Layout>
      <div className={styles.adduser}>
        <div className={styles.addimage}>
          <div className={styles.image}></div>
          <h1> {name} </h1>
        </div>
        <div className={styles.adddetails}>
          <form>
            <div className=''>
              <input
                type='text'
                name='name'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type='text'
                name='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type='text'
                name='designation'
                placeholder='Enter Designaton '
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <input
                type='file'
                name='userimage'
                ref={fileInputRef}
              />

              
              <br />
              <button className={styles.addbtn} onClick={handleClick} type='submit' value='Submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
