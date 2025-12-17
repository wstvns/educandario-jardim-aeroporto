import { MessageCircle, Instagram } from 'lucide-react';

export function FloatingContacts() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-3">
      {}
      <a
        href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-sm px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco no WhatsApp
        </span>
      </a>

      {}
      <a
        href="https://www.instagram.com/educandariojardimaeroport/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Instagram"
      >
        <Instagram className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-sm px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Siga no Instagram
        </span>
      </a>
    </div>
  );
}

