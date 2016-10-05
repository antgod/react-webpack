import React, { Component } from 'react';


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
  </div>
}


export default Container;
