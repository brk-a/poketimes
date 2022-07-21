import React, {Component} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component{
  // state = {
  //   [...]
  // }

  render() {
    return(
      <Router>
        <div className='App'>
          {/* <h1 className='center blue-text'></h1> */}
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
