import React from 'react';
import './App.css';
import { FullPage } from "./component/fullPage";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FullPage />
      </Provider>
    </div>
  );
}

export default App;
