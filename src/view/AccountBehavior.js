import React, { Component } from 'react'
import Shares from '../component/Shares'
import Amcharts from "../component/amcharts"
import Charts from "../component/Charts";
export default class Home extends Component {
  render() {
    return (
          <div className="">
              <div className="Middle">
                <div className="mid">
                  <div className="top_content"><span>突发事件地图</span></div>
                  {/* <div className="rect"><Shares /></div> */}
                </div>
                <div className="Middle_box">
                  <div className="top_content"><span>实时数据</span><div></div></div>
                  <div className="list">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div>
                   <div className="top_content"><span>实时数据</span></div>
                   {/* <div className="Charts"><Charts /></div> */}
                </div>
                <div>
                   <div className="top_content"><span>实时数据</span></div>
                   {/* <div className="echarts"><Exharts /></div> */}
                </div>
              </div>
            </div>
    )
  }
}
