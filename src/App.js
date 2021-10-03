import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Homepage from './comonents/Homepage/Homepage.component';
import MoviePreview from './comonents/movie-preview/movie-preview.component';
import Navbar from './comonents/navbar/navbar.component';

function App() {
  return (
    <>
    <Navbar/>
   <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route exact path='/movies/:title' component={MoviePreview}/>
   </Switch>
   </>
  )
}

export default App;
