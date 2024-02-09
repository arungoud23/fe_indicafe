
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routed from './components/Routes/Routed';

// import Layout from './components/Layout/Layout';

function App() {
  const renderApp = () =>{

  return (
    <Routed />
  )
  }
  
  return (
    <div className="App">
      
     {renderApp()}
    </div>
  );
}

export default App;
