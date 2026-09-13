import { Outlet } from "react-router";


const DashboardLayout = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;