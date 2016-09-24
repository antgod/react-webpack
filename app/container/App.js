import React, { Component } from 'react';
import Button from '../components/Button/Button';

import 'bootstrap/dist/css/bootstrap.css';
import './App.less';

class App extends Component {
  render(){
    return (
      <div className="app text-center">
        <div className="tip"></div>
        {/* 这里我们使用以下图标字体 */}
        <spfan className="glyphicon glyphicon-asterisk icon-pos"></spfan>
        <Button />
      </div>
    );
  }
}

export default App;
