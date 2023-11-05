import React, { useEffect, useState } from 'react';

const MaxBrowserWidth: React.FC = () => {
  const [maxWidth, setMaxWidth] = useState<number>(window.innerWidth);

  const updateMaxWidth = () => {
    setMaxWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMaxWidth);
    return () => {
      window.removeEventListener('resize', updateMaxWidth);
    };
  }, []);

  return (
    <div>
      <p>Max Browser Width: {maxWidth}px</p>
    </div>
  );
};

export default MaxBrowserWidth;
