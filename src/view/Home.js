import React, { Component } from 'react'
import Exharts from '../component/exharts'
import Amcharts from "../component/amcharts"
import Charts from "../component/Charts";
export default class Home extends Component {
  render() {
    return (
          <div>
                 <div className="content">
                <ul>
                  <li>
                    <div>
                      <span>1207800</span>
                      <span>全球数据量</span>
                    </div>
                    <div>Tor</div>

                  </li>

                  <li><span>今日数据</span><span>Tor</span></li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <span>1207800</span>
                      <span>全球数据量</span>
                    </div>
                    <div>Tor</div>

                  </li>

                  <li><span>今日数据</span><span>Tor</span></li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <span>1207800</span>
                      <span>全球数据量</span>
                    </div>
                    <div>Tor</div>

                  </li>

                  <li><span>今日数据</span><span>Tor</span></li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <span>1207800</span>
                      <span>全球数据量</span>
                    </div>
                    <div>Tor</div>

                  </li>

                  <li><span>今日数据</span><span>Tor</span></li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <span>1207800</span>
                      <span>全球数据量</span>
                    </div>
                    <div>Tor</div>

                  </li>

                  <li><span>今日数据</span><span>Tor</span></li>
                </ul>
              </div>
              <div className="Middle">
                <div>
                  <div className="top_content"><span>突发事件地图</span></div>
                  <div className="rect"><Amcharts /></div>
                </div>
                <div>
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
                   <div className="Charts"><Charts /></div>
                </div>
                <div>
                   <div className="top_content"><span>实时数据</span></div>
                   <div className="echarts"><Exharts /></div>
                </div>
              </div>
            </div>
    )
  }
}
