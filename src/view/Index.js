import React, { Component } from 'react'
import RouterView from "../router/RouterView";
import {NavLink} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Input, Dropdown } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const menus = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="##">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);
const arr = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="##">
        English
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="##">
        France
      </a>
    </Menu.Item>
  </Menu>
);


export default class Index extends Component {
  state = {
    collapsed: false,
    width:200
  };

  onCollapse = () => {

    this.setState({ collapsed: !this.state.collapsed });

  };
  render() {
    return (
      <div className="wrap">
           <header className="header">
          <div className="Left"><span style={{ display: this.state.collapsed? "none" :"block"  }}>突发预警系统</span> <div onClick={this.onCollapse}><Icon type="menu" /></div></div>
          <div className="Right">
            <div className="search">
              <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: this.state.width , height : 50 }}
              
              onBlur={()=>{
                this.setState({
                    width:this.state.width-70
                })
              }}
              onFocus={()=>{
                this.setState({
                    width:this.state.width+70
                })
              }}
            /></div>
            <div className="hove">
              <Icon type="bell" />

              <span className="head-example" >6</span>

            </div>
            <div className="hove">
              <span></span>
              <Dropdown overlay={menus} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                  Nick <Icon type="down" />
                </a>
              </Dropdown>
            </div>
            <div  className="hove">
              <Dropdown overlay={arr} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                  中文 <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </div>
        </header>
        <main>
          <Layout style={{ minHeight: '100%' }}>
            <Sider collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']}  mode="vertical">
                <Menu.Item key="1" >
                  <Icon type="home" />
                  <span>  <NavLink to="/Index/home">整体形势</NavLink></span>
                
                  
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="copy" />
                 
                  <span> <NavLink to="/Index/Testing">内容监测</NavLink></span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="bar-chart" />
                      <span>群组监测</span>
                    </span>
                  }
                  
                >
                  <Menu.Item key="3"><NavLink to="/Index/Group/AccountBehavior">账号行为</NavLink></Menu.Item>
                  <Menu.Item key="4"><NavLink to="/Index/Group/GroupCharacteristics">群组特征</NavLink></Menu.Item>
                  
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="read" />
                  <span>File</span>
                </Menu.Item>
                <Menu.Item key="10">
                  <Icon type="global" />
                  <span>File</span>
                </Menu.Item>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="tags" />
                      <span>Team</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>Team</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
               
              </Menu>
              
            </Sider>
            <Layout>
            <RouterView routers={this.props.routers}/>
            </Layout>
          </Layout>
        </main>
        
         
        </div>
    )
  }
}
