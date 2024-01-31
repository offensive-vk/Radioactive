import './styles/App.scss';
import './styles/Global.scss';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Analytics } from '@vercel/analytics/react';


function App() {
  document.title = `Radioactive , Inc - Vedansh .K`;
  console.log(`Welcome To Console @ ${undefined}.\n Page Has Been Rendered. \n`);
  return (
    <>
      <Header />
      <Landing />
      <Home />
      <Footer />
      <Analytics />
    </>
  )
}

export default App;