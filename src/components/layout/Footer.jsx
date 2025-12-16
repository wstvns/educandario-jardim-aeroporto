import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, GraduationCap, Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-12 pb-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrip */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Educandário Jardim Aeroporto</h3>
                <p className="text-sm text-slate-600">Educação Infantil com Amor e Cuidado</p>
              </div>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Há anos cuidando e educando crianças com carinho, dedicação e metodologia pedagógica 
              especializada. Nosso compromisso é com o desenvolvimento integral de cada criança.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/educandariojardimaeroport/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 hover:text-blue-700 transition-all duration-200 ease-out hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-200 hover:text-green-700 transition-all duration-200 ease-out hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/quem-somos" className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/proposta-pedagogica" className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out">
                  Proposta Pedagógica
                </Link>
              </li>
              <li>
                <Link to="/turmas-horarios" className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out">
                  Turmas e Horários
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/matriculas" className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out">
                  Matrículas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 text-sm">
                    Rua João Líbano, 547<br />
                    Centro Norte<br />
                    Várzea Grande - MT
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a 
                  href="tel:+55659935474200" 
                  className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out text-sm"
                >
                  (65) 99354-7420
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a 
                  href="mailto:placeholder@placeholder.com.br" 
                  className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out text-sm"
                >
                  educandariojardimaeroport@placeholder.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-slate-600 text-sm">
                  <p>Segunda a Sexta:</p>
                  <p>06:20h às 18:20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de divisao */}
        <div className="border-t border-slate-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm flex items-center">
              © {currentYear} Educandário Jardim Aeroporto. Feito com 
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              para as crianças.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <span className="text-slate-600 text-sm">Desenvolvido por</span>
                <a 
                  href="https://github.com/wstvns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/wallisson-stevan-985b9375/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-out"
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