import { useEffect, useState } from 'react';

const useBlur = (maxBlur) => {
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const blur = Math.min(scroll / 60, maxBlur);
      setBlurValue(blur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxBlur]);

  return blurValue;
};

export default useBlur;