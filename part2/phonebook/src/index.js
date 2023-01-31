import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const persons = [
  {
    id: 1,
    name: 'Arto Hellas' 
  },
  {
    id: 2,
    name: 'Finnigan Fox'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App persons={persons}/>)
