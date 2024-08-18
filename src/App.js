import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';  // This should match the file path and export
// import TextForm from './components/TextForm';
import Practice from './components/Practice';
import Alert from './components/Alert';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [myMode, setMyMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [myColor, setMyColor] = useState("d-none");

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const divs = document.querySelectorAll('.myDiv');
    if (myMode === 'light') {
      setMyMode('dark');
      document.body.style.backgroundColor = '#041f3a';
      showAlert("Dark Mode Activated", "success");
      setMyColor("d-block");
      document.title = "Portfolio - Dark Mode";

      divs.forEach(div => {
        div.style.backgroundColor = '#041f3a'; // or the selected custom color
        div.style.color = 'white';
        div.style.borderColor = 'white';
      });
    } else {
      setMyMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated", "success");
      setMyColor("d-none");
      document.title = 'Portfolio - Light Mode';
    }
    divs.forEach(div => {
      div.style.backgroundColor = 'initial'; // or the selected custom color
      div.style.color = 'initial';
      div.style.borderColor = 'initial';
    });
  };

  const colorChange = (event) => {
    showAlert("Color Changed", "success");

    const selectedColor = event.target.value;
    const divs = document.querySelectorAll('.myDiv');

    divs.forEach(div => {
      div.style.backgroundColor = selectedColor;
      div.style.color = 'white';
      div.style.borderColor = 'white';
    });

    document.body.style.backgroundColor = selectedColor;
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <>    <Navbar
  //     logoName="Hamid"
  //     myMode={myMode}
  //     toggleMode={toggleMode}
  //     myColor={myColor}
  //     colorChange={colorChange}
  //   /><Alert myAlert={alert} />
  //   <Practice Heading="Enter the Text" myMode={myMode} showAlert={showAlert} />
  //   </>
  //   },
  //   {
  //     path: "/textform",
  //     element: <>    <Navbar
  //     logoName="Hamid"
  //     myMode={myMode}
  //     toggleMode={toggleMode}
  //     myColor={myColor}
  //     colorChange={colorChange}
  //   />   <Alert myAlert={alert} /><TextForm myMode={myMode}/></>
  //   }
  // ])


  return (
    <>
     <Navbar
      logoName="Hamid"
      myMode={myMode}
      toggleMode={toggleMode}
      myColor={myColor}
      colorChange={colorChange}
    />
    <Alert myAlert={alert} />
    <Practice Heading="Enter the Text" myMode={myMode} showAlert={showAlert} />

      
      {/* <RouterProvider router={router}/> */}
      
   
    </>
  );
}

export default App;
