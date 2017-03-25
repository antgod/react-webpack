import React, { Component } from 'react'

class BaseComponent extends Component {
  render() {
    return (<div className="wrapper" {...this.props}>
      HighOrderComponent
    </div>)
  }
}

const wrapper = Comp =>
  class WrappedComponent extends React.Component {
    onClick(e) {
      console.log(e.target.innerHTML)
    }

    render() {
      const { onClick } = this
      const props = {
        onClick,
      }
      return (<div>
        包装组件传入点击事件
        <hr />
        <Comp {...props} />
      </div>)
    }
  }

export default wrapper(BaseComponent)

