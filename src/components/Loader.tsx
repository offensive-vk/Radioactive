import { useEffect } from 'react';
import logo from '../assets/logo.jpg';
import '../styles/Loader.scss';

function Loader() {
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const loading: HTMLElement | null = document.getElementById('loader');
      setTimeout(() => {
        if (loading) {
          loading.style.visibility = 'hidden';
          loading.style.display = 'none';
        }
      }, 4500);
    });
    console.log("=== Element should be hidden now ===")
  }, []); // An empty dependency array means this effect runs once when the component mounts

  return (
    <div id="loader">
      <div id="progress-bar"></div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Loader;