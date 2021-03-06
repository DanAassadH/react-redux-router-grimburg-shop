import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStoreAsync from './app/store';
import './index.css';
import App from './app/App';


// Citation:
// https://stackoverflow.com/questions/37393176/redux-loading-initial-state-asynchronously
//
// The example given in the above link gave me the initial structure and idea for loading
// our json data asyncronously which forced us to delay the creation of our store objects
// which forced the delay of creating our react render hook.
//
configureStoreAsync()
  .then(res => {
    const store = res;

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
