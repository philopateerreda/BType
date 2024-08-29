import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/navbar.jsx';
import Home from './pages/home/home.component.jsx';
import Battle from './pages/battle/battle';
import Shop from './pages/shop/shop.component';
import Achievements from './pages/achieve/achieve.component';
import Stats from './pages/stats/stats.component';
import Inventory from './pages/inventory/inventory.component';
import League from './pages/league/league.component';
import Season from './pages/season/season.component';

function App() {
    return (
        <Router>
            <div className='appContainer'>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/battle" element={<Battle />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/league" element={<League />} />
                        <Route path="/season" element={<Season />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;