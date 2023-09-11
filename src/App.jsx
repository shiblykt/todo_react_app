import './App.css'
import Users from './users/pages/Users'
import NewLocations from './locations/pages/NewLocations'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


const App = () => {

  return (
  <>
    <Router>
    <Routes>
    <Route path='*' exact element={<Users/>}></Route>
    <Route path='/locations' exact element={<NewLocations/>}/>
    </Routes>
    </Router>

  </>
    
  )
}

export default App
