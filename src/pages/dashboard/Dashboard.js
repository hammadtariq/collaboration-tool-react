import React, { Component } from "react";
import { Layout, Menu, Icon, Input } from 'antd';
import { Route } from 'react-router-dom';
import Home from '../home/Home';
import Apps from '../apps/Apps';
import Settings from '../settings/Settings';

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  state = {};

    handleClick = (e) => {
        console.log('click ', e);
        const url = e.key !== 'home' ? '/' + e.key : '';
        this.props.history.push(`/dashboard${url}`)
    };

    render() {
    return <Layout style={{ height: '100vh' }}>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
            <div className="logo" />
            <Menu onClick={this.handleClick} theme="dark" mode="inline" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">
                    <Icon type="user" />
                    <span className="nav-text">Home</span>
                </Menu.Item>
                <Menu.Item key="apps">
                    <Icon type="video-camera" />
                    <span className="nav-text">Apps</span>
                </Menu.Item>
                <Menu.Item key="settings">
                    <Icon type="upload" />
                    <span className="nav-text">Settings</span>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Input.Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Route exact path={`/dashboard/`} component={Home}/>
                    <Route exact path={`/dashboard/apps`} component={Apps}/>
                    <Route exact path={`/dashboard/settings`} component={Settings}/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    </Layout>;
  }
}

export default Dashboard;
