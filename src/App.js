
import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className='App max-w-7xl w-full mx-auto'>
      <Nav />
      <div className="px-4 md:px-8 lg:px-16 pt-10">
        <Intro />
        <FadeIn><About /></FadeIn>
        <FadeIn><Projects /></FadeIn>
      </div>
    </div>
  );
}

export default App;
