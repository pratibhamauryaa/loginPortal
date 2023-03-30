import React, { useState } from 'react';
import {Menu} from "antd";
import{SelectOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


export default function Sidemenu() {
    const navigate = useNavigate();
   
    
    return (
        <div className="dashboard-sidemenu" >
           <Menu className="shopkeeper-menu"  style = {{ fontSize:"14px"}} onClick={(item)=>{
            navigate(`/dashboard${item.key}`);

           }} 
           items = {[
            {
                label:"Lender",
                icon:<SelectOutlined />,
                key:"/lender",
                className:"sidemenu-btn",
            },
            {
                label:"Shopkeepers",
                icon:<SelectOutlined />,
                key:"/shopkeeper",
                className:"sidemenu-btn"
            },
            {
                label:"Suppliers",
                icon:<SelectOutlined />,
                key:"/suppliers",
                className:"sidemenu-btn"
            },
            {
                label:"Agent",
                icon:<SelectOutlined />,
                key:"/agent",
                className:"sidemenu-btn"
            },
            {
                label:"Disburstment",
                icon:<SelectOutlined />,
                key:"/disburstment",
                className:"sidemenu-btn"
            },
            {
                label:"Collection",
                icon:<SelectOutlined />,
                key:"/collection",
                className:"sidemenu-btn"
            },
            {
                label:"Reconciliation",
                icon:<SelectOutlined />,
                key:"/reconciliation",
                className:"sidemenu-btn"
            },
            {
                label:"Leads",
                icon:<SelectOutlined />,
                key:"/leads",
                className:"sidemenu-btn"
            },
            {
                label:"Reports",
                icon:<SelectOutlined />,
                key:"/reports",
                className:"sidemenu-btn"
            },
            {
                label:"Insurance",
                icon:<SelectOutlined />,
                key:"/insurance",
                className:"sidemenu-btn"
            },
            {
                label:"Ornaments",
                icon:<SelectOutlined />,
                key:"/ornaments",
                className:"sidemenu-btn"
            },
           ]}></Menu>
        </div>
    );
}
