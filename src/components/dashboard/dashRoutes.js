import React, { useState } from 'react';
import { } from "antd";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Shopkeeper from './pages/shopkeeper';
import Lender from './pages/lender';
import Supplier from './pages/supplier';


export default function Dashroutes() {



    return (
        <Routes>
            <Route path="/shopkeeper" element={<Shopkeeper />} />
            <Route path="/lender" element={<Lender />} />
            <Route path="/suppliers" element={<Supplier />} />
        </Routes>
    );
}
