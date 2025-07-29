import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, GraduationCap, Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-blue-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Educandário Jardim Aeroporto</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Educação Infantil com Amor e Cuidado</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Há anos cuidando e educando crianças com carinho, dedicação e metodologia pedagógica 
              especializada. Nosso compromisso é com o desenvolvimento integral de cada criança.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/educandariojardimaeroport/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/quem-somos" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/proposta-pedagogica" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Proposta Pedagógica
                </Link>
              </li>
              <li>
                <Link to="/turmas-horarios" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Turmas e Horários
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/matriculas" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Matrículas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">
                    Rua João Líbano, 547<br />
                    Centro Norte<br />
                    Várzea Grande - MT
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+5565935474200" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  (65) 9354-7420
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:placeholder@placeholder.com.br" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  educandariojardimaeroport@placeholder.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>Segunda a Sexta:</p>
                  <p>06:20h às 18:20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              © {currentYear} Educandário Jardim Aeroporto. Feito com 
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              para as crianças.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400 text-sm">Desenvolvido por</span>
                <a 
                  href="https://github.com/wstvns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/wallisson-stevan-985b9375/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

