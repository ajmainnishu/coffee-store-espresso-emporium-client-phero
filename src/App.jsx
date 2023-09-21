import { Outlet } from 'react-router-dom';
import './App.css'
import Logo from './shared/Logo';

function App() {
  return (
    <div>
      <Logo></Logo>
      <Outlet></Outlet>
    </div>
  )
}

export default App;