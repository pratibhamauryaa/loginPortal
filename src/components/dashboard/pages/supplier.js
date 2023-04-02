import React, { useState } from 'react';
import { Tabs, Table } from "antd";

const { TabPane } = Tabs;

const data = [
  {
    key: '1',
    id: '001',
    name: 'John',
    gstno: 'GST001',
  },
  {
    key: '2',
    id: '002',
    name: 'Jane',
    gstno: 'GST002',
  },
  {
    key: '3',
    id: '003',
    name: 'Bob',
    gstno: 'GST003',
  },
];

const columnsconfig = [
  {
    title: "NBFC",
    dataIndex: "nbfc",
    key: "nbfc",
  },
  {
    title: "State Name",
    dataIndex: "state",
    key: "state",
  },
  {
      title: "city Name",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Shopkeeper Name",
      dataIndex: "sname",
      key: "sname",
    },
    {
      title: "Shopkeeper Mobile Number",
      dataIndex: "smobile",
      key: "smobile",
    },
];

const dataconfig = [
  {
    key: "2",
    nbfc: "IIFL",
    state:"Andhrapradesh",
    city:"Gudivada",
    sname:"jose",
    smobile:"9090887876"
  },
];




export default function Supplier() {
  const [gstno, setGstno] = useState('');
  const [summaryData, setSummaryData] = useState([]);
  const [configurationData, setConfigurationData] = useState([]);
  const [invoicesData, setInvoicesData] = useState([]);
  const [shopkeepersData, setShopkeepersData] = useState([]);
  const [businessPerformanceData, setBusinessPerformanceData] = useState([]);
  const [dealersData, setDealersData] = useState([]);

  const handleGstnoClick = (text) => {
    setGstno(text);
    setSummaryData([{ key: '1', nbfc: 'IIFL', state: 'Andhrapradesh', city: 'Gudivada', sname: 'jose', smobile: '9090887876' }]);
    setConfigurationData([]);
    setInvoicesData([]);
    setShopkeepersData([]);
    setBusinessPerformanceData([]);
    setDealersData([]);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'GST No',
      dataIndex: 'gstno',
      key: 'gstno',
      render: (text) => (
        <a onClick={() => handleGstnoClick(text)}> {text} </a>
      ),
    },
  ];
  return (
    <div>
      {gstno ? (
        <Tabs type='card' activeKey={gstno}>
          <Tabs.TabPane tab='Summary' key='1'>
            <Table columns={columnsconfig} dataSource={summaryData} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Configuration' key='2'>
            <Table columns={columnsconfig} dataSource={configurationData} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Invoices' key='3'>
            <Table columns={columnsconfig} dataSource={invoicesData} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Associated Shopkeepers' key='4'>
            <Table columns={columnsconfig} dataSource={shopkeepersData} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Business Performance' key='5'>
            <Table columns={columnsconfig} dataSource={businessPerformanceData} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Dealers with Offered Limit' key='6'>
            <Table columns={columnsconfig} dataSource={dealersData} />
          </Tabs.TabPane>
        </Tabs>
      ) : (
      <Table columns={columns} dataSource={data} onRow={(record) => ({
          onClick: () => handleGstnoClick(record.gstno),
        })}
      />
    )}
  </div>
);
}
