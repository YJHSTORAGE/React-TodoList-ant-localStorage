import React,{ Component } from 'react';
import { Menu } from 'antd';

class Filter extends Component{

  constructor(props) {
    super(props);


  }

  onSwitchType = (e) =>{
    this.props.onSwitchType(e.target.getAttribute("data-showtype"))
  }

  render() {
    return (
      <div className="todo-list" onClick={this.onSwitchType}>
        <a className="type" href="#" data-showtype="todo">正在进行</a>
        <a className="type" href="#" data-showtype="done">已经完成</a>
        <a className="type" href="#" data-showtype="delete">已经删除</a>
      </div>
    )
  }
}
export default Filter;