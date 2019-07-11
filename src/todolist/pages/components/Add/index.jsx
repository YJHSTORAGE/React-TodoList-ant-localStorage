import React, { Component } from 'react';
import { Input, Button, Layout, Row, Col } from 'antd';

const { Header } = Layout;

class Add extends Component{
   
  constructor(props) {
      super(props);

      this.state= {
        taskCont: '' 
      }
    }

    onAdd = () => {
      if(this.state.taskCont!=='') {
        this.props.onAdd( {
          createTime:new Date().toLocaleTimeString(),
          cont: this.state.taskCont,
          status: 'todo'
         } )
        this.setState( {
          taskCont: ''
        } )
      }
    }

    OnChangeTaskCont= (e) =>{
      this.setState({
        taskCont: e.target.value
      })
    }

    render() {
        return (
          <div className="header-add">
            <Layout>
              <Header>
                <Row>
                  <Col span={12} offset={4}>
                    <Input
                      placeholder="添加代办事项"
                      onChange={this.OnChangeTaskCont}
                      value={this.state.taskCont}
                      onPressEnter={this.onAdd}
                    />
                  </Col>
                  <Col span={4} offset={2}>
                    <Button
                      type="primary"
                      size="large"
                      icon="user-add"
                      onClick={this.onAdd}
                    >新建代办事项</Button>
                  </Col>
                </Row>
              </Header>
            </Layout>          
          </div>
        )
    }
}
export default Add;