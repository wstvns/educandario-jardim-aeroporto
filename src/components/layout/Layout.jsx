import Header from './Header';
import Footer from './Footer';
import { FloatingContacts } from '@/components/ui/floating-contacts';
import { Heart, Star, Sparkles } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-900 relative overflow-x-hidden">
      {/* cenario de fundo*/}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        {/* corzinha de fundo*/}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute top-[50%] right-[15%] w-[400px] h-[400px] bg-green-100/40 rounded-full blur-[100px]" />
      </div>

      {/* icones fixos no fundo*/}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Star className="absolute top-[15%] right-[5%] h-12 w-12 text-yellow-400/20 fill-yellow-400/10 rotate-12" />
        <Heart className="absolute bottom-[20%] left-[5%] h-10 w-10 text-pink-400/20 rotate-[-15deg]" />
        <div className="absolute top-[40%] left-[2%] w-6 h-6 bg-blue-400/10 rounded-full" />
        <Sparkles className="absolute top-[10%] left-[15%] h-8 w-8 text-amber-400/20" />
      </div>

      <Header />
      {/* flex sem fundo proprio */}
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default Layout;