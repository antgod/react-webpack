import React from 'react'

const renderType = (type, props, children) => {
  const Component = type
  return <Component {...props}>{children}</Component>
}

const renderCopy = (type, props, children) => {
  const Component = type
  return React.cloneElement(
    <Component />,
    props,
    children,
  )
}

const Container = () => {
  return (<div className="wrapper">
    <div>{renderType('input', { value: 'renderType', onChange: e => e })}</div>
    <div>{renderType('div', null, 'renderType')}</div>
    <hr/>
    <div>{renderCopy('input', { value: 'renderCopy', onChange: e => e })}</div>
    <div>{renderCopy('div', null, 'renderCopy')}</div>
  </div>)
}

export default Container
