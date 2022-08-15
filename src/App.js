import './App.css';
import FirstProject from './projects/firstProject';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <Link className='nav__link' to="/">Home</Link>
          <Link className='nav__link' to="/firstProject">firstTask</Link>
        </nav>
      </header>
      <main className='main'>
        <Routes>
          <Route path="/" element={''} />
          <Route path="/firstProject" element={<FirstProject />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
