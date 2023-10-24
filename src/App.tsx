import './styles/App.scss';
import './styles/Global.scss';
import logo from './assets/logo.jpg';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionHome from './components/SectionHome';

// import Loader from './components/Loader';

function App() {
  console.log(`Found Logo @ ${logo}\n`);
  return (
    <>
      <Header />
      <Landing />
      <SectionHome />
      <Footer />
    </>
  )
}

export default App
