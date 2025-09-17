// Layout.jsx
import React from 'react';


import Sidebar from '../../component/Sidebar';
import Header from '../../component/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 bg-gray-100">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
