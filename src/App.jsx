import { lazy, Suspense } from "react"

const Navbar = lazy(() => import("./components/Navbar"))
const Hero = lazy(() => import("./components/Hero"))
const CloserLook = lazy(() => import("./components/CloserLook"))
const ExploreStory = lazy(() => import("./components/ExploreStory"))
const Features = lazy(() => import("./components/Features"))
const Footer = lazy(() => import("./components/Footer"))

const App = () => {

  return (
    <Suspense fallback={<>Loading...</>} >
      <main className="bg-black">
        <Navbar />
        <Hero />
        <CloserLook />
        <ExploreStory />
        <Features />
        <Footer />
      </main>
    </Suspense>
  )
}

export default App;
