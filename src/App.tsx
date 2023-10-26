import './styles/App.scss';
import './styles/Global.scss';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionHome from './components/SectionHome';


function App() {
  console.log(`Welcome To Console @ ${undefined}.\n`);
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
