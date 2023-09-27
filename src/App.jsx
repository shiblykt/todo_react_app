import Users from './users/pages/Users'
import NewLocations from './locations/pages/NewLocations'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import './App.css'


const App = () => {

  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path='*' element={<Users/>}></Route>
        <Route path='/locations' exact element={<NewLocations/>}/>
      </Routes>
    </Router>
  )
}

export default App
