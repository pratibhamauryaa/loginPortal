import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import "./dashboard.css"
import { BsBank,BsPeopleFill,BsTruck,BsPersonWorkspace,BsCashCoin,BsPiggyBank,BsFileEarmarkPerson,BsFillFileEarmarkTextFill,BsBagPlus} from "react-icons/bs";
import {FaHandsHelping,FaCoins} from "react-icons/fa";
import Headers from './header';
import Lender from './pages/lender';
import Shopkeeper from './pages/shopkeeper';
import Supplier from './pages/supplier';




const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    label:"Lender",
    icon:<BsBank  style={{fontSize:'26px'}}/>,
    key:"/lender",
    // className:"sidemenu-btn",
},
{
    label:"Shopkeepers",
    icon:<BsPeopleFill style={{fontSize:'26px'}}/>,
    key:"/shopkeeper",
    // className:"sidemenu-btn"
},
{
    label:"Suppliers",
    icon:<BsTruck style={{fontSize:'26px'}}/>,
    key:"/suppliers",
    // className:"sidemenu-btn"
},
{
    label:"Agent",
    icon:<BsPersonWorkspace style={{fontSize:'26px'}} />,
    key:"/agent",
    // className:"sidemenu-btn"
},
{
    label:"Disbursement",
    icon:<BsCashCoin style={{fontSize:'26px'}}/>,
    key:"/disburstment",
    // className:"sidemenu-btn"
},
{
    label:"Collection",
    icon:<BsPiggyBank style={{fontSize:'26px'}}/>,
    key:"/collection",
    // className:"sidemenu-btn"
},
{
    label:"Reconciliation",
    icon:<FaHandsHelping style={{fontSize:'26px'}}/>,
    key:"/reconciliation",
    // className:"sidemenu-btn"
},
{
    label:"Leads",
    icon:<BsFileEarmarkPerson style={{fontSize:'26px'}} />,
    key:"/leads",
    // className:"sidemenu-btn"
},
{
    label:"Reports",
    icon:<BsFillFileEarmarkTextFill style={{fontSize:'26px'}}/>,
    key:"/reports",
    // className:"sidemenu-btn"
},
{
    label:"Insurance",
    icon:<BsBagPlus style={{fontSize:'26px'}} />,
    key:"/insurance",
    // className:"sidemenu-btn"
},
{
    label:"Ornaments",
    icon:<FaCoins  style={{fontSize:'26px'}}/>,
    key:"/ornaments",
    // className:"sidemenu-btn"
},
];

export default function Sidemenu() {
  const [selectedKey, setSelectedKey] = useState('/shopkeeper');
  const handleMenuClick = (key) =>{
    setCollapsed(!collapsed)
    setSelectedKey(key);
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider width={270} trigger={null} collapsible collapsed={collapsed} style={{ borderRight: " 1px solid rgb(201, 200, 200)" }}>
        {/* <div className="logo"  /> */}
        {collapsed ? <div className="logo" style={{ backgroundSize: '0px' }} >
          <MenuUnfoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)} />
        </div>
          :
          <div className="logo">
            <MenuFoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)} />
          </div>
        }
        <Menu theme="light" mode="inline" selectedKeys={[selectedKey]} defaultSelectedKeys={['/shopkeeper']} style={{fontSize:"15px"}}>
          {menuItems.map((item) => (
            <Menu.Item style={{marginBottom:'10px'}} key={item.key} icon={item.icon}  onClick={() => handleMenuClick(item.key)} >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className='nav-dashboard' style={{ padding: 0, background: colorBgContainer}}>
          <div>
          <Headers/>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        {selectedKey === '/shopkeeper' && <Shopkeeper />}
        {selectedKey === '/lender' && <Lender />}
        {selectedKey === '/suppliers' && <Supplier />}
        </Content>
      </Layout>
    </Layout>
  );
};


