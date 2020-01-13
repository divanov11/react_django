import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">

        <div className="center-column">

       
          <div className="item-row">
            <span>Create Django Project</span>
          </div>

          <div className="item-row">
            <span>Create React app: "npx create-react-app appname"</span>
          </div>

          <div className="item-row">
            <span>Drag react app into root directory of django project</span>
          </div>

          <div className="item-row">
            <span>Configure TEMPALTES engine</span>
          </div>

          <div className="item-row">
            <span>Configure URL path</span>
          </div>

          <div className="item-row">
            <span>Configure static files</span>
          </div>

          <div className="item-row">
            <span>cd into react app and run "npm run build"</span>
          </div>

        </div>
     
    </div>
  );
}

export default App;
