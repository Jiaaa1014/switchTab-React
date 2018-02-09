import React from 'react'
import ReactDOM from 'react-dom'
import Theme from './Theme'
import './vendor/bootstrap.css'
import './vendor/index.css'
// it seems that importing .css here can work but index.html doesnt. 
ReactDOM.render(
  <div>
    <Theme />
  </div>,
  document.getElementById('root')
);
