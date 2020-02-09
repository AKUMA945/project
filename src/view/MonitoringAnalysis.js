import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import RouterView from "../router/RouterView";
export default class MonitoringAnalysis extends Component {

    render() {
        return (
            <>
                <div className="emotion">
                    <div className="increment">
                        <p><span>情绪增量</span></p>
                    </div>
                    <div className="trend">
                        <p><span>情绪趋势</span></p>
                    </div>
                </div>
                <div className="MainPoints">
                    <div className="p">
                        <span>主要观点</span>
                        <div>
                            <NavLink to="/Index/Testing/MonitoringAnalysis/Telegram">Telegram</NavLink>
                            <NavLink to="/Index/Testing/MonitoringAnalysis/WhatsAPP">WhatsAPP</NavLink>
                        </div>

                    </div>
                    <div className="List_content">
                        <RouterView routers={this.props.routers} />
                    </div>
                </div>
            </>
        )
    }
}
