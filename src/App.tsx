import './styles/App.scss';
import './styles/Global.scss';
import logo from './assets/logo.jpg';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';

function App() {
  console.log(`Found Logo @ ${logo}\n`);
  return (
    <>
      <Loader />
      <Header />
      <Landing />
      <Footer />
    </>
  )
}

export default App
