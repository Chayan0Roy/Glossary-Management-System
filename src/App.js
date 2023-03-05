import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header&footer/Header';
import FrontPage from './components/pages/FrontPage';
import CompanyList from './components/pages/CompanyList';
import CompanyProductsList from './components/pages/CompanyProductsList';
import ProductBuyPage from './components/pages/ProductBuyPage';


function App() {

    const getFrontPageData = (getCatagoryID) => {
        setFPData(getCatagoryID);
    }
    const [FPData, setFPData] = useState();
    
    
    const getCompanyListData = (getCompanyID) => {
        setCLData(getCompanyID);
    }
    const [CLData, setCLData] = useState();
    
    return(
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path='/' element={<FrontPage reciveFrontPageData = {getFrontPageData} sendCLValue = {CLData}/>} />
                <Route path='companyList' element={<CompanyList reciveCompanyListData = {getCompanyListData} sendFPValue = {FPData}/>} />
                {/* <Route path='companyProductsList' element={<CompanyProductsList sendValue = {CLData}/>} />
                <Route path='productBuyPage' element={<ProductBuyPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;