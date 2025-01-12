import Hero from './components/Hero'
import Introducing from './components/Introducing'
import Roll from './components/Roll'
import Comingsoon from './components/Comingsoon'
import Waitlist from './components/Waitlist'
import Landwolf from './components/Landwolf'
import Brett from './components/Brett'
import Pepe from './components/Pepe'
import Andy from './components/Andy'
import Birddog from './components/Birddog'
import Footer from './components/Footer'
import Header from './components/Header'
import Firstvid from './components/Firstvid'
function App() {
  return (
    <div className="App overflow-x-clip">
      <Header />

      <Hero />
      <Introducing />
      <Firstvid />
      <Roll />
      <Comingsoon />
      <Waitlist />
      <Landwolf />
      <Brett />
      <Pepe />
      <Andy />
      <Birddog />

      <Footer />
    </div>
  );
}

export default App;
