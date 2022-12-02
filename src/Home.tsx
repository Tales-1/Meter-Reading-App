import { Link } from "react-router-dom"

const Home:React.FC = () => {

    return ( 
        <div className="h-screen flex">
            <div className="m-auto h-3/4 w-3/4 grid grid-rows-[auto auto auto auto] place-items-center">
                <h1 className="text-xl md:text-3xl lg:text-5xl">Welcome to Meter Reader</h1>
                <p className="text-lg md:text-xl lg:text-3xl">Please select the correct option:</p>
                <span className="md:text-xl lg:text-2xl">I am a...</span>
                <div className="flex flex-col md:flex-row w-full justify-evenly items-center gap-12 m-auto">
                    <Link to="/dashboard" className="w-1/2 border-black rounded-lg aspect-square grid max-w-[20rem] shadow-card">
                            <h2 className="m-auto md:text-2xl">Guest</h2>
                    </Link>
                    <Link to="/login" className="w-1/2 border-black rounded-lg aspect-square grid max-w-[20rem] shadow-card">
                            <h2 className="m-auto md:text-2xl">Registered User</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home