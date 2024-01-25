import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';
import Home from '../Home/Home.jsx';
import AllStudents from '../AllStudents/AllStudents.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
    <>
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
        </div>
        <div>
            <Router>

        {/* NAVIGATION for pages */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/allStudents">All Students</Link>
          </li>
        </ul>




                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/" exact>
                    <StudentForm />
                </Route>
            <Route path="/about">
                <About />
                </Route>
            <Route path="/allStudents">
                <AllStudents />
            </Route>
            <Route path="/allStudents">
                <StudentList />
            </Route>

            </Router>



        </div>
    </>
    );
}

export default App;
