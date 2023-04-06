import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"
import { UserProvider } from "./UserContext";
import { DateProvider } from './DateContext';

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } = process.env; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Auth0Provider
      // domain="dev-vveth7rxkscnryht.us.auth0.com"
      // clientId="6qCPTQ5TQsHEF7r2TXlENao66qrzxIqX"
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{redirect_uri: window.location.origin+"/homepage"}}>
        <DateProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </DateProvider>
      </Auth0Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
