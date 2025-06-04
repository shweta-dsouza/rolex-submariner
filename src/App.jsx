import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CloserLook from "./components/CloserLook"
import ExploreStory from "./components/ExploreStory"
import Features from "./components/Features"
import Footer from "./components/Footer"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <CloserLook />
      <ExploreStory />
      <Features />
      <Footer />
    </main>
  )
}

export default App;
