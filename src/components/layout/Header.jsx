import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Faixa superior*/}
      <div className="bg-blue-600/90 backdrop-blur-sm text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-4 font-bold">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+55659935474200" className="hover:text-blue-200 transition-colors">
                  (65) 99354-7420     SITE EM DESENVOLVIMENTO
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/educandariojardimaeroport/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          {/* logo centraliza*/}
          <Link to="/" className="flex items-center group">
            {/* Logo e voltinha */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-transform duration-500 group-hover:rotate-8">
              <img 
                src="/favicon.png" 
                alt="Logo" 
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>
            
            {/* deixar 1 linha o segundo txt */}
            <div className="flex flex-col items-center justify-center text-center ml-3 mr-10 lg:mr-8 min-w-max">
              <h1 className="text-xs sm:text-base font-black !text-black tracking-tight uppercase leading-none">
                Educandário
              </h1>
              <p className="text-[9px] sm:text-[10px] font-black !text-black uppercase tracking-[0.1em] leading-none mt-1 whitespace-nowrap">
                Jardim Aeroporto
              </p>
            </div>
          </Link>

          {/* links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  h-10 px-3 flex items-center justify-center text-center
                  rounded-full text-[10px] xl:text-[12px] font-black uppercase 
                  tracking-tighter leading-tight whitespace-nowrap transition-all duration-300
                  ${isActive(item.href)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'text-slate-800 hover:text-blue-600 hover:bg-white/60'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* button de matricula com detalhes */}
          <div className="hidden lg:flex items-center ml-4">
            <Button 
              asChild
              className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-5 text-xs font-black uppercase shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95 border-b-4 border-red-700"
            >
              <Link to="/matriculas">Matrícula</Link>
            </Button>
          </div>

          {/* menu mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-white/40 backdrop-blur-md text-slate-900 hover:text-blue-600 transition-all"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* menu mobile*/}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-base font-black transition-all ${
                  isActive(item.href) ? 'bg-blue-600 text-white' : 'text-slate-800 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-red-500 text-white rounded-2xl py-6 font-black uppercase shadow-lg border-b-4 border-red-700">
                <Link to="/matriculas" onClick={() => setIsMenuOpen(false)}>Fazer Matrícula</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;