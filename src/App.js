import Layout from './components/Layout';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles/loading.css";
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Gallery from './pages/Gallery';
const About = React.lazy(() => import('./pages/About'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/contact-us"
					element={
						<Suspense fallback={<div id="loader">
						<div class="cube-folding">
							<span class="leaf1"></span>
							<span class="leaf2"></span>
							<span class="leaf3"></span>
							<span class="leaf4"></span>
						</div>
					</div>}>
							<Contact />
						</Suspense>
					}
				/>
				<Route
					path="/about-us"
					element={
						<Suspense fallback={<div id="loader">
						<div class="cube-folding">
							<span class="leaf1"></span>
							<span class="leaf2"></span>
							<span class="leaf3"></span>
							<span class="leaf4"></span>
						</div>
					</div>}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path="/gallery"
					element={
						<Suspense fallback={<div id="loader">
						<div class="cube-folding">
							<span class="leaf1"></span>
							<span class="leaf2"></span>
							<span class="leaf3"></span>
							<span class="leaf4"></span>
						</div>
					</div>}>
							<Gallery />
						</Suspense>
					}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
