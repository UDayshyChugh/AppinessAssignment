import logo from './logo.svg';
import React, { Component, Suspense } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
            <Suspense >
            
         
              <Switch>
              
                
                <Route exact path="/"><Login  /></Route>
                <Route exact path="/dashboard"><Dashboard  /></Route>
               
              </Switch>


            </Suspense>

            {/* <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} /> */}
          </BrowserRouter>
  );
}

export default App;
