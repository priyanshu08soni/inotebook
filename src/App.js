
import './App.css';
import{BrowserRouter as Router,Route,Switch}from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
      <NoteState>       
        <Router>
          <Navbar/>
          <Alert message="This is a amazing course" />
            <div className="container">
              <Switch>
                <Route key={"home"} exact path="/" ><Home/></Route>
                <Route key={"about"} exact path="/about" ><About/></Route>
                <Route key={"login"} exact path="/login" ><Login/></Route>
                <Route key={"signup"} exact path="/signup" ><SignUp/></Route>
              </Switch>
            </div>
        </Router>
      </NoteState>
      </>
  );
}

export default App;
