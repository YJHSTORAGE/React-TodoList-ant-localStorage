import React,{ Component } from 'react';
import { List, Affix  } from 'antd';

import Add from './Add';
import ItemList from './ItemList';
import Filter from './Filter';



class Todo extends Component{

  constructor(props) {

    super(props);

    this.state= {
      task: [],
      showType: 'todo',
  }
}

UNSAFE_componentWillMount() {
  const storage=window.localStorage;
  let task = JSON.parse(storage.getItem("task"))
  this.state.task=task;
  console.log(task);
}

shouldComponentUpdate() {
  const storage=window.localStorage;
  storage.setItem('task',JSON.stringify(this.state.task));
  return true
}

componentDidMount() {
  const storage=window.localStorage;
  storage.setItem('task',JSON.stringify(this.state.task));
}


  onAdd = (newTask) => {
    this.state.task.push(newTask);
    this.setState( {
      task:this.state.task
    } );
  }

  onSwitchStatus = (createTime) => {
    this.state.task.forEach( ( item, index ) => {
      if(item.createTime === createTime){
        this.state.task[index].status=this.state.task[index].status==="todo"?"done":"todo"
      }
    } )
    this.setState( {
      task: this.state.task
    } )
  }

  onSwitchType = (newType) => {
    this.setState({
      showType:newType
    })
    console.log(this.state.showType)
  }

  onDeleteTask = (createTime) => {
    this.state.task.forEach( ( item ,index ) => {
      if(item.createTime === createTime){
        this.state.task[index].status="delete"
      }
    } )
    this.setState( {
      task: this.state.task
    } )
  }

  handleDataSource = () =>{
    const dataSource = this.state.task.filter((item) => {
      return this.state.showType===item.status
    })
    return dataSource
  }

  render() {
    return (
      <div className="todoList">
        <Affix offsetTop="200">
          <Add
            onAdd={this.onAdd}
          />
        </Affix>
        <List
          size="small"
          header={<div>代办事项列表</div>}
          bordered
          dataSource={this.handleDataSource()}
          renderItem={item => <List.Item><ItemList
                                            task={item}
                                            onSwitchStatus={this.onSwitchStatus}
                                            onDeleteTask = {this.onDeleteTask}
                                          />
                              </List.Item>
                      }
        />
        <Filter
          onSwitchType={this.onSwitchType}
          showType ={this.showType}
        />
      </div>
    )
  }
}
export default Todo;