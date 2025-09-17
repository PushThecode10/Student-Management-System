import React from "react"; 
import Header from "../component/Header.jsx";
import Sidebar from "../component/Sidebar.jsx";

const Dashboard = () => {
  return (
    <div>  
        <Sidebar /> 
        <Header />
      <div className="ml-65 p-6">
          <div className="flex items-center">
            <div className="">
                <h1>Student</h1>
                <p>23</p>
            </div>
            <div>
                <h1>Teacher</h1>
                <p>23</p>
            </div>
            <div>
                <h1>Courses</h1>
                <p>23</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
