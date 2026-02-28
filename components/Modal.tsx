
import React from 'react';

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-8 right-8 text-white text-4xl hover:scale-125 transition-transform"
        onClick={onClose}
      >
        <i className="fas fa-times"></i>
      </button>
      
      <div 
        className="relative max-w-full max-h-full rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt="Full Preview" 
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
