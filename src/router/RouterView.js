
import React, { Component } from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
export default class RouterView extends Component {
  render() {
     let {routers} = this.props;

    return (
      <Switch>
          {
            routers.map((item, index)=>item.redirect ? <Redirect key={index} from = {item.path} to = {item.redirect}/> : <Route key = {index} path={item.path} render= {(props)=>{
               return <item.component routers={item.children} {...props}></item.component>
            }}/>)
          }
      </Switch>
    )
  }
}
