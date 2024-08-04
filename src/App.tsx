import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import CSS from './pages/CSS';
import MdEditor from './view/MdEditor';

function App() {
    return (
        <main>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/markdown" element={<MdEditor />} />
                <Route path="/users" element={<Users />} />
                <Route path="/css/*" element={<CSS />} />
            </Routes>
        </main>
    );
}

export default App;
