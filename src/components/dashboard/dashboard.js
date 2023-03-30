import React, { useState } from 'react';
import {Space} from "antd";
import Header from "./header";
import Sidemenu from "./sideMenu";
import Pagecontent from "./pageContent";
import './dashboard.css';


export default function Dashboard() {
   
    
    return (
        <div className="dashboard-container">
            <Header />
            <Space>
            <Sidemenu />
            <Pagecontent />
            </Space>
            
        </div>
       
    );
}
