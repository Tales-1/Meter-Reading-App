import { Link } from "react-router-dom"

const Navigation:React.FC = () => {

    return ( 
        <aside className="bg-slate-600 flex col-start-1 col-span-full md:col-span-2 md:row-span-6 md:max-w-[10rem]">
            <nav className="w-3/4 m-auto flex flex-col items-center h-full">
                <h3 className="mr-auto mt-12 text-white text-lg">Meter Reader</h3>
                <ul className="flex md:flex-col gap-12 text-white h-full">
                    <li className="mt-auto"><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/calendar">Calendar</Link></li>
                    <li className="mb-auto">Account Settings</li>
                    <li className="mb-12">Log out</li>
                </ul>
            </nav>
        </aside>

    )
}

export default Navigation