import React, { Component } from 'react'
import RouterView from "../router/RouterView";
import { Menu, Dropdown, Icon } from 'antd';
import { NavLink } from "react-router-dom";

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);
export default class Group extends Component {
    render() {
        return (
            <div className="box">
                <div className="a_box">
                    <p>账号行为</p>
                    <header className="header-box">
                        <div>
                            <Icon type="home" />
                            <span>埃塞尔比亚坠机</span>
                            <div className="group_box">
                                <div className="Group">
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link" href="#">
                                            全部账号 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className="Group">
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link" href="#">
                                            全部群组 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="left_se">
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link" href="#">
                                        更多 <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </div>
                            <div className="Tes"><NavLink to="/Index/MonitoringManagement">监测管理</NavLink></div>
                        </div>
                    </header>
                </div>
                <div className="add_box">
                    <RouterView routers={this.props.routers} />
                </div>
            </div>
        )
    }
}
