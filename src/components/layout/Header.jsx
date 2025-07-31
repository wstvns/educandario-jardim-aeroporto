import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, MessageCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Proposta Pedagógica', href: '/proposta-pedagogica' },
    { name: 'Turmas e Horários', href: '/turmas-horarios' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Eventos/Notícias', href: '/eventos-noticias' },
    { name: 'Matrículas', href: '/matriculas' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+55659935474200" className="hover:text-blue-200 transition-colors">
                  (65) 99354-7420
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/educandariojardimaeroport/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-0">
            <div className="w-28 h-28 flex items-center justify-center">
                <img src="/favicon.png" alt="Logo" className="w-28 h-28 object-contain" />
            </div>
            <div>
              <h1 className="text-sm font-medium text-gray-800 dark:text-white">Educandário</h1>
              <p className="text-sm text-gray-600 dark:text-blue-400 font-medium">Jardim Aeroporto</p>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-0 space-y-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              asChild
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full px-6"
            >
              <Link to="/matriculas">Faça sua Matrícula</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full"
              >
                <Link to="/matriculas" onClick={() => setIsMenuOpen(false)}>
                  Faça sua Matrícula
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

