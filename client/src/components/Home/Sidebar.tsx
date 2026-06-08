import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {

    const[isMobileMenuOpen,setIsMobileMenuOpen ]= useState(false)
    
  return (
    <div className='flex h-screen bg-slate-50'>
        {/* Mobile Overlay */}

        {isMobileMenuOpen && <div className='fixed insert-0 bg-slate-300/50 z-40 md:hidden' 
        onClick={()=> setIsMobileMenuOpen(false)}
        />}
         
      <Sidebar isOpen={isMobileMenuOpen} setIsopen={setIsMobileMenuOpen}/>
       

       <div className='flex-1 flex flex-col overflow-hidden'>
         {/* Top Bar */}

         <header>

         </header>
         <main className='flex-1 overflow-auto p-4 sm:p-8 xl:p-12'>

          <Outlet/>
         </main>

       </div>
     
    </div>
  );
}

export default Sidebar;
