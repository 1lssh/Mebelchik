import './App.scss';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import { ToOrder } from './pages/ToOrder';
import { Contacts } from './pages/Contacts';
import Home from './pages/Home';
import FullGallery from './pages/FullGallery';
import Footer from './components/Footer';
import { useState } from 'react/cjs/react.development';
import Login from './pages/Login';

function App() {

	const [isAdmin, setIsAdmin] = useState(false)

	return (
		<div className='back'>
			<Router>
				<div className="container">
					{isAdmin ? <p>admin</p> : ''}

					<Header />
					<Routes>
						<Route path='/order' element={<ToOrder />} />
						<Route path='/' element={<Home />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/gallery' element={<FullGallery isAdmin={isAdmin} />} />
						<Route path='/login' element={<Login setIsAdmin={setIsAdmin} />} />
					</Routes>


				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
