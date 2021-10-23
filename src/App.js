import Container from './components/Container'
import './css/main.css'
import { Context } from './components/Context'

function App() {

  return (
    <Context>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container w-50">
          <h1 className="row justify-content-center">Tone-deaf Machine</h1>
          <Container />
        </div>
      </div>
    </Context>
  );
}

export default App;
