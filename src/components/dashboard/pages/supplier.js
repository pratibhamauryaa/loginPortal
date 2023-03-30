import React from "react";
import { Tabs, Table } from "antd";

const { TabPane } = Tabs;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
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
  return (
    <Tabs type="card">
      <Tabs.TabPane tab="Summary" key="1">
        <Table columns={columns} dataSource={data} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Configuration" key="2">
        <Table columns={columnsconfig} dataSource={dataconfig} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Invoices" key="3">
        <Table columns={columns} dataSource={data} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Associated Shopkeepers" key="4">
        <Table columns={columns} dataSource={data} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Business Performance" key="5">
        <Table columns={columns} dataSource={data} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Dealers with Offered Limit" key="6">
        <Table columns={columns} dataSource={data} />
      </Tabs.TabPane>
    </Tabs>
  );
}
