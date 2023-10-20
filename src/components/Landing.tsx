import React, { useEffect } from 'react';
import '../styles/Landing.scss';

const Landing: React.FC = () => {
  useEffect(() => {
    startAnimation();
  }, []);

  async function runAnimation() {
    const spans = document.querySelectorAll('.landing');
    let delay = 0;

    for (let i = 0; i < spans.length; i++) {
      const span = spans[i] as HTMLElement;
      span.style.animation = `code 5s ${delay}s ease`;
      delay += 5;

      // Clear the animation for the current span when it's done
      span.addEventListener('animationend', () => {
        span.style.animation = 'none';
      });
    }

    // Calculate the total animation duration
    const totalDuration = (spans.length - 1) * 5 + 5;

    // Wait for the total duration before resolving
    await new Promise((resolve) => {
      setTimeout(() => resolve('Done'), totalDuration * 1000);
    });
  }

  async function startAnimation() {
    await runAnimation();
    // Call startAnimation recursively to repeat the animation
    startAnimation();
  }

  return (
    <h1>
      <span className="landing code">Code.</span>
      <span className="landing test">Test.</span>
      <span className="landing deploy">Deploy.</span>
    </h1>
  );
};

export default Landing;
