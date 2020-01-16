import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from '../src/components/CakeContainer/CakeContainer';
import Store from './redux/store';
import HooksCakeContainer from '../src/components/HooksCakeContainer/HooksCakeContainer'
import IceCreamContainer from '../src/components/IceCreamContainer/IceCreamContainer'
import NewCakeContainer from '../src/components/NewCakeContainer/NewCakleContainer';
import ItemContainer from '../src/components/ItemContainer/ItemContainer';
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
         {/* <HooksCakeContainer/> */}
         <ItemContainer cake/>
         <ItemContainer/>
          <CakeContainer/>
          <IceCreamContainer />
          <NewCakeContainer/>
          
      </div>
    </Provider>
  );
}

export default App;
