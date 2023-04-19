import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MenuBar from '../development/MenuBar';
import Payment from '../development/Payment';
import StockWave from '../development/StockWave';

function DevelopPage() {
    return(
        <div>
            <div>
                <MenuBar/>
            </div>
            <Routes>
                <Route exact path="/" element={<Payment />} />
                <Route path="/stockWave" element={<StockWave />} />
            </Routes>  
       </div>
    )
}

export default DevelopPage