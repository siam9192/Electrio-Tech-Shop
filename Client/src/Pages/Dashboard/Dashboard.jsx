import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import ResponsiveDashboardSidebar from './ResponsiveDashboardSidebar';

const Dashboard = () => {
    

    return (
       <>
       <Navbar></Navbar>
       <div className='   bg-[#f0faf4] min-h-[100vh] py-5 lg:px-0 px-2'>
        <div  className=' lg:hidden block'>
            <ResponsiveDashboardSidebar></ResponsiveDashboardSidebar>
        </div>
      <h1 className=' text-black text-3xl font-medium p-5'>My Account</h1>
       <div className='flex  relative'>
       <div className=' w-[30%] sticky top-0 lg:block hidden'>
  <DashboardSidebar></DashboardSidebar>
        </div>
  <div className='w-full max-h-[100vh] overflow-y-auto  '>
    <Outlet></Outlet>
    </div>           
        </div> 
        </div>
       </>
    );
}

export default Dashboard;
