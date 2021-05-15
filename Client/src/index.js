import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counter from './Components/Reduser/Counter'
import Products from './Components/Reduser/Products'
import isLoggedIn from './Components/Reduser/LoggedIn'
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux' 

const allRedusers = combineReducers({
  counter :counter,
  isLogged :isLoggedIn,
  products:Products
})

const store = createStore(allRedusers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
