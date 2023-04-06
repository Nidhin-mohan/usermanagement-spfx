import  { createContext, useEffect, useState } from 'react';
import * as React from 'react';

// import {data} from '../data/userData';
import { IUser } from '../types';
import { sp } from '../component/spauth';
import "@pnp/sp/webs";
import "@pnp/sp/folders";



// console.log('Existing Users:', ExistingUsers);

type UserContextType = {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
});

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // const [users, setUsers] = useState<User[]>(() => {
  //   const localData = localStorage.getItem('info');
  //   console.log(localData)
  //   return localData ? JSON.parse(localData) : ExistingUsers;
  // });




  const [users, setUsers] = useState<IUser[]>([]);

  // console.log(users)

  // useEffect(() => {
  //   // debugger
  //   // const localData = JSON.parse(localStorage.getItem('info') || "");
  //   // if(localData?.length){
  //   //   setUsers(localData);
  //   // }   else{
  //   //   // localStorage.setItem('info', setUsers(JSON.stringify(data)))
  //   //   console.log(data)

  //   // }
  // }, [])
  
  useEffect(() => {
    (async () => {
      const items: any = await sp.web.lists.getByTitle("UsersList").items();
      // console.log(items)
      const newUsers = items.map((item: any) => ({
        first_name: item.first_name,
        designation: item.designation,
        email: item.email,
        Id: item.Id
      }));
      // console.log(newUsers);
      setUsers(newUsers);

             // gets web's folders
        const webFolders = await sp.web.folders();

        console.log(webFolders)

      {users?.map((user) => {
        return console.log(user.first_name);
      })}
    })();
  }, []);

  // console.log("users",users)
  

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
