import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.scss';
import Banner from '../src/components/Banner';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import AboutUs from './pages/AboutUs';
import Services from '../src/pages/Services';
import Pricing from '../src/pages/Pricing';
import Projects from '../src/pages/Projects';


function App() {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/services" element={<Services />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
				<Banner />
				<Footer />
			</Router>
		</>
	);
}

export default App;
