import Index from '../view/Index';
import Home from '../view/Home';
import Testing from "../view/Testing"// 监听
import AccountBehavior from "../view/AccountBehavior";// 账号行为
import Group from "../view/Group"; //群组
import GroupCharacteristics from "../view/GroupCharacteristics"; //群组特征
import MonitoringResults from "../view/MonitoringResults"; // 监测结果
import MonitoringAnalysis from "../view/MonitoringAnalysis"; // 监测分析
import MonitoringManagement from "../view/MonitoringManagement";//监测管理
import Telegram from "../view/MonitoringAnalysis/Telegram" //Telegram
import WhatsAPP from "../view/MonitoringAnalysis/WhatsAPP" // WhatsAPP
export default [
  {
    path:"/Index",
    component:  Index,
    children:[
      {
        path:"/Index/home",
        component:Home
      },
      {
        path:"/Index/MonitoringManagement",
        component:MonitoringManagement
      },
      {
        path:"/Index/Testing",
        component:Testing,
        children:[
          {
            path:"/Index/Testing/MonitoringResults",
            component:MonitoringResults,
           
          },
          {
            path:"/Index/Testing/MonitoringAnalysis",
            component:MonitoringAnalysis,
            children:[
              {
                path:"/Index/Testing/MonitoringAnalysis/Telegram",
                component:Telegram
              },
              {
                path:"/Index/Testing/MonitoringAnalysis/WhatsAPP",
                component:WhatsAPP
              },
              {
                path:"/Index/Testing/MonitoringAnalysis",
                redirect:"/Index/Testing/MonitoringAnalysis/Telegram"
              }
            ]
         
          },
          {
            path:"/Index/Testing",
            redirect:"/Index/Testing/MonitoringResults"
          }
        ]
      },
      
      {
        path:"/Index/Group",
        component:Group,
        children:[
          {
            path:"/Index/Group/AccountBehavior",
            component:AccountBehavior
          },
          {
            path:"/Index/Group/GroupCharacteristics",
            component:GroupCharacteristics
          },
        ]
      },
      {
        path:"/Index",
        redirect:"/Index/home"
      }
    ]
  },
  {
    path:"/",
    redirect:"/Index"
  }
]