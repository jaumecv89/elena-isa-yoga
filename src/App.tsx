import Nav from "./components/Nav"
import ScrollButton from "./components/ScrollButton"
import About from "./sections/About"
import Classes from "./sections/Classes"
import Contact from "./sections/Contact"
import Events from "./sections/Events"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"

const App = () => {

	return <div>
		<Nav />
		<Hero />
		<About />
		<Classes />
		<Events />
		<Contact />
		<Footer />
		<ScrollButton />
	</div>
}

export default App
