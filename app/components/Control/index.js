import React, { Component } from 'react'

class Controlled extends Component {
  render() {
    return (<div className="wrapper">
      <input type="checkbox" id="control" value="on" defaultChecked={false} onClick={e => e.preventDefault()} />
      <br />
      <textarea name="description" defaultValue="This is a description." />
      <br />
      <select multiple defaultValue={['B', 'C']}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    </div>)
  }
}

export default Controlled

