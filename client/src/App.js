import './App.css';
import { Home, Detail, Landing, Form } from './views';
import { Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation();
  

  return (
    <div className="App">
      {location.pathname!=='/' && <NavBar />}
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/detail' component={Detail}/>
      <Route exact path='/form' component={Form}/>
    </div>
  );
}

export default App;
