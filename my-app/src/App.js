import './App.css';
import { v1 as uuidv1 } from 'uuid';
function App() {
  return <div>{uuidv1()}</div>;
}

export default App;
