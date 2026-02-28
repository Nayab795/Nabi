
import { useState, useEffect } from 'react';

const useTypewriter = (roles: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Fixed: Replaced NodeJS.Timeout with any to avoid namespace errors in browser environment
    let timer: any;
    const currentRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          timer = setTimeout(handleType, typingSpeed);
        } else {
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          timer = setTimeout(handleType, deletingSpeed);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

export default useTypewriter;
