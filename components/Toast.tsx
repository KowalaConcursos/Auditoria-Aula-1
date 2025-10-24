
import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2800); // A bit shorter than the hook's timeout to allow fade-out
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 p-4 rounded-lg shadow-lg text-white bg-gradient-to-r from-sky-500 to-violet-500 border border-white/20 transition-all duration-300 ease-in-out
        ${visible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
    >
      {message}
    </div>
  );
};
