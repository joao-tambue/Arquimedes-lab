import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MenuOption {
  label: string;
  path: string;
}

const options: MenuOption[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Ajuda', path: '/ajuda' },
];

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end space-y-2 mb-3"
          >
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  to={option.path}
                  onClick={() => setIsOpen(false)} // Fecha o menu ao navegar
                  className="block bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                >
                  {option.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl text-3xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {isOpen ? '×' : '+'}
      </button>
    </div>
  );
};

export default FloatingMenu;
