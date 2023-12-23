import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';
import { User } from './components/User';
import './App.css'
import { Filter } from './components/Filter';
import { Nested } from './components/Nested';
import {Company} from './components/Nested/Company'
import {Mnc} from './components/Nested/Mnc'
import { StartUp } from './components/Nested/StartUp';



function App() {

	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/notfound" element={<NotFound />} />
					<Route path="/user/:name" element={<User />} />
					<Route path="/filter" element={<Filter />} />
					<Route path="/nested/" element={<Nested />}>
						<Route path="company" element={<Company />} />
						<Route path="mnc" element={<Mnc />} />
						<Route path="startup" element={<StartUp />} />
					</Route>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
