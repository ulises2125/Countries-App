import { Route } from 'react-router';
import Home from './components/Home/home';
import LandingPage from './components/LandingPage/Landing';
import DetailCountry from './components/DetailCountry/DetailCountry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path = '/' exact component = {LandingPage}/>
        <Route path = '/countries' exact component = {Home}/>
        <Route path = '/countries/:id' component = {DetailCountry}/>
        {/* <Route path = '/activities' component = {FormActivity} /> */}
      </header>
    </div>
  );
}

export default App;
