import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from '../src/components/CakeContainer/CakeContainer';
import Store from './redux/store';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
          <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
