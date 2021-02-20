import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router   } from 'react-router-dom';
import { Provider } from 'react-redux';

//local storage
import { PersistGate } from 'redux-persist/integration/react';
import { store , persistor } from './redux/store';


ReactDOM.render(
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </Provider> 
    ,
  document.getElementById('root')
);


