//import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import './index.css';


function App() {
  return (
 <>
  <div className="container">
        <div className="row mt-3">
            <div className="col">
                <h2>Listado de datos</h2>
                <div className="my-3">
                    <table className="table" id="lista-usuarios">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Telefono</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    
 </>
  );
}

export default App;


/*   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/