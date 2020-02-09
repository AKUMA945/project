import React, { Component } from 'react'
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import RouterView from './router/RouterView';
import router from './router/RouterList';
import 'antd/dist/antd.css';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <RouterView routers={router}/>
          
      </BrowserRouter>
    )
  }
}

