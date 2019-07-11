import React,{ Component } from 'react';

import { Checkbox, Popconfirm, message } from 'antd';




class ItemList extends Component{
  constructor(props) {

    super(props);

    this.myRef = React.createRef();

  }
  onSwitchStatus = (e) => {
    this.props.onSwitchStatus(e.target.createTime)
  }

  onDeleteTask = (e) =>{
    console.log(e);
    this.props.onDeleteTask(this.myRef.current.getAttribute("data-createtime"))
    message.success('删除成功');
  }
  
  cancel(e) {
    message.error('撤销删除');
  }

  render() {
      return (
        <div className="item-list">
          <Checkbox 
            createTime={this.props.task.createTime}
            checked={this.props.task.status==="done"}
            disabled={this.props.task.status==="delete"}
            onChange={this.onSwitchStatus}
          >
            <span>
              {this.props.task.cont}
            </span>
          </Checkbox>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={this.onDeleteTask}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a 
              href="#"
              className="delete-check"
              ref={this.myRef} 
              data-createtime={this.props.task.createTime}
              style={{display:this.props.task.status==="delete"?"none":"inline"}}
            >
              delete
            </a>
          </Popconfirm>
        </div>
      )
  }
}
export default ItemList;