import { useState } from 'react'
import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Download from './sections/Download'
import Footer from './sections/Footer'

function App() {
	const [count, setCount] = useState(0)

	return (
		<main className='overflow-hidden'>
			<Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Download />
			<Footer />
		</main>
	)
}

export default App
