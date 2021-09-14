import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
      <p>just something really simple - shoudlnt cause any problems!</p>
    {/* <AuthContextProvider>
      <App />
    </AuthContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

