import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/core/About';
import Home from './components/core/Home';
import { Navbar } from './components/Core/Navbar';
import { NotFound } from './components/core/NotFound';
import { User } from './components/core/User';
import { Filter } from './components/core/Filter';
import { Nested } from './components/core/Nested';
import { Company } from './components/Nested/Company';
import { Mnc } from './components/Nested/Mnc';
import { StartUp } from './components/Nested/StartUp';
import { API } from './components/REST/API';
import { FetchData } from './components/REST/FetchData';
import { PostData } from './components/REST/PostData';



function App() {

	return (
		<div>
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

				{/* Rest apis */}
				<Route path="/api" element={<API />}>
					<Route path="fetch" element={<FetchData />} />
					<Route path="post" element={<PostData />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
