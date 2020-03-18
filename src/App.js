import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.scss';
import MainLayout from './components/layout/MainLayout';
import { combinedReducers, initialState } from "./store/reducers";
import { Store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Store.Provider value={useReducer(combinedReducers, initialState)}>
        <MainLayout />
      </Store.Provider>
    </div>
  );
}

export default App;
