import './App.css';
import Navbar from './components/nav/Nav';
import Questions1 from './components/profile page/classroom-profile-elements/element1';
import Sidebar from './components/profile page/classroom-profile-elements/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='components'>
        <Sidebar />
        <Questions1 />
      </div>
    </div>
  );
}

export default App;
