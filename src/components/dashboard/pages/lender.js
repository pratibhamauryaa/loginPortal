import React, { useState } from 'react';
import { Table, Input, Select, DatePicker, Button } from 'antd';

const columns = [
  {
    title: 'Lender Type',
    dataIndex: 'ltype',
    key: 'ltype',
  },
  {
    title: 'Lender Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mobile Number',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Total Shopkeepers',
    dataIndex: 'totals',
    key: 'totals',
  },
  {
    title: 'Approved Shopkeeper',
    dataIndex: 'approvedShop',
    key: 'approvedShop',
  },
  {
    title: 'AUM',
    dataIndex: 'aum',
    key: 'aum',
  },
  {
    title: 'Total Amount Disbursed',
    dataIndex: 'tad',
    key: 'tad',
  },
  // {
  //   title: 'Total Amount Collected',
  //   dataIndex: 'tac',
  //   key: 'tac',
  // },
  // {
  //   title: 'Status',
  //   dataIndex: 'status',
  //   key: 'status',
  // },


];

const data = [
  {
    key: '1',
    ltype: 'NBFC',
    city: 'Chitradurga',
    name: 'ABC pvt ltd',
    email: 'johndoe@example.com',
    status: 'active',
    approvedShop: '192',
    totals:'34',
    aum:'$0.00',
    tad:'$0.00',
    tac:'$0.00'
  },
  {
    key: '2',
    ltype: 'BANK',
    city: 'Chitradurga',
    name: 'XYZ pvt ltd',
    email: 'johndoe@example.com',
    status: 'Inactive',
    approvedShop: '192',
    totals:'34',
    aum:'$0.00',
    tad:'$0.00',
    tac:'$0.00'
  },
  {
    ltype: 'BANK',
    city: 'Chitradurga',
    name: 'ABCDEF pvt ltd',
    email: 'johndoe@example.com',
    status: 'active',
    approvedShop: '192',
    totals:'34',
    aum:'$0.00',
    tad:'$0.00',
    tac:'$0.00'
  },
  {
    ltype: 'NBFC',
    city: 'Chitradurga',
    name: 'AAA pvt ltd',
    email: 'johndoe@example.com',
    status: 'active',
    approvedShop: '192',
    totals:'34',
    aum:'$0.00',
    tad:'$0.00',
    tac:'$0.00'
  },
  {
    ltype: 'NBFC',
    city: 'Chitradurga',
    name: 'ASDFG pvt ltd',
    email: 'johndoe@example.com',
    status: 'Inactive',
    approvedShop: '192',
    totals:'34',
    aum:'$0.00',
    tad:'$0.00',
    tac:'$0.00'
  },
];

export default function Lender() {

  return (
    <div>
      <Table columns={columns}  dataSource={data} />
    </div>
  );
}
