import Navigation from "./Navigation"
import { useLocation, Link, Outlet } from "react-router-dom"
import DashboardInfo from "./DashboardInfo"

const Dashboard:React.FC = () => {
    const location = useLocation()
    const { pathname } = location
    return (
        
        <div className="h-screen grid grid-cols-5 grid-rows-6 md:grid-cols-11">
            <Navigation />
            {pathname === "/dashboard" ? <DashboardInfo /> : <Outlet />}
        </div>
    )
}
export default Dashboard