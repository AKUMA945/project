import React, { Component } from 'react'
import { Table } from 'antd';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
 
    {
      title: 'Address',
    
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
export default class MonitoringManagement extends Component {

    render() {
        return (
            <div>
                {/* 监测结果 */}
                <Table columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
}