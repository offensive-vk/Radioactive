import './styles/App.scss';
import './styles/Global.scss';
import logo from './assets/logo.jpg';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  console.log(`Found Logo @ ${logo}\n`);
  return (
    <>
      <Header/>
      <Landing />
      <Footer/>
    </>
  )
}

export default App
