import Home from './Home'
import { Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard'
import Calendar from './Calendar'
import Month from './Month'

const App:React.FC = () => {

  return (
    <div className="h-fit w-screen">
      <Routes>
        <Route path="/">
          <Route index element ={<Home/>} />
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='calendar'>
              <Route index element={<Calendar />} />
              <Route path=':month' element={<Month />} />
            </Route>
            <Route />
            <Route />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
