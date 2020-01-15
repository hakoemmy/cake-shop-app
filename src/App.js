import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from '../src/components/CakeContainer/CakeContainer';
import Store from './redux/store';
import HooksCakeContainer from '../src/components/HooksCakeContainer/HooksCakeContainer'

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
         <HooksCakeContainer/>
          <CakeContainer/>
          
      </div>
    </Provider>
  );
}

export default App;
