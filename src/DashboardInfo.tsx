import { Link } from "react-router-dom"

const DashboardInfo:React.FC = () => {
    
    return (
        <>
            <div className="row-start-2 row-span-2 col-start-2 col-span-3 md:col-start-6 md:col-span-4 lg:col-start-5 md:row-start-1 md:mt-16 
                flex flex-col gap-12 w-11/12 m-auto">
                <h1 className="text-2xl m-auto md:text-3xl lg:text-4xl">
                    Welcome User.
                 </h1>
                 <h2 className="m-auto text-lg underline">
                        View this month's readings
                 </h2>
            </div>
            <div className="flex gap-6 row-start-4 col-start-2 col-span-3 md:row-start-3 md:row-span-2 md:col-start-4 md:col-span-6 lg-col-start-4 justify-center">
                <Link to="/dashboard/calendar/december" className="aspect-square w-full max-w-[25rem] shadow-card grid place-items-center rounded-lg">
                    <span className="lg:text-2xl">December 2022</span>
                </Link>
                <div className="flex flex-col gap-12 m-auto w-1/3">
                    <p>Daily Usages:</p>
                    <ul>
                        <li>Gas: </li>
                        <li>Electric - day: </li>
                        <li>Electric - night: </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default DashboardInfo