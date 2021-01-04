import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
//const template = <h1>@babel/preset-env Rules!</h1>

const App = ()=> {
  return <h1>React app setup with Babel, Webpack Serve & Sass!
  </h1>
}

ReactDOM.render(<App />, document.getElementById('root'))