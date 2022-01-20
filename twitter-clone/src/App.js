import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Home } from './Components/Home'
function App() {
  return (
   <BrowserRouter>
 <div className=".app">
  
     <Home/>
       {/* <Route path="/" exact>Home</Route>
       <Route path="/explore">Explore</Route>
       <Route path="/notifications ">Notifications</Route>
       <Route path="/messages">Messages</Route>
       <Route path="/bookmarks">Bookmarks</Route>
       <Route path="/lists">Lists</Route>
       <Route path="/profile">Profile</Route>
   */}
    </div>

   </BrowserRouter>
  );
}

export default App;
