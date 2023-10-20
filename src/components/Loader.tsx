import logo from '../assets/logo.jpg';
import '../styles/Loader.scss';

function Loader() {
 
  return (
    <div id="loader">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Loader;
