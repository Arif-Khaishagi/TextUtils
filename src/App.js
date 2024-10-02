import NavBar from "./Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TextForm from "./TextForm";
import React, { useState } from "react";
import AlertDis from "./Alert";
import About from "./About";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
document.body.classList.add('bg-'+cls);
  }
  
  // const [hide, setHide] = useState(true);

  const darkmode = () => {
    removeBodyClasses();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enable", "success");
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          darkmode ={darkmode}
        />
        <AlertDis alert={alert} />
        <div className="container my-3">
        
          <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>}>
              {/* <About /> */}
            </Route>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter your text to Analyze"
                mode={mode}
              />}>
            </Route>
          </Routes>
        </div>
        </Router>

        {/* <h3>Press any toggle or color pallete</h3> */}
    </>
  );
}

export default App;
