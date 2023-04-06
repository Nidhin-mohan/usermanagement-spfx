import * as React from 'react';
// import styles from './HelloWorld.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { HashRouter } from 'react-router-dom';
import UserContextProvider from './context/userContext';
import App from './app';




export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <UserContextProvider>
  <HashRouter>
  <App />
  </HashRouter>
 

  </UserContextProvider>
      
    );
  }
}
