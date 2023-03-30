import React, { useState } from 'react';
import { Table, Input, Select, DatePicker, Button } from 'antd';


const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'NBFC',
    dataIndex: 'nbfc',
    key: 'nbfc',
  },
  {
    title: 'Sales Executive',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: 'Active',
        value: 'active',
      },
      {
        text: 'Inactive',
        value: 'inactive',
      },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: 'Approved Date',
    dataIndex: 'approvedDate',
    key: 'approvedDate',
    render: (approvedDate) => {
      return approvedDate && approvedDate.toLocaleDateString();
    },
  },
  {
    title: 'Business Name',
    dataIndex: 'bname',
    key: 'bname',
  },
  {
    title: 'Shopkeeper Name',
    dataIndex: 'sname',
    key: 'sname',
  },
  {
    title: 'Sales Executive',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobite',
    key: 'mobile',
  },
  {
    title: 'Unique Id',
    dataIndex: 'uid',
    key: 'uid',
  },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
  },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
  },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
  },

];

const data = [
  {
    key: '1',
    nbfc: 'IIFL',
    city: 'Chitradurga',
    name: 'John Doe',
    email: 'johndoe@example.com',
    status: 'active',
    approvedDate: new Date('2022-03-29T12:00:00Z'),
  },
  {
    key: '2',
    nbfc: 'IIFL',
    city: 'Delhi',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    status: 'inactive',
    approvedDate: new Date('2022-03-29T12:00:00Z'),
  },
  {
    key: '3',
    nbfc: 'IIFL',
    city: 'Hyderabad',
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    status: 'active',
    approvedDate: new Date('2022-03-29T12:00:00Z'),
  },
  {
    key: '4',
    nbfc: 'IIFL',
    city: 'Banglore',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    status: 'inactive',
    approvedDate: new Date('2022-03-29T12:00:00Z'),
  },
  {
    key: '5',
    nbfc: 'IIFL',
    city: 'Mumbai',
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    status: 'active',
    approvedDate: new Date('2022-03-29T12:00:00Z'),
  },
];

export default function Shopkeeper() {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [dateRangeFilter, setDateRangeFilter] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  if(statusFilter == "all"){
    setStatusFilter(null);
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
  };

  const handleDateRangeFilter = (value) => {
    setDateRangeFilter(value);
  };

  const filteredData = data.filter((record) => {
    // Filter by search text
    if (searchText && !record.name.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }

    // Filter by status
    if (statusFilter && record.status !== statusFilter ) {
      return false;
    }

    // Filter by date range
    if (!selectedDate) {
      return true;
    }
    const itemDate = new Date(record.approvedDate);
    itemDate.setHours(0, 0, 0, 0);
    const selectedDateCopy = new Date(selectedDate);
    selectedDateCopy.setHours(0, 0, 0, 0);
    return itemDate.getTime() === selectedDateCopy.getTime();

  });

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Input.Search placeholder="Search" onChange={handleSearch} style={{ marginRight: 16, width:250 }} />
        <Select defaultValue="all" style={{ marginRight: 16 }} onChange={handleStatusFilter}>
          <Option value="all">All Status</Option>
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
        <DatePicker
          onChange={(date) => setSelectedDate(date)}
          placeholder="Select approved date"
          style={{ marginRight: 8 }}
        />

        <Button onClick={() => setSelectedDate(null)}>Reset Filter</Button>
      </div>
      <Table columns={columns} dataSource={filteredData} style={{display:"flex"}}/>
    </div>
  );
}
