import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button style={{ background: this.context.color }}>
        {this.props.children}
      </button>
    )
  }
}

Button.contextTypes = {
  color: React.PropTypes.string,
}

class Message extends Component {
  render() {
    return (
      <div>
        {this.props.text}<Button>Delete</Button>
      </div>
    )
  }
}

class MessageList extends Component {
  getChildContext() {
    return { color: 'pink' }
  }

  render() {
    const children = [{ text: 'test' }].map((message, index) =>
      <Message text={message.text} key={index} />
    )
    return (<div className="wrapper">
      color:pink存在父节点的context对象，子节点通过this.context.color即可获得
      {children}
    </div>)
  }
}

MessageList.childContextTypes = {
  color: React.PropTypes.string,
}

export default MessageList
