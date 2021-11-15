// import './App.css';
import Trainer from './trainer/Trainer'
import ContextProvider from './context/Context'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex col-12 m-auto rounded" style={{ backgroundColor: '#55c5ff'}}>
      <ContextProvider>
        <Trainer/>
      </ContextProvider>

    </div>
  );
}

export default App;
