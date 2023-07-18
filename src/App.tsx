import Nav from "./components/Nav"
import ScrollButton from "./components/ScrollButton"
import About from "./sections/About"
import Classes from "./sections/Classes"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"

const App = () => {

	return <div>
		<Nav />
		<Hero />
		<About />
		<Classes />
		<Footer />
		<ScrollButton />
	</div>
}

export default App
