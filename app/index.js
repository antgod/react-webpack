'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

let root = document.getElementById('app');


let  renderByType = (type, value ,innerHTML) => {
  const Component = type
  return <Component value={value}>{innerHTML}</Component>
}

let  renderByCopy = (type, props ,children) => {
  const Component = type
  return React.cloneElement(
    <Component />,
    props,
    children,
  )
}

let Container = () => {
  return <div>
    <div>{renderByType('input','renderByType')}</div>
    <div>{renderByType('div',null,'renderByType')}</div>
    <div>{renderByCopy('input',{value:'renderByCopy'})}</div>
    <App />
  </div>
}

ReactDOM.render( <Container />, root );
