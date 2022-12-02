import { Link } from "react-router-dom"

const Calendar:React.FC = () => {

    return (
        <div className="gap-2 row-start-2 col-start-2 col-span-3 mt-12 md:col-start-4 md:col-span-7 md:row-start-1 md:row-span-5 lg:col-start-4 grid place-items-center">
            <h1 className="m-auto md:text-2xl lg:text-3xl md:mb-12">Calendar</h1>
            <ul className="grid md:grid-rows-4 md:grid-cols-3 lg-2:grid-cols-4 lg-2:grid-rows-3 gap-12 w-full">
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">January 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">February 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">March 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">April 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">May 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">June 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">July 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">August 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">September 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">October 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">November 2022</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar/december" className="aspect-square w-4/5 m-auto shadow-card grid place-items-center rounded-lg">
                        <span className="lg:text-lg">December 2022</span>
                    </Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Calendar